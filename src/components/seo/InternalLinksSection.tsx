import type { SeoRelatedLink } from "@/data/seo-pages";

export function InternalLinksSection({ links }: { links: SeoRelatedLink[] }) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <span className="eyebrow">Links relacionados</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Continue explorando soluções da Colder
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="rounded-lg border border-border bg-background p-4 text-sm font-semibold transition-colors hover:border-brand hover:bg-brand-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
