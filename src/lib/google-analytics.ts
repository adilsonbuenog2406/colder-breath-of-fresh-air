export const GOOGLE_ANALYTICS_ID = "G-905SZQTWBS";
export const GOOGLE_ADS_ID = "AW-18263110467";

export const GOOGLE_ANALYTICS_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;

export const GOOGLE_ANALYTICS_BOOTSTRAP = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');
gtag('config', '${GOOGLE_ADS_ID}');
`.trim();
