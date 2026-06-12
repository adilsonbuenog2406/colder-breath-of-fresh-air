import { createFileRoute, notFound } from "@tanstack/react-router";

import { BlogArticleTemplate } from "@/components/seo/SeoPageTemplate";
import { buildSeoHead, schemasForBlogPage } from "@/components/seo/seo-head";
import { getBlogPage, type BlogPage } from "@/data/seo-pages";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const page = getBlogPage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    const page = (loaderData ?? getBlogPage(params.slug)) as BlogPage;
    return buildSeoHead({
      title: page.title,
      description: page.metaDescription,
      path: page.path,
      jsonLd: schemasForBlogPage(page),
    });
  },
  component: BlogPageRoute,
});

function BlogPageRoute() {
  const page = Route.useLoaderData();
  return <BlogArticleTemplate page={page} />;
}
