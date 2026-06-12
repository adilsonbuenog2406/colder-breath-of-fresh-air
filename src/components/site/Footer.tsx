import { Logo } from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, EMAIL } from "@/lib/contact";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/solucoes/climatizadores-industriais", label: "Climatizadores Industriais" },
  { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para Igrejas" },
  { href: "/cidades/climatizadores-industriais-em-maringa", label: "Climatizadores em Maringá" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border"
      style={{ background: "var(--color-primary)", color: "white" }}
    >
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Especialistas em climatização evaporativa para indústrias, empresas e ambientes
              corporativos.
            </p>
          </div>

          <FooterCol title="Mapa do site">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-white/70 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contato">
            <li className="flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {ADDRESS.street}, {ADDRESS.neighborhood}
                <br />
                {ADDRESS.city} - {ADDRESS.state}
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="h-4 w-4 shrink-0" /> {PHONE_DISPLAY}
            </li>
            <li className="flex items-start gap-2 text-sm text-white/70">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-white">
                {EMAIL}
              </a>
            </li>
          </FooterCol>

          <FooterCol title="Siga-nos">
            <li className="text-sm text-white/70">Em breve, nossas redes sociais.</li>
          </FooterCol>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          Copyright © {new Date().getFullYear()} Colder. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}
