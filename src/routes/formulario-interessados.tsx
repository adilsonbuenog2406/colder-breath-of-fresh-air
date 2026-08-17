import { createFileRoute } from "@tanstack/react-router";

import { ColderLeadForm } from "@/components/site/ColderLeadForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Formulário de Interessados | Colder Climatizadores";
const DESCRIPTION =
  "Solicite orientação ou orçamento para climatização industrial e empresarial. Fale com a Colder pelo WhatsApp.";

export const Route = createFileRoute("/formulario-interessados")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/formulario-interessados",
      robots: "noindex,follow",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Formulário de Interessados", path: "/formulario-interessados" },
        ]),
      ],
    }),
  component: FormularioInteressadosPage,
});

function FormularioInteressadosPage() {
  return (
    <>
      <Header />
      <main>
        <ColderLeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
