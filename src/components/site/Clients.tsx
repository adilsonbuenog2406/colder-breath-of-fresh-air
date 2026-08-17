import { useState } from "react";
import { clients } from "@/data/clients";
import type { Client } from "@/data/clients";

// ── Card individual ────────────────────────────────────────────
interface CardProps {
  client: Client;
  ariaHidden?: boolean;
}

function ClientCard({ client, ariaHidden = false }: CardProps) {
  const inner = (
    <div
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : undefined}
      className="
        flex h-24 w-44 shrink-0 flex-col items-center justify-center gap-2
        rounded-xl border border-border bg-white px-4 py-4
        shadow-[0_1px_4px_rgba(15,23,42,0.06)]
        transition-all duration-300 ease-out
        hover:scale-[1.08]
        hover:border-[var(--color-brand)]
        hover:shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--color-brand)_28%,transparent)]
      "
    >
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.alt ?? `Logo ${client.name}`}
          width={264}
          height={54}
          className="h-[54px] w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        /* Fallback: inicial com fundo brand */
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-sm font-bold text-white select-none"
          style={{ background: "var(--color-brand)" }}
        >
          {client.name.charAt(0)}
        </span>
      )}

      <p className="w-full truncate text-center text-[11px] font-semibold leading-tight text-foreground">
        {client.name}
      </p>
    </div>
  );

  // Card clicável quando client.url estiver preenchido
  if (client.url && !ariaHidden) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-xl"
      >
        {inner}
      </a>
    );
  }

  return inner;
}

// ── Seção principal ────────────────────────────────────────────
export function Clients() {
  const [paused, setPaused] = useState(false);
  const clientsWithLogo = clients.filter((client) => client.logo);

  // Dois conjuntos idênticos: ao atingir -50% o loop é imperceptível
  const doubled = [...clientsWithLogo, ...clientsWithLogo];

  return (
    <section
      className="pt-12 pb-16 sm:pt-14 sm:pb-[4.5rem]"
      style={{ background: "var(--color-surface)" }}
      aria-labelledby="clients-heading"
    >
      {/* Cabeçalho centralizado dentro do container */}
      <div className="container-page mb-6 text-center sm:mb-7">
        <span className="eyebrow">Nossos clientes</span>
        <h2
          id="clients-heading"
          className="mx-auto mt-3 max-w-[22rem] text-2xl font-bold leading-tight sm:max-w-none sm:text-4xl"
        >
          Empresas que confiam na Colder
        </h2>
        <p className="mx-auto mt-4 max-w-[17.5rem] text-sm leading-relaxed text-muted-foreground min-[414px]:max-w-[21rem] sm:mt-3 sm:max-w-xl sm:text-base">
          Soluções para a realidade de cada ambiente. Projetos para empresas, indústrias e espaços
          que buscam economia com a climatização.
        </p>
      </div>

      {/*
        Trilho do marquee — sem container-page para ocupar a largura toda.
        overflow-hidden: corta o conteúdo que passa das bordas.
        maskImage: dissolve suavemente nas extremidades esquerda e direita.
      */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/*
          Fila única: doubled = 24 itens em sequência.
          A animação desloca -50% (= largura dos 12 originais).
          Quando chega ao fim, reinicia do zero — loop perfeitamente contínuo.
        */}
        <div
          className="flex w-max gap-4 py-2"
          style={{
            animation: "marquee-scroll 38s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {doubled.map((client, i) => (
            <ClientCard
              key={`${i}-${client.id}`}
              client={client}
              ariaHidden={i >= clientsWithLogo.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
