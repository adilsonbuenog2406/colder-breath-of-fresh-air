import { Link } from "@tanstack/react-router";

const PRIORITY_LINKS = [
  {
    href: "/cidades/climatizadores-industriais-em-maringa",
    label: "Climatizadores em Maringá",
    text: "Projeto, venda e instalação para empresas na região.",
  },
  {
    href: "/segmentos/climatizadores-para-supermercados",
    label: "Climatizador para supermercado",
    text: "Conforto em lojas, estoques e áreas de circulação.",
  },
  {
    href: "/segmentos/climatizadores-para-igrejas",
    label: "Climatizadores para igrejas",
    text: "Templos, salões e auditórios com grande ocupação.",
  },
  {
    href: "/segmentos/climatizadores-para-industrias",
    label: "Climatizadores para indústrias",
    text: "Produção, expedição e áreas com alta carga térmica.",
  },
  {
    href: "/segmentos/climatizadores-para-galpoes",
    label: "Climatizadores para galpões",
    text: "Barracões, logística e ambientes de grande volume.",
  },
  {
    href: "/solucoes/climatizadores-industriais",
    label: "Climatizadores industriais",
    text: "Soluções e equipamentos para ambientes empresariais.",
  },
] as const;

export function PriorityLinks() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Soluções por necessidade</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Encontre a página certa para o seu projeto
          </h2>
          <p className="mt-3 text-muted-foreground">
            Conteúdo específico para localização, segmentos e equipamentos — sem atalhos genéricos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRIORITY_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="card-soft card-soft-hover block p-5 transition-colors hover:border-brand"
            >
              <h3 className="text-base font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Veja também o{" "}
          <Link to="/blog" className="font-semibold text-brand underline-offset-2 hover:underline">
            blog com guias técnicos
          </Link>{" "}
          e todas as{" "}
          <Link
            to="/areas-de-atuacao"
            className="font-semibold text-brand underline-offset-2 hover:underline"
          >
            áreas de atuação
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
