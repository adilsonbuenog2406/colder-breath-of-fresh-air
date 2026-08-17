import profissionalismoImg from "@/assets/profissionalismo.colder.webp";

export function ProjectProfessionalism() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Do projeto à instalação com profissionalismo máximo
          </h2>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={profissionalismoImg}
            alt="Certificações e padrões técnicos da Colder: NR 35, NR 10, PMOC, PPRA e CREA-PR"
            width={720}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-auto w-full max-w-[min(100%,28rem)] rounded-2xl object-contain lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
