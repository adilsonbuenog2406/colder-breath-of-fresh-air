import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Contato | Orçamento Colder Climatizadores";
const DESCRIPTION =
  "Fale com a Colder Climatizadores pelo WhatsApp, telefone ou e-mail e solicite orçamento para climatização industrial e empresarial.";

export const Route = createFileRoute("/contato")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/contato",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contato", path: "/contato" },
        ]),
      ],
    }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-24 text-white">
          <div className="container-page py-14 sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Orçamento e atendimento
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">Contato</h1>
            <p className="mt-5 max-w-2xl text-white/78">
              Solicite uma avaliação para climatizadores industriais, climatização para empresas,
              segmentos específicos ou atendimento local.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
