import { ORGANIZATION_SCHEMA, SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/data/site";
import { canonicalUrl, type BlogPage, type SeoPage } from "@/data/seo-pages";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

interface HeadInput {
  title: string;
  description: string;
  path: string;
  jsonLd?: unknown[];
  robots?: string;
}

export function buildSeoHead({
  title,
  description,
  path,
  jsonLd = [],
  robots = "index,follow",
}: HeadInput) {
  const url = canonicalUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: url },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl(page.path)}#service`,
    name: page.h1,
    serviceType: page.primaryKeyword,
    description: page.metaDescription,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed: page.localArea
      ? {
          "@type": page.localArea === "Paraná" ? "AdministrativeArea" : "City",
          name: page.localArea,
        }
      : { "@type": "AdministrativeArea", name: "Paraná" },
    url: canonicalUrl(page.path),
  };
}

export function blogPostingSchema(page: BlogPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page.h1,
    description: page.metaDescription,
    image: page.imageUrl ?? DEFAULT_OG_IMAGE,
    datePublished: page.datePublished,
    dateModified: page.dateModified ?? page.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(page.path),
    },
    url: canonicalUrl(page.path),
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function schemasForSeoPage(page: SeoPage) {
  return [
    ORGANIZATION_SCHEMA,
    serviceSchema(page),
    faqSchema(page.faq),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      {
        name:
          page.type === "solution" ? "Soluções" : page.type === "segment" ? "Segmentos" : "Cidades",
        path:
          page.type === "solution"
            ? "/solucoes/climatizadores-industriais"
            : page.type === "segment"
              ? "/areas-de-atuacao"
              : "/cidades/climatizadores-industriais-no-parana",
      },
      { name: page.h1, path: page.path },
    ]),
  ];
}

export function schemasForBlogPage(page: BlogPage) {
  return [
    ORGANIZATION_SCHEMA,
    blogPostingSchema(page),
    faqSchema(page.faq),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: page.h1, path: page.path },
    ]),
  ];
}
