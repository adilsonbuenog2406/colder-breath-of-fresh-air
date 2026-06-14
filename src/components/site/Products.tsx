import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const PRODUCTS = [
  {
    img: encodeURI("/climatizadorevaporativoindustrial.jpeg"),
    title: "Climatizador evaporativo industrial",
    desc: "Equipamento de alta vazão para galpões, indústrias e grandes áreas que exigem climatização eficiente.",
  },
  {
    img: encodeURI("/climatizador evaporativo industrial móvel.png"),
    title: "Climatizador evaporativo industrial móvel",
    desc: "Modelo móvel para flexibilidade de posicionamento em linhas de produção e ambientes industriais variados.",
  },
  {
    img: encodeURI("/climatizadorevaporativoportatil.jpg"),
    title: "Climatizador evaporativo portátil",
    desc: "Solução compacta e prática para escritórios, lojas e ambientes comerciais com instalação simples.",
  },
];

export function Products() {
  return (
    <section id="produtos" className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Produtos em destaque</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Linhas para cada operação</h2>
            <p className="mt-3 text-muted-foreground">
              Conheça soluções de climatização evaporativa para diferentes tamanhos de ambiente e
              necessidades.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="card-soft card-soft-hover flex flex-col overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={p.title}
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
