import { useEffect } from "react";

import { trackGoogleAdsContact } from "@/lib/google-analytics";
import { getWhatsAppClickSource } from "@/lib/meta-pixel";

function resolveContactMethod(href: string): "whatsapp" | "phone" | "email" | null {
  const value = href.toLowerCase();
  if (
    value.includes("wa.me") ||
    value.includes("api.whatsapp.com") ||
    value.includes("whatsapp.com")
  ) {
    return "whatsapp";
  }
  if (value.startsWith("tel:")) {
    return "phone";
  }
  if (value.startsWith("mailto:")) {
    return "email";
  }
  return null;
}

function resolveContactSource(
  link: HTMLAnchorElement,
  method: "whatsapp" | "phone" | "email",
): string {
  if (method === "whatsapp") {
    return getWhatsAppClickSource(link);
  }

  const explicitSource = link.getAttribute("data-meta-source");
  if (explicitSource) {
    return explicitSource;
  }

  if (method === "phone") {
    return `Phone - ${window.location.pathname}`;
  }

  return `Email - ${window.location.pathname}`;
}

/**
 * Fires Google Ads contact events for WhatsApp, phone and email clicks site-wide.
 */
export function GoogleAdsContactTracker() {
  useEffect(() => {
    function handleContactClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const href = link.getAttribute("href") ?? "";
      const method = resolveContactMethod(href);
      if (!method) {
        return;
      }

      trackGoogleAdsContact(resolveContactSource(link, method), method);
    }

    document.addEventListener("click", handleContactClick, true);
    return () => document.removeEventListener("click", handleContactClick, true);
  }, []);

  return null;
}
