import bannerAutomacao from "@/assets/banner.automação (2).webp";
import { WHATSAPP_URL } from "@/lib/contact";

export function AutomationBanner() {
  return (
    <section
      className="bg-background py-8 sm:py-10 md:py-12"
      aria-label="Climatizadores Smart Wi-fi"
    >
      <div className="container-page">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp sobre climatizadores Smart Wi-fi"
          className="mx-auto block max-w-6xl cursor-pointer"
        >
          <img
            src={bannerAutomacao}
            alt="Climatizadores Smart Wi-fi Colder: controle pelo aplicativo, comandos de voz pela Alexa e integração com automação"
            width={1280}
            height={520}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl object-contain"
          />
        </a>
      </div>
    </section>
  );
}
