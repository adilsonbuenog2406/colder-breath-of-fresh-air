import mapaAtuacaoImg from "@/assets/mapa.colder.2.png";

const LEGEND_ITEMS = [
  { label: "PR (inteiro)", color: "#1a5c66" },
  { label: "SC (interior)", color: "#3b6ea8" },
  { label: "SP (interior)", color: "#1e2a38" },
  { label: "MG", color: "#7cb342" },
  { label: "MT", color: "#8ec9c9" },
  { label: "MS", color: "#3d9a9a" },
] as const;

export function CoverageMapSection() {
  return (
    <section className="section-pad bg-background" aria-labelledby="coverage-map-heading">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
        <div className="flex min-w-0 flex-col gap-8 sm:gap-10">
          <div className="max-w-xl">
            <span className="eyebrow">Áreas de atuação</span>
            <h2 id="coverage-map-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              Atendemos todo o Brasil
            </h2>
            <div
              className="mt-4 h-1 w-12 rounded-full"
              style={{ background: "var(--color-brand)" }}
              aria-hidden="true"
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Atuamos em todo o território nacional com soluções eficientes em climatização
              industrial e comercial.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nossos principais pontos de concentração de clientes estão nas regiões destacadas no
              mapa ao lado.
            </p>
          </div>

          <aside className="card-soft h-fit max-w-md p-6 sm:p-7">
            <h3 className="text-lg font-semibold">Concentração de clientes</h3>
            <ul className="mt-5 space-y-3.5">
              {LEGEND_ITEMS.map(({ label, color }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm font-medium sm:text-[0.9375rem]"
                >
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm font-medium sm:text-[0.9375rem]">
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-full border border-dashed border-muted-foreground"
                  aria-hidden="true"
                />
                Regiões de divisa de estado
              </li>
            </ul>
          </aside>
        </div>

        <div className="flex min-w-0 items-center justify-center lg:justify-end">
          <img
            src={mapaAtuacaoImg}
            alt="Mapa do Brasil com regiões de concentração de clientes da Colder"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="h-auto w-full max-w-[min(100%,28rem)] object-contain lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
