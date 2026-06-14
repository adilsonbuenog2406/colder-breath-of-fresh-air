import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { About } from "@/components/site/About";
import { Differentials } from "@/components/site/Differentials";
import { Areas } from "@/components/site/Areas";
import { Clients } from "@/components/site/Clients";
import { CommercialCTA } from "@/components/site/CommercialCTA";
import { Products } from "@/components/site/Products";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { FAQSection } from "@/components/seo/FAQSection";
import { buildSeoHead, breadcrumbSchema, faqSchema } from "@/components/seo/seo-head";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Colder Climatizadores | Climatização Industrial e Empresarial";
const DESCRIPTION =
  "A Colder oferece soluções de climatização industrial e empresarial para indústrias, galpões, igrejas, clínicas e empresas. Solicite um orçamento.";

const HOME_FAQ = [
  {
    question: "A Colder trabalha com climatizadores industriais?",
    answer:
      "Sim. A Colder atende empresas, industrias, galpoes, barracoes e ambientes comerciais que precisam de climatizacao evaporativa.",
  },
  {
    question: "Quais segmentos a Colder atende?",
    answer:
      "A Colder atende industrias, empresas, igrejas, clinicas, academias, escolas, restaurantes, supermercados e outros ambientes amplos.",
  },
  {
    question: "Como solicitar um orcamento?",
    answer:
      "Entre em contato pelo WhatsApp ou pela pagina de contato e informe cidade, tipo de ambiente, metragem aproximada e fotos do local.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        faqSchema(HOME_FAQ),
        breadcrumbSchema([{ name: "Home", path: "/" }]),
      ],
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Products />
        <Benefits />
        <About />
        <Differentials />
        <Areas />
        <CommercialCTA />
        <FAQSection faq={HOME_FAQ} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
