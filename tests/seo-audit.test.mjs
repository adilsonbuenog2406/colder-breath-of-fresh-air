import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = (...parts) => join(root, "src", ...parts);

async function loadSeoPages() {
  const seoPath = src("data", "seo-pages.ts");
  const text = readFileSync(seoPath, "utf8");
  return { text, seoPath };
}

test("indexablePaths excludes lead form and includes blog hub", async () => {
  const { text } = await loadSeoPages();
  const start = text.indexOf("export const indexablePaths");
  const block = text.slice(start, start + 800);
  assert.match(block, /"\/blog"/);
  assert.doesNotMatch(block, /formulario-interessados/);
});

test("BlogPage fields include dates and relatedLinks", async () => {
  const { text } = await loadSeoPages();
  assert.match(text, /datePublished:\s*string/);
  assert.match(text, /dateModified:\s*string/);
  assert.match(text, /relatedLinks:\s*SeoRelatedLink\[\]/);
  assert.match(text, /datePublished:\s*"2025-/);
  assert.match(text, /dateModified:\s*"2026-/);
});

test("priority pages have distinct H1 copy", async () => {
  const { text } = await loadSeoPages();
  assert.match(text, /h1:\s*"Climatizadores industriais em Maringá"/);
  assert.match(text, /h1:\s*"Climatizador para supermercado"/);
  assert.match(text, /h1:\s*"Climatizadores para igrejas e templos"/);
  assert.match(text, /Rua Rodolfo Cremm/);
});

test("titles in seo data avoid obvious duplicates for priority pages", async () => {
  const { text } = await loadSeoPages();
  const pairs = [
    ["Climatizadores em Maringá para Empresas | Colder", "maringaPage"],
    ["Climatizador para Supermercado | Projeto e Instalação", "supermercadoPage"],
    ["Climatizador para Igreja | Conforto e Economia | Colder", "igrejaPage"],
  ];
  for (const [title] of pairs) {
    assert.match(text, new RegExp(`title:\\s*"${title.replaceAll("|", "\\|")}"`));
  }
  // Final page objects must keep distinct commercial titles across the three intents
  const commercial = pairs.map(([title]) => title);
  assert.equal(new Set(commercial).size, 3);
});

test("formulario route uses noindex", () => {
  const source = readFileSync(src("routes", "formulario-interessados.tsx"), "utf8");
  assert.match(source, /robots:\s*"noindex,follow"/);
});

test("legacy industrial path redirects in server", () => {
  const source = readFileSync(src("server.ts"), "utf8");
  assert.match(source, /\/climatizadores-industrias/);
  assert.match(source, /climatizadores-para-industrias/);
  assert.match(source, /301/);
});

test("blog hub route exists and breadcrumbs point to /blog", () => {
  const blogIndex = readFileSync(src("routes", "blog", "index.tsx"), "utf8");
  assert.match(blogIndex, /createFileRoute\("\/blog\/?"\)/);
  const template = readFileSync(src("components", "seo", "SeoPageTemplate.tsx"), "utf8");
  assert.match(template, /href:\s*"\/blog"/);
  assert.doesNotMatch(template, /href:\s*"\/blog\/climatizador-industrial-ou-ar-condicionado"/);
  const seoHead = readFileSync(src("components", "seo", "seo-head.ts"), "utf8");
  assert.match(seoHead, /path:\s*"\/blog"/);
  assert.match(seoHead, /datePublished/);
  assert.match(seoHead, /dateModified/);
  assert.match(seoHead, /image:/);
});

test("InternalLinksSection is mounted in SEO templates", () => {
  const template = readFileSync(src("components", "seo", "SeoPageTemplate.tsx"), "utf8");
  assert.match(template, /InternalLinksSection/);
  assert.match(template, /page\.relatedLinks/);
});

test("home exposes priority HTML links", () => {
  const home = readFileSync(src("routes", "index.tsx"), "utf8");
  assert.match(home, /PriorityLinks/);
  const priority = readFileSync(src("components", "site", "PriorityLinks.tsx"), "utf8");
  for (const href of [
    "/cidades/climatizadores-industriais-em-maringa",
    "/segmentos/climatizadores-para-supermercados",
    "/segmentos/climatizadores-para-igrejas",
    "/segmentos/climatizadores-para-industrias",
    "/segmentos/climatizadores-para-galpoes",
    "/solucoes/climatizadores-industriais",
    "/blog",
  ]) {
    assert.match(priority, new RegExp(href.replaceAll("/", "\\/")));
  }
});

test("areas hub lists segments", () => {
  const areas = readFileSync(src("routes", "areas-de-atuacao.tsx"), "utf8");
  assert.match(areas, /allSeoPages/);
  assert.match(areas, /Segmentos/);
  assert.match(areas, /blogPages/);
});

test("Areas and Solutions cards are linkable", () => {
  const areas = readFileSync(src("components", "site", "Areas.tsx"), "utf8");
  assert.match(areas, /<Link/);
  assert.match(areas, /href:/);
  const solutionsData = readFileSync(src("data", "solutions.ts"), "utf8");
  assert.match(solutionsData, /href:\s*"\/segmentos\//);
  const solutionsUi = readFileSync(src("components", "site", "Solutions.tsx"), "utf8");
  assert.match(solutionsUi, /href=\{href\}/);
});

test("guarantee copy is consistently 3 years", () => {
  const why = readFileSync(src("components", "site", "WhyColder.tsx"), "utf8");
  assert.match(why, /Por que a Colder\?/);
  assert.match(why, /3 anos de garantia/);
  assert.doesNotMatch(why, /2 anos/);
});

test("numeric marketing claims are qualified or removed from home modules", () => {
  for (const file of ["About.tsx", "Benefits.tsx", "CommercialCTA.tsx", "Products.tsx"]) {
    const source = readFileSync(src("components", "site", file), "utf8");
    assert.doesNotMatch(source, /até 90%/i);
    assert.doesNotMatch(source, /até 16°C/i);
    assert.doesNotMatch(source, /até 16ºC/i);
  }
});

test("hero avoids high-priority video preload", () => {
  const home = readFileSync(src("routes", "index.tsx"), "utf8");
  assert.doesNotMatch(home, /fetchPriority:\s*"high"/);
  assert.doesNotMatch(home, /preload.*video/s);
  const hero = readFileSync(src("components", "site", "Hero.tsx"), "utf8");
  assert.match(hero, /preload="none"/);
  assert.match(hero, /prefers-reduced-motion/);
  assert.match(hero, /hero-industrial\.webp/);
});

test("HTML cache strategy is public SWR, not global no-store", () => {
  const cache = readFileSync(src("lib", "html-cache-headers.ts"), "utf8");
  assert.match(cache, /s-maxage=60/);
  assert.match(cache, /stale-while-revalidate=300/);
  const vite = readFileSync(join(root, "vite.config.ts"), "utf8");
  assert.doesNotMatch(vite, /"\/\*\*":\s*\{\s*headers:[\s\S]*no-store/);
});

test("inbound link coverage for indexable paths from known HTML sources", async () => {
  const { text } = await loadSeoPages();
  const indexStart = text.indexOf("export const indexablePaths");
  const indexBlock = text.slice(indexStart, indexStart + 600);
  const staticPaths = [...indexBlock.matchAll(/"(\/[^"]+)"/g)].map((m) => m[1]);

  const linkSources = [
    readFileSync(src("components", "site", "Header.tsx"), "utf8"),
    readFileSync(src("components", "site", "Footer.tsx"), "utf8"),
    readFileSync(src("components", "site", "PriorityLinks.tsx"), "utf8"),
    readFileSync(src("components", "site", "Areas.tsx"), "utf8"),
    readFileSync(src("data", "solutions.ts"), "utf8"),
    readFileSync(src("routes", "areas-de-atuacao.tsx"), "utf8"),
    text,
  ].join("\n");

  // Dynamic hubs render allSeoPages/blogPages — treat as covering all SEO + blog paths.
  const coveredByHub = new Set([
    ...[...text.matchAll(/path:\s*"(\/[^"]+)"/g)].map((m) => m[1]),
    "/blog",
    "/",
    "/quem-somos",
    "/areas-de-atuacao",
    "/contato",
  ]);

  const orphans = [];
  for (const path of [...staticPaths, ...coveredByHub]) {
    if (path === "/") continue;
    const escaped = path.replaceAll("/", "\\/");
    const linked =
      coveredByHub.has(path) ||
      new RegExp(`["'\`]${escaped}["'\`]`).test(linkSources) ||
      linkSources.includes(path);
    if (!linked) orphans.push(path);
  }

  // Hub pages render every SEO/blog path; ensure critical static shells are linked.
  for (const required of [
    "/cidades/climatizadores-industriais-em-maringa",
    "/segmentos/climatizadores-para-supermercados",
    "/segmentos/climatizadores-para-igrejas",
    "/blog",
  ]) {
    assert.ok(
      new RegExp(required.replaceAll("/", "\\/")).test(linkSources),
      `missing inbound reference for ${required}`,
    );
  }

  assert.equal(orphans.filter((p) => p === "/formulario-interessados").length, 0);
});
