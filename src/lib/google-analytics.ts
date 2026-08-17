export const GOOGLE_ANALYTICS_ID = "G-905SZQTWBS";
export const GOOGLE_ADS_ID = "AW-18263110467";

/**
 * Optional Google Ads conversion send_to (AW-XXXX/label).
 * When set, contact actions also fire gtag conversion for Ads bidding.
 * Leave empty until the conversion action is created in Google Ads.
 */
export const GOOGLE_ADS_CONTACT_SEND_TO = "";

export const GOOGLE_ANALYTICS_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;

export const GOOGLE_ANALYTICS_BOOTSTRAP = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');
gtag('config', '${GOOGLE_ADS_ID}');
`.trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGtagEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  if (params) {
    window.gtag("event", eventName, params);
    return;
  }

  window.gtag("event", eventName);
}

function fireAdsConversionIfConfigured(params?: Record<string, unknown>) {
  if (!GOOGLE_ADS_CONTACT_SEND_TO) {
    return;
  }

  trackGtagEvent("conversion", {
    send_to: GOOGLE_ADS_CONTACT_SEND_TO,
    ...params,
  });
}

/** Contact intent: WhatsApp, phone, or email. */
export function trackGoogleAdsContact(source: string, method: "whatsapp" | "phone" | "email") {
  trackGtagEvent("contact", {
    send_to: GOOGLE_ADS_ID,
    event_category: "engagement",
    event_label: source,
    method,
  });

  fireAdsConversionIfConfigured({
    event_label: source,
    method,
  });
}

/** Lead form submitted / redirected to WhatsApp with filled data. */
export function trackGoogleAdsLead(source = "Formulário de Interessados") {
  trackGtagEvent("generate_lead", {
    send_to: GOOGLE_ADS_ID,
    event_category: "lead",
    event_label: source,
    currency: "BRL",
    value: 0,
  });

  // Also mark as contact so Ads can optimize on a single contact goal if preferred.
  trackGoogleAdsContact(source, "whatsapp");
}
