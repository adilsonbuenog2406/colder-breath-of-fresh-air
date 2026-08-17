import { Factory, Building2, Warehouse, Store, Church, ShoppingCart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

const ITEMS: Array<{ icon: LucideIcon; label: string; href: string }> = [
  { icon: Factory, label: "Indústrias", href: "/segmentos/climatizadores-para-industrias" },
  { icon: Building2, label: "Empresas", href: "/solucoes/climatizacao-para-empresas" },
  { icon: Warehouse, label: "Galpões", href: "/segmentos/climatizadores-para-galpoes" },
  { icon: Church, label: "Igrejas", href: "/segmentos/climatizadores-para-igrejas" },
  {
    icon: ShoppingCart,
    label: "Supermercados",
    href: "/segmentos/climatizadores-para-supermercados",
  },
  { icon: Store, label: "Comércios", href: "/areas-de-atuacao" },
];

export function Areas() {
  return (
    <section id="areas" className="section-pad">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Áreas de atuação</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Soluções para cada tipo de ambiente
          </h2>
          <p className="mt-3 text-muted-foreground">
            Climatização evaporativa para espaços que exigem conforto térmico, renovação constante
            do ar e economia operacional.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              to={href}
              className="card-soft card-soft-hover flex flex-col items-center gap-3 p-5 text-center"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-lg"
                style={{ background: "var(--color-brand-soft)" }}
              >
                <Icon className="h-6 w-6" style={{ color: "var(--color-brand-foreground)" }} />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
