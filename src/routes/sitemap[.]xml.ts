import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { indexablePaths } from "@/data/seo-pages";
import { SITE_URL } from "@/data/site";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = indexablePaths.map((path) => ({
          path,
          changefreq: path === "/" ? "weekly" : "monthly",
          priority: path === "/" ? "1.0" : path.includes("/blog/") ? "0.6" : "0.8",
        }));

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${SITE_URL}${e.path === "/" ? "" : e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

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
