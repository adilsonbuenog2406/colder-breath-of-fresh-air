import heroImage from "@/assets/hero-industrial.jpg";
import industrialImage from "@/assets/product-industrial.jpg";
import portableImage from "@/assets/product-portable.jpg";
import wallImage from "@/assets/product-wall.jpg";
import waterImage from "@/assets/product-water.jpg";
import { CheckCircle2, MessageCircle } from "lucide-react";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/seo/CTASection";
import { FAQSection } from "@/components/seo/FAQSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import type { BlogPage, ImageKey, SeoPage } from "@/data/seo-pages";
import { WHATSAPP_URL } from "@/lib/contact";

const IMAGES: Record<ImageKey, string> = {
  hero: heroImage,
  industrial: industrialImage,
  portable: portableImage,
  wall: wallImage,
  water: waterImage,
};

function pageGroupLabel(type: SeoPage["type"]) {
  if (type === "solution") return "Solucoes";
  if (type === "segment") return "Segmentos";
  return "Cidades";
}

function pageGroupHref(type: SeoPage["type"]) {
  if (type === "solution") return "/solucoes/climatizadores-industriais";
  if (type === "segment") return "/areas-de-atuacao";
  return "/cidades/climatizadores-industriais-no-parana";
}

export function SeoPageTemplate({ page }: { page: SeoPage }) {
  return (
    <SiteFrame>
      <main>
        <SeoHero
          eyebrow={page.primaryKeyword}
          h1={page.h1}
          subtitle={page.subtitle}
          image={IMAGES[page.imageKey]}
          imageAlt={page.imageAlt}
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: pageGroupHref(page.type), label: pageGroupLabel(page.type) },
            { href: page.path, label: page.h1 },
          ]}
        />

        <section className="section-pad">
          <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-10">
              {page.sections.map((section) => (
                <article key={section.heading} className="max-w-3xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
                  {section.items && (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-lg border border-border p-4 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-lg border border-border bg-surface p-6">
              <h2 className="text-lg font-bold">Orcamento rapido</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Envie cidade, tipo de ambiente, metragem aproximada e fotos do local para a equipe
                da Colder avaliar o melhor caminho.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                {page.ctaText}
              </a>
              <div className="mt-6 border-t border-border pt-5">
                <h3 className="text-sm font-semibold">Palavras relacionadas</h3>
                <ul className="mt-3 space-y-2">
                  {page.secondaryKeywords.map((keyword) => (
                    <li key={keyword} className="text-sm text-muted-foreground">
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <FAQSection faq={page.faq} />
        <CTASection
          title={`Solicite um projeto para ${page.h1.toLowerCase()}`}
          text="A Colder dimensiona climatizadores conforme o ambiente, a rotina de uso e a expectativa de conforto termico da sua empresa."
          buttonLabel="Falar pelo WhatsApp"
        />
      </main>
    </SiteFrame>
  );
}

export function BlogArticleTemplate({ page }: { page: BlogPage }) {
  return (
    <SiteFrame>
      <main>
        <SeoHero
          eyebrow="Guia de climatizacao"
          h1={page.h1}
          subtitle={page.subtitle}
          image={IMAGES[page.imageKey]}
          imageAlt={page.imageAlt}
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/blog/climatizador-industrial-ou-ar-condicionado", label: "Blog" },
            { href: page.path, label: page.h1 },
          ]}
        />

        <article className="section-pad">
          <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="max-w-3xl space-y-10">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold sm:text-3xl">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
                  {section.items && (
                    <ul className="mt-5 space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="h-fit rounded-lg border border-border bg-surface p-6">
              <h2 className="text-lg font-bold">Pagina comercial relacionada</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Depois de entender o tema, veja a solucao comercial correspondente.
              </p>
              <a href={page.commercialLink.href} className="btn-primary mt-5 w-full">
                {page.commercialLink.label}
              </a>
            </aside>
          </div>
        </article>

        <FAQSection faq={page.faq} />
        <CTASection
          title="Precisa de uma avaliacao para sua empresa?"
          text="Fale com a Colder para entender qual solucao se encaixa melhor no seu ambiente."
          buttonLabel="Solicitar orcamento"
        />
      </main>
    </SiteFrame>
  );
}

function SeoHero({
  eyebrow,
  h1,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
}: {
  eyebrow: string;
  h1: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Array<{ href: string; label: string }>;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-24 text-white">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1080}
          loading="eager"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.72)]" />
      </div>
      <div className="container-page relative z-10 py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <span className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {h1}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/82 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
