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
            Nossos climatizadores evaporativos possuem tecnologia desenvolvida para ambientes
            comerciais e industriais. Garantimos um clima mais saudável, confortável e uma redução
            na conta de energia de até 90% em comparação ao ar-condicionado tradicional.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acompanhamos sua empresa em todo o processo: desde a escolha do sistema de climatização
            ideal até a instalação completa. Também oferecemos suporte contínuo para garantir o
            melhor desempenho.
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
              <Stat value="90%" label="Economia de energia" />
              <Stat value="15°C" label="Redução térmica" />
              <Stat value="100%" label="Renovação do ar" />
            </div>
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
