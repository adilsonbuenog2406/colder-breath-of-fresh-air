import heroImage from "@/assets/hero-industrial.jpg";
import videoSrc from "@/assets/video-04.mp4";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(660px,82svh)] items-start overflow-hidden md:min-h-[88vh] md:items-center"
    >
      <video
        src={videoSrc}
        poster={heroImage}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.62) 0%, rgba(15,23,42,0.46) 48%, rgba(15,23,42,0.66) 100%)",
        }}
      />
      <div className="container-page relative z-10 pt-[6.35rem] pb-10 text-center text-white sm:pt-28 md:pt-24 md:pb-12">
        <span className="inline-block max-w-[82vw] rounded-full border border-white/25 bg-white/10 px-4 py-2 text-center text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.11em] backdrop-blur min-[414px]:text-[0.68rem] md:max-w-none md:px-3 md:py-1 md:text-xs md:tracking-[0.18em]">
          Climatização industrial e empresarial
        </span>
        <h1 className="mx-auto mt-5 max-w-[90vw] text-balance font-display text-[36px] font-extrabold leading-[0.96] min-[390px]:text-[38px] min-[414px]:text-[40px] min-[430px]:text-[42px] sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-7xl">
          <span>Colder</span> <span className="block md:inline">Climatizadores</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[320px] text-pretty text-lg leading-relaxed text-white/86 md:mt-5 md:max-w-2xl md:text-xl">
          Especialistas em climatização para indústrias e empresas.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-2.5 md:mt-9 md:flex-row md:flex-wrap md:gap-3">
          <a
            href="#contato"
            className="btn-primary !w-[min(20rem,86vw)] !py-3 !text-sm md:!w-auto md:!py-[0.8rem] md:!text-[0.95rem]"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#produtos"
            className="btn-ghost-light !w-[min(18rem,78vw)] !border-white/25 !bg-white/[0.08] !py-3 !text-sm md:!w-auto md:!border-white/35 md:!bg-white/10 md:!py-[0.8rem] md:!text-[0.95rem]"
          >
            Conhecer soluções
          </a>
        </div>
      </div>
    </section>
  );
}
