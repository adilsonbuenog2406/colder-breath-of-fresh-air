import { Check } from "lucide-react";
import seloGarantia from "@/assets/selo.fundo.png";

const REASONS = [
  "Equipe própria",
  "Diagnóstico técnico",
  "Instalação especializada",
  "Pós-venda",
  "Manutenção",
  "Suporte contínuo",
] as const;

export function WhyColder() {
  return (
    <section className="bg-background py-12 sm:py-14 md:py-16" aria-labelledby="why-colder-heading">
      <div className="container-page">
        <h2
          id="why-colder-heading"
          className="text-center text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]"
        >
          Porque a Colder?
        </h2>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-10 sm:mt-12 md:flex-row md:items-center md:justify-between md:gap-12 lg:max-w-6xl lg:gap-16">
          <ul className="grid w-full max-w-3xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 sm:gap-y-6 md:max-w-none md:flex-1 md:gap-x-16">
            {REASONS.map((item) => (
              <li key={item} className="flex items-center gap-3.5 sm:gap-4">
                <Check
                  className="h-6 w-6 shrink-0 stroke-[2.5]"
                  style={{ color: "var(--color-brand)" }}
                  aria-hidden="true"
                />
                <span className="text-lg font-medium leading-snug sm:text-xl">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 flex-col items-center text-center md:max-w-[16rem] lg:max-w-[18rem]">
            <img
              src={seloGarantia}
              alt="Selo de 2 anos de garantia"
              width={280}
              height={280}
              loading="lazy"
              decoding="async"
              className="h-auto w-[min(100%,14rem)] sm:w-56 md:w-60 lg:w-64"
            />
            <p className="mt-4 max-w-[15rem] text-sm font-medium leading-relaxed text-muted-foreground sm:max-w-[17rem] sm:text-base">
              Primeira marca do Brasil a oferecer 3 anos de garantia nos climatizadores industriais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
