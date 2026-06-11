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
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const TITLE = "Colder Climatizadores | Climatização Industrial e Empresarial em Maringá";
const DESCRIPTION =
  "A Colder é especialista em climatizadores evaporativos para indústrias, empresas e ambientes comerciais. Economize até 90% de energia e melhore a qualidade do ar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "climatizadores industriais, climatização industrial, climatizador evaporativo, climatizadores para empresas, climatização em Maringá, climatizador de ambiente, economia de energia climatização, climatizador industrial de parede",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "Colder Climatizadores",
          description: DESCRIPTION,
          telephone: "+55-44-3354-1269",
          email: "comercial.colderclimatizadores@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Rodolfo Cremm, 18.872",
            addressLocality: "Maringá",
            addressRegion: "PR",
            postalCode: "87070-545",
            addressCountry: "BR",
          },
          areaServed: "Brasil",
        }),
      },
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
        <Benefits />
        <About />
        <Differentials />
        <Areas />
        <Clients />
        <CommercialCTA />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
