export const META_PIXEL_ID = "846718168511783";

export const LEAD_FORM_PATH = "/formulario-interessados";

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

type FbqFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: FbqFunction;
  loaded?: boolean;
  version?: string;
};

export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  if (params) {
    window.fbq("track", event, params);
    return;
  }

  window.fbq("track", event);
}

export function trackMetaCustomEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  if (params) {
    window.fbq("trackCustom", event, params);
    return;
  }

  window.fbq("trackCustom", event);
}

export function trackLeadFormConversion() {
  trackMetaEvent("Lead", {
    content_name: "Formulário de Interessados",
    content_category: "Lead Form",
    value: 0,
    currency: "BRL",
  });
}

export function trackLeadFormView() {
  trackMetaEvent("ViewContent", {
    content_name: "Formulário de Interessados",
    content_category: "Lead Form",
  });
}

export function trackWhatsAppContact(source: string) {
  trackMetaEvent("Contact", {
    content_name: source,
    content_category: "WhatsApp",
  });
}

export function getWhatsAppClickSource(link: HTMLAnchorElement): string {
  const explicitSource = link.getAttribute("data-meta-source");
  if (explicitSource) {
    return explicitSource;
  }

  const parentSource = link.closest("[data-meta-source]")?.getAttribute("data-meta-source");
  if (parentSource) {
    return parentSource;
  }

  if (link.closest("header")) {
    return "Header WhatsApp";
  }

  if (
    link.classList.contains("fixed") ||
    link.getAttribute("aria-label") === "Falar pelo WhatsApp"
  ) {
    return "WhatsApp Float";
  }

  if (link.closest("footer")) {
    return "Footer WhatsApp";
  }

  return `WhatsApp - ${window.location.pathname}`;
}

export const META_PIXEL_BOOTSTRAP = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`.trim();

export const META_PIXEL_DEFERRED_BOOTSTRAP = `
(function(){
  function loadPixel(){
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${META_PIXEL_ID}');
    fbq('track', 'PageView');
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadPixel, { timeout: 3000 });
  } else {
    window.addEventListener('load', loadPixel, { once: true });
  }
})();
`.trim();
