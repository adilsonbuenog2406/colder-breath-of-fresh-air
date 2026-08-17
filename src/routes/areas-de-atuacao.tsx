import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CTASection } from "@/components/seo/CTASection";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Áreas de Atuação | Climatização Industrial e Empresarial";
const DESCRIPTION =
  "Veja segmentos atendidos pela Colder: indústrias, galpões, igrejas, clínicas, academias, escolas, restaurantes e supermercados.";

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
