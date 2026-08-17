import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { buildSeoHead, breadcrumbSchema } from "@/components/seo/seo-head";
import { blogPages } from "@/data/seo-pages";
import { ORGANIZATION_SCHEMA } from "@/data/site";

const TITLE = "Blog Colder | Guias de Climatização Industrial";
const DESCRIPTION =
  "Artigos sobre climatizadores industriais, evaporativos, igrejas, galpões e projetos para empresas. Conteúdo técnico da Colder Climatizadores.";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/blog",
      jsonLd: [
        ORGANIZATION_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ],
    }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const posts = [...blogPages].sort((a, b) =>
    (b.dateModified ?? b.datePublished).localeCompare(a.dateModified ?? a.datePublished),
  );

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-24 text-white">
          <div className="container-page py-14 sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Conteúdo técnico
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">Blog Colder</h1>
            <p className="mt-5 max-w-2xl text-white/78">
              Guias práticos para escolher, dimensionar e manter climatizadores em empresas,
              igrejas, galpões e outros ambientes amplos.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.path}
                to={post.path}
                className="card-soft card-soft-hover flex flex-col p-6 transition-colors hover:border-brand"
              >
                <time
                  dateTime={post.dateModified ?? post.datePublished}
                  className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                >
                  Atualizado em{" "}
                  {new Date(post.dateModified ?? post.datePublished).toLocaleDateString("pt-BR")}
                </time>
                <h2 className="mt-3 text-lg font-bold leading-snug">{post.h1}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.subtitle}
                </p>
                <span className="mt-5 text-sm font-semibold text-brand">Ler artigo</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
