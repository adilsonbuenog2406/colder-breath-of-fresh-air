import { ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="quem-somos" className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Quem somos</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Colder Climatizadores: eficiência em climatização
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            COLDER CLIMATIZADORES: EFICIÊNCIA EM CLIMATIZAÇÃO <br />
            <br />
            Desenvolvemos soluções de climatização inteligente para grandes ambientes comerciais e
            industriais. Cada projeto é planejado a partir da análise técnica do espaço,
            considerando operação, circulação de pessoas e necessidades específicas de cada
            ambiente.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acompanhamos nossos clientes em todas as etapas do processo: do diagnóstico à
            instalação. Contamos com equipe própria especializada, suporte contínuo, pós-venda e
            manutenção para garantir eficiência, conforto e desempenho no longo prazo.
          </p>
          <a href="#contato" className="btn-primary mt-7">
            Saiba mais <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative">
          <div className="rounded-2xl p-8 sm:p-10" style={{ background: "var(--color-surface)" }}>
            <ul className="space-y-4">
              {[
                "Projetos sob medida para cada ambiente",
                "Instalação completa e suporte técnico contínuo",
                "Equipamentos certificados e de alta durabilidade",
                "Atendimento a indústrias, empresas e galpões",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--color-brand)" }}
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <Stat value="Menor" label="Consumo vs AC tradicional*" />
              <Stat value="Variável" label="Redução térmica*" />
              <Stat value="Contínua" label="Renovação do ar" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              *O desempenho depende de umidade, ventilação, carga térmica e dimensionamento. A
              Colder avalia cada ambiente antes de indicar equipamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        className="font-display text-2xl font-extrabold sm:text-3xl"
        style={{ color: "var(--color-brand)" }}
      >
        {value}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
