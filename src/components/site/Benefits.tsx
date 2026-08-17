import {
  ClipboardCheck,
  Droplets,
  ShieldCheck,
  ThermometerSnowflake,
  Wind,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const ITEMS: BenefitItem[] = [
  {
    icon: Wind,
    title: "Ar livre de bactérias",
    text: "Garantem a renovação constante do ar. Limpam, umidificam e purificam o ambiente, ajudando a reduzir vírus, bactérias e partículas suspensas.",
  },
  {
    icon: Zap,
    title: "Economia de energia",
    text: "Até 90% de economia de energia elétrica em comparação ao ar-condicionado comum, reduzindo custos operacionais sem abrir mão do conforto.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Redução de temperatura",
    text: "Redução de até 16°C da temperatura em relação ao ambiente externo, considerando as condições de umidade relativa do ar.",
  },
  {
    icon: Droplets,
    title: "Aumento da umidade",
    text: "Quanto menor a umidade relativa do ar, maior a quantidade de água evaporada pelo equipamento. Isso contribui para renovação do ar e conforto térmico.",
  },
  {
    icon: ClipboardCheck,
    title: "Projeto à instalação",
    text: "A Colder conduz o processo com máximo profissionalismo, desde o dimensionamento do projeto até a instalação final dos climatizadores.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e conformidade técnica",
    text: "Equipe preparada para atuar com conformidade às normas aplicáveis, incluindo NR, PMOC quando necessário, e suporte técnico com engenheiros registrados no CREA.",
  },
];

export function Benefits() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Benefícios</span>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Conforto térmico, eficiência e segurança técnica
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Soluções de climatização para ambientes corporativos, industriais e comerciais que
            exigem qualidade do ar, redução de temperatura, economia operacional e instalação
            profissional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="card-soft card-soft-hover flex h-full flex-col p-7 sm:p-8"
            >
              <div
                className="grid h-14 w-14 shrink-0 place-items-center rounded-xl"
                style={{ background: "var(--color-brand-soft)" }}
              >
                <Icon
                  className="h-7 w-7"
                  style={{ color: "var(--color-brand-foreground)" }}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug sm:text-xl">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
