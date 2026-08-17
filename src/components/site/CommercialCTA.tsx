import { Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const BENEFITS = [
  "Reduz a temperatura ambiente em até 16°C",
  "Economiza até 90% de energia",
  "Muito mais silencioso",
  "Purifica e umidifica o ar",
];

export function CommercialCTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div
          className="overflow-hidden rounded-2xl border border-border p-8 sm:p-12 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in oklch, var(--color-primary) 95%, white) 100%)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="text-balance font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Aprimore a qualidade do ar da sua empresa e comece a gerar mais economia.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contato" className="btn-primary">
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4 text-sm text-white/90 backdrop-blur"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--color-brand-foreground)" }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <span className="eyebrow">Tecnologia</span>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Trabalhamos com os climatizadores mais completos do Brasil
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nossos climatizadores evaporativos são desenvolvidos para atender ambientes comerciais,
            industriais e residenciais. Diferente do sistema de ar-condicionado, eles não possuem
            compressores, dispensam condensadores e sistemas de alta pressão, colaborando para a
            redução do consumo de energia elétrica.
          </p>
        </div>
      </div>
    </section>
  );
}
