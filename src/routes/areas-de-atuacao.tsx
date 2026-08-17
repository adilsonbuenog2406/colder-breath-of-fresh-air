import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CTASection } from "@/components/seo/CTASection";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { allSeoPages, blogPages } from "@/data/seo-pages";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Áreas de Atuação | Climatização Industrial";
const DESCRIPTION =
  "Segmentos, soluções e cidades atendidas pela Colder: indústrias, galpões, igrejas, clínicas, supermercados e mais.";

export const Route = createFileRoute("/areas-de-atuacao")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/areas-de-atuacao",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Áreas de Atuação", path: "/areas-de-atuacao" },
        ]),
      ],
    }),
  component: AreasPage,
});

function AreasPage() {
  const solutions = allSeoPages.filter((page) => page.type === "solution");
  const segments = allSeoPages.filter((page) => page.type === "segment");
  const cities = allSeoPages.filter((page) => page.type === "city");

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-24 text-white">
          <div className="container-page py-14 sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Segmentos e soluções
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">Áreas de Atuação</h1>
            <p className="mt-5 max-w-2xl text-white/78">
              Páginas específicas para cada intenção de busca: soluções, segmentos e cidades
              atendidas pela Colder.
            </p>
          </div>
        </section>

        <HubSection
          title="Soluções"
          items={solutions.map((p) => ({ href: p.path, label: p.h1 }))}
        />
        <HubSection
          title="Segmentos"
          items={segments.map((p) => ({ href: p.path, label: p.h1 }))}
        />
        <HubSection title="Cidades" items={cities.map((p) => ({ href: p.path, label: p.h1 }))} />
        <HubSection
          title="Blog"
          items={[
            { href: "/blog", label: "Todos os artigos" },
            ...blogPages.map((p) => ({ href: p.path, label: p.h1 })),
          ]}
        />

        <CoverageMapSection />

        <CTASection
          title="Não encontrou seu tipo de ambiente?"
          text="Fale com a Colder para avaliar indústrias, lojas, barracões, recepções e outros ambientes empresariais."
          buttonLabel="Solicitar avaliação"
        />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function HubSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ href: string; label: string }>;
}) {
  return (
    <section className="border-b border-border py-12">
      <div className="container-page">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="block rounded-lg border border-border bg-background p-4 text-sm font-semibold transition-colors hover:border-brand hover:bg-brand-soft"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
