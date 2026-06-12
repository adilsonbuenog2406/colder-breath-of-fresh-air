import { createFileRoute, notFound } from "@tanstack/react-router";

import { SeoPageTemplate } from "@/components/seo/SeoPageTemplate";
import { buildSeoHead, schemasForSeoPage } from "@/components/seo/seo-head";
import { getSeoPage, type SeoPage } from "@/data/seo-pages";

export const Route = createFileRoute("/segmentos/$slug")({
  loader: ({ params }) => {
    const page = getSeoPage("segment", params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    const page = (loaderData ?? getSeoPage("segment", params.slug)) as SeoPage;
    return buildSeoHead({
      title: page.title,
      description: page.metaDescription,
      path: page.path,
      jsonLd: schemasForSeoPage(page),
    });
  },
  component: SegmentPage,
});

function SegmentPage() {
  const page = Route.useLoaderData();
  return <SeoPageTemplate page={page} />;
}
