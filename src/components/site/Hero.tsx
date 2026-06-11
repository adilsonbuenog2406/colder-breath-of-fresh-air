import heroImg from "@/assets/hero-industrial.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Galpão industrial com sistema de climatização e dutos de ventilação"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.45) 50%, rgba(15,23,42,0.65) 100%)",
        }}
      />
      <div className="container-page relative z-10 pt-24 pb-12 text-center text-white">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur"
        >
          Climatização industrial e empresarial
        </span>
        <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Bem-vindo à Colder
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/85 sm:text-lg md:text-xl">
          Especialistas em climatização para indústrias e empresas.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#contato" className="btn-primary">
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#produtos" className="btn-ghost-light">
            Conhecer soluções
          </a>
        </div>
      </div>
    </section>
  );
}
