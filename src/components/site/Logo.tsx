import { Snowflake } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="flex items-center gap-2"
      aria-label="Colder Climatizadores — Página inicial"
    >
      <span
        className="grid h-9 w-9 place-items-center rounded-lg"
        style={{ background: "var(--color-brand)" }}
      >
        <Snowflake className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span
        className="font-display text-xl font-extrabold tracking-tight"
        style={{ color: light ? "white" : "var(--color-primary)" }}
      >
        COLDER
        <span
          className="ml-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: light ? "rgba(255,255,255,0.7)" : "var(--color-muted-foreground)" }}
        >
          climatizadores
        </span>
      </span>
    </a>
  );
}
