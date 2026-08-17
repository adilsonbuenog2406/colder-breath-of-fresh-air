import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { blogPages, indexablePaths, allSeoPages } from "@/data/seo-pages";
import { SITE_URL } from "@/data/site";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

function lastmodForPath(path: string): string | undefined {
  const blog = blogPages.find((page) => page.path === path);
  if (blog) return blog.lastmod ?? blog.dateModified;

  if (path === "/blog") {
    return blogPages
      .map((page) => page.dateModified)
      .sort()
      .at(-1);
  }

  // Content pages share editorial refresh date of the SEO content pack
  if (allSeoPages.some((page) => page.path === path)) {
    return "2026-03-15";
  }

  if (
    path === "/" ||
    path === "/quem-somos" ||
    path === "/areas-de-atuacao" ||
    path === "/contato"
  ) {
    return "2026-03-15";
  }

  return undefined;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = indexablePaths.map((path) => ({
          path,
          lastmod: lastmodForPath(path),
          changefreq: path === "/" ? "weekly" : "monthly",
          priority: path === "/" ? "1.0" : path.includes("/blog") ? "0.6" : "0.8",
        }));

        const urls = entries.map((e) => {
          const lines = ["  <url>", `    <loc>${SITE_URL}${e.path === "/" ? "" : e.path}</loc>`];
          if (e.lastmod) lines.push(`    <lastmod>${e.lastmod}</lastmod>`);
          lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
          lines.push(`    <priority>${e.priority}</priority>`);
          lines.push("  </url>");
          return lines.join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
