import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Products } from "@/components/site/Products";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CTASection } from "@/components/seo/CTASection";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Quem Somos | Colder Climatizadores";
const DESCRIPTION =
  "Conheca a Colder Climatizadores, especialista em climatizacao industrial e empresarial para empresas, galpoes, igrejas, clinicas e industrias.";

export const Route = createFileRoute("/quem-somos")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/quem-somos",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Quem Somos", path: "/quem-somos" },
        ]),
      ],
    }),
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-24 text-white">
          <div className="container-page py-14 sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Colder Climatizadores
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">Quem Somos</h1>
            <p className="mt-5 max-w-2xl text-white/78">
              Atuamos com solucoes de climatizacao evaporativa para empresas que precisam de
              conforto termico, renovacao do ar e economia de energia.
            </p>
          </div>
        </section>
        <About />
        <Products />
        <CTASection
          title="Quer conhecer a melhor solucao para o seu ambiente?"
          text="A equipe da Colder avalia o tipo de operacao, o espaco disponivel e a expectativa de conforto antes de indicar o projeto."
          buttonLabel="Falar com a Colder"
        />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
