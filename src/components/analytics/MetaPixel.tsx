import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import {
  getWhatsAppClickSource,
  LEAD_FORM_PATH,
  trackLeadFormView,
  trackMetaEvent,
  trackWhatsAppContact,
} from "@/lib/meta-pixel";

export function MetaPixelRouteTracker() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = pathname;

      if (pathname === LEAD_FORM_PATH) {
        trackLeadFormView();
      }

      return;
    }

    if (previousPath.current === pathname) {
      return;
    }

    previousPath.current = pathname;
    trackMetaEvent("PageView");

    if (pathname === LEAD_FORM_PATH) {
      trackLeadFormView();
    }
  }, [pathname]);

  useEffect(() => {
    function handleWhatsAppClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a[href*="wa.me"]');
      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      trackWhatsAppContact(getWhatsAppClickSource(link));
    }

    document.addEventListener("click", handleWhatsAppClick, true);
    return () => document.removeEventListener("click", handleWhatsAppClick, true);
  }, []);

  return null;
}
