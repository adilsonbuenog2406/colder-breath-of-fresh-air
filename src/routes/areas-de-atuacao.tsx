import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CTASection } from "@/components/seo/CTASection";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { allSeoPages } from "@/data/seo-pages";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Areas de Atuacao | Climatizacao Industrial e Empresarial";
const DESCRIPTION =
  "Veja segmentos atendidos pela Colder: industrias, galpoes, igrejas, clinicas, academias, escolas, restaurantes e supermercados.";

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
          { name: "Areas de Atuacao", path: "/areas-de-atuacao" },
        ]),
      ],
    }),
  component: AreasPage,
});

function AreasPage() {
  const segmentPages = allSeoPages.filter((page) => page.type === "segment");
  const solutionPages = allSeoPages.filter((page) => page.type === "solution");
  const cityPages = allSeoPages.filter((page) => page.type === "city");

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-24 text-white">
          <div className="container-page py-14 sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Segmentos e solucoes
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">Areas de Atuacao</h1>
            <p className="mt-5 max-w-2xl text-white/78">
              Páginas especificas para cada intencao de busca: solucoes, segmentos e cidades
              atendidas pela Colder.
            </p>
          </div>
        </section>

        <ListingSection title="Solucoes principais" pages={solutionPages} />
        <ListingSection title="Segmentos atendidos" pages={segmentPages} muted />
        <ListingSection title="SEO local" pages={cityPages} />

        <CTASection
          title="Nao encontrou seu tipo de ambiente?"
          text="Fale com a Colder para avaliar industrias, lojas, barracoes, recepcoes e outros ambientes empresariais."
          buttonLabel="Solicitar avaliacao"
        />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function ListingSection({
  title,
  pages,
  muted = false,
}: {
  title: string;
  pages: Array<{ path: string; h1: string; subtitle: string }>;
  muted?: boolean;
}) {
  return (
    <section
      className="section-pad"
      style={muted ? { background: "var(--color-surface)" } : undefined}
    >
      <div className="container-page">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <a key={page.path} href={page.path} className="card-soft card-soft-hover p-6">
              <h3 className="text-lg font-semibold">{page.h1}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.subtitle}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Ver pagina <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
