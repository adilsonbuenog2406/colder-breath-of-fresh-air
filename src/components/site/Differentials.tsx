import { Cog, Layers, ShieldCheck, Wrench } from "lucide-react";

const ITEMS = [
  {
    icon: Cog,
    title: "Hélices e motor",
    text: "Hélices acopladas ao motor de alumínio blindado, balanceadas eletronicamente, dispensando o uso de correias e tornando os equipamentos mais silenciosos.",
  },
  {
    icon: Layers,
    title: "Placas evaporativas",
    text: "Desenvolvidas com papel premium europeu e resina especial de alta qualidade, resistentes à deterioração e alinhadas a padrões internacionais.",
  },
  {
    icon: ShieldCheck,
    title: "Tela protetora",
    text: "Telas produzidas em nylon para evitar a entrada de insetos, pássaros e poeira grossa, aumentando a vida útil das colmeias.",
  },
  {
    icon: Wrench,
    title: "Estrutura resistente",
    text: "Grades e estrutura em poliuretano com tratamento UV, resistentes ao intemperismo e ao uso contínuo.",
  },
];

export function Differentials() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Engenharia pensada para alto desempenho
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cada componente é projetado para entregar maior eficiência, menor ruído e vida útil
            prolongada nos ambientes mais exigentes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-soft card-soft-hover flex gap-5 p-6 sm:p-7">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-lg"
                style={{ background: "var(--color-brand-soft)" }}
              >
                <Icon className="h-6 w-6" style={{ color: "var(--color-brand)" }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
