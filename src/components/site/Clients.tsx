export function Clients() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page text-center">
        <span className="eyebrow">Confiança</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Alguns de nossos clientes
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Empresas e indústrias que escolheram a Colder para climatizar seus
          ambientes com eficiência.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-lg border border-dashed border-border bg-white text-xs uppercase tracking-widest text-muted-foreground/70"
              aria-label="Espaço reservado para logo de cliente"
            >
              Logo cliente
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
