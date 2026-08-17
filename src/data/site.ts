import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_E164 } from "@/lib/contact";

export const SITE_URL = "https://colderclimatizadores.com.br";
export const SITE_NAME = "Colder Climatizadores";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-colder-climatizadores.jpg`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "HVACBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: `+${PHONE_E164}`,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.zip,
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Paraná" },
    { "@type": "City", name: "Maringá" },
    { "@type": "City", name: "Londrina" },
    { "@type": "City", name: "Curitiba" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_DISPLAY,
    contactType: "sales",
    areaServed: "BR",
    availableLanguage: "pt-BR",
  },
};

export const MAIN_ROUTES = [
  { path: "/", label: "Home" },
  { path: "/quem-somos", label: "Quem Somos" },
  { path: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { path: "/contato", label: "Contato" },
];
