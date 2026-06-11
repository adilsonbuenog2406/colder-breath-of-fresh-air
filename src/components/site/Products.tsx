import wall from "@/assets/product-wall.jpg";
import industrial from "@/assets/product-industrial.jpg";
import portable from "@/assets/product-portable.jpg";
import water from "@/assets/product-water.jpg";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const PRODUCTS = [
  {
    img: wall,
    alt: "Climatizador industrial de parede evaporativo",
    title: "Climatizador industrial de parede",
    desc: "Modelo evaporativo de parede, ideal para galpões e linhas de produção que exigem fluxo de ar contínuo.",
  },
  {
    img: industrial,
    alt: "Climatizador industrial de grande porte",
    title: "Climatizador para atacado",
    desc: "Equipamentos de alta vazão para grandes áreas comerciais, distribuidoras e centros logísticos.",
  },
  {
    img: portable,
    alt: "Climatizador portátil comercial",
    title: "Comprar climatizador",
    desc: "Modelos comerciais com instalação simples para escritórios, lojas e ambientes corporativos.",
  },
  {
    img: water,
    alt: "Climatizador de ambiente com reservatório de água",
    title: "Climatizador de ambiente com água",
    desc: "Sistema evaporativo com reservatório de água que umidifica e refresca o ambiente com baixo consumo.",
  },
];

export function Products() {
  return (
    <section id="produtos" className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Produtos em destaque</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Linhas para cada operação
            </h2>
            <p className="mt-3 text-muted-foreground">
              Conheça soluções de climatização evaporativa para diferentes
              tamanhos de ambiente e necessidades.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.title} className="card-soft card-soft-hover overflow-hidden flex flex-col">
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--color-brand)" }}
                >
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
