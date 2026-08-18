import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, HERO_VIDEO_MOBILE_URL, HERO_VIDEO_URL } from "@/components/site/Hero";
import { WhyColder } from "@/components/site/WhyColder";
import { AutomationBanner } from "@/components/site/AutomationBanner";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { buildSeoHead, breadcrumbSchema, faqSchema } from "@/components/seo/seo-head";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const Clients = lazy(() =>
  import("@/components/site/Clients").then((m) => ({ default: m.Clients })),
);
const Solutions = lazy(() =>
  import("@/components/site/Solutions").then((m) => ({ default: m.Solutions })),
);
const Products = lazy(() =>
  import("@/components/site/Products").then((m) => ({ default: m.Products })),
);
const Benefits = lazy(() =>
  import("@/components/site/Benefits").then((m) => ({ default: m.Benefits })),
);
const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const ProjectProfessionalism = lazy(() =>
  import("@/components/site/ProjectProfessionalism").then((m) => ({
    default: m.ProjectProfessionalism,
  })),
);
const Differentials = lazy(() =>
  import("@/components/site/Differentials").then((m) => ({ default: m.Differentials })),
);
const CommercialCTA = lazy(() =>
  import("@/components/site/CommercialCTA").then((m) => ({ default: m.CommercialCTA })),
);
const FAQSection = lazy(() =>
  import("@/components/seo/FAQSection").then((m) => ({ default: m.FAQSection })),
);
const Contact = lazy(() =>
  import("@/components/site/Contact").then((m) => ({ default: m.Contact })),
);
const PriorityLinks = lazy(() =>
  import("@/components/site/PriorityLinks").then((m) => ({ default: m.PriorityLinks })),
);

const TITLE = "Colder Climatizadores | Climatização Industrial e Empresarial";
const DESCRIPTION =
  "A Colder oferece soluções de climatização industrial e empresarial para indústrias, galpões, igrejas, clínicas e empresas. Solicite um orçamento.";

const HOME_FAQ = [
  {
    question: "A Colder trabalha com climatizadores industriais?",
    answer:
      "Sim. A Colder atende empresas, indústrias, galpões, barracões e ambientes comerciais que precisam de climatização evaporativa.",
  },
  {
    question: "Quais segmentos a Colder atende?",
    answer:
      "A Colder atende indústrias, empresas, igrejas, clínicas, academias, escolas, restaurantes, supermercados e outros ambientes amplos.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Entre em contato pelo WhatsApp ou pela página de contato e informe cidade, tipo de ambiente, metragem aproximada, pé-direito e fotos do local.",
  },
];

function SectionFallback() {
  return <div className="section-pad" aria-hidden="true" />;
}

export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        faqSchema(HOME_FAQ),
        breadcrumbSchema([{ name: "Home", path: "/" }]),
      ],
    });

    return {
      ...seo,
      links: [
        ...(seo.links ?? []),
        {
          rel: "preload",
          as: "video",
          href: HERO_VIDEO_MOBILE_URL,
          type: "video/mp4",
          media: "(max-width: 767px)",
        },
        {
          rel: "preload",
          as: "video",
          href: HERO_VIDEO_URL,
          type: "video/mp4",
          media: "(min-width: 768px)",
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyColder />
        <AutomationBanner />
        <Suspense fallback={<SectionFallback />}>
          <PriorityLinks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectProfessionalism />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Differentials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Products />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CommercialCTA />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection faq={HOME_FAQ} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
