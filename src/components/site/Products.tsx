import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import aquecedorPiramideImg from "@/assets/aquecedor.piramide.colder.webp";
import climatizadorC56Img from "@/assets/climatizador.c-56.colder.webp";
import climatizadorC23Img from "@/assets/climatizador.colder.c-13.webp";
import climatizadorC12Img from "@/assets/climatizadorc-12.colder.webp";
import climatizadorPort9000Img from "@/assets/climatizador.port.colder.webp";
import climatizadorPort10000Img from "@/assets/climatizador.portatil.colder.webp";
import climatizadorPort12000Img from "@/assets/climatizador.port.2.webp";

interface Product {
  img: string;
  title: string;
  desc: string;
  alt?: string;
}

const PRODUCTS: Product[] = [
  {
    img: climatizadorC56Img,
    title: "Climatizador Colder C-56",
    desc: "Vazão de 56.000 m³/h, potência de 3.500 W e alcance de até 400 m² para grandes ambientes industriais.",
    alt: "Climatizador Colder C-56",
  },
  {
    img: climatizadorC23Img,
    title: "Climatizador Colder C-23",
    desc: "Vazão de 23.000 m³/h, potência de 1.500 W e alcance de até 200 m² para ambientes empresariais.",
    alt: "Climatizador Colder C-23",
  },
  {
    img: climatizadorC12Img,
    title: "Climatizador Colder C-12.000",
    desc: "Vazão de 14.000 m³/h, reservatório de 70 litros e alcance de até 120 m² para ambientes amplos.",
    alt: "Climatizador Colder C-12.000",
  },
  {
    img: climatizadorPort9000Img,
    title: "Climatizador Portátil C-9.000",
    desc: "Vazão de 9.000 m³/h, reservatório de 70 litros e alcance de até 70 m² com instalação prática.",
    alt: "Climatizador Portátil Colder C-9.000",
  },
  {
    img: climatizadorPort10000Img,
    title: "Climatizador Portátil C-10.000",
    desc: "Vazão de 14.000 m³/h, reservatório de 70 litros e alcance de até 120 m² para uso flexível.",
    alt: "Climatizador Portátil Colder C-10.000",
  },
  {
    img: climatizadorPort12000Img,
    title: "Climatizador Portátil C-12.000",
    desc: "Vazão de 12.000 m³/h, reservatório de 90 litros, alcance de até 70 m² e função smart compatível com Alexa e Google Home.",
    alt: "Climatizador Portátil Colder C-12.000",
  },
  {
    img: aquecedorPiramideImg,
    title: "Aquecedor Pirâmide de Inox",
    desc: "Aquecedor a gás em aço inox para áreas externas, com alcance de 25 a 30 m² e acabamento premium.",
    alt: "Aquecedor Pirâmide de Inox Colder",
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
              Produtos em destaque <br />
              Conheça as máquinas Colder <br />
              Nossos equipamentos fazem parte de um projeto desenvolvido para atender as
              necessidades reais de cada ambiente, garantindo eficiência, economia e desempenho no
              longo prazo.
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
                  alt={p.alt ?? p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
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
