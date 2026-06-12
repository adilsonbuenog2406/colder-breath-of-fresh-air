import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/contact";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/solucoes/climatizadores-industriais", label: "Soluções" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      // Threshold = altura real do hero menos a altura do header (64 px)
      const threshold = hero ? hero.offsetHeight - 64 : window.innerHeight * 0.82;
      setPastHero(window.scrollY > threshold);
    };
    onScroll(); // avalia estado inicial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        pastHero
          ? "bg-[var(--color-brand)] shadow-[0_4px_16px_rgba(15,23,42,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo — sempre branca: o header fica sobre hero escuro ou fundo brand */}
        <Logo light />

        {/* Nav desktop */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão WhatsApp desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={
              pastHero
                ? /* Estado scrollado: branco com texto escuro */
                  "inline-flex items-center justify-center gap-2 rounded-lg px-[1.4rem] py-[0.8rem] text-[0.95rem] font-semibold bg-white text-foreground shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md hover:-translate-y-px"
                : /* Estado hero: btn-primary padrão (brand cyan) */
                  "btn-primary"
            }
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Botão hamburger mobile — glass em ambos os estados */}
        <button
          type="button"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile expandido */}
      {open && (
        <div
          className={`md:hidden border-t transition-colors duration-300 ${
            pastHero
              ? "border-white/20 bg-[var(--color-brand)]"
              : "border-white/10 bg-[rgba(15,23,42,0.92)] backdrop-blur-md"
          }`}
        >
          <nav className="container-page flex flex-col py-3" aria-label="Navegação mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-[1.4rem] py-[0.8rem] text-[0.95rem] font-semibold bg-white text-foreground transition-all duration-200 hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
