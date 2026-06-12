const BUENO_MAESTRI_LOGO = encodeURI("/logo bueno&maestri branca png.png");
const BUENO_MAESTRI_URL = "https://buenomaestri.com";

export function DeveloperFooter() {
  return (
    <div className="bg-black py-3.5 sm:py-4">
      <div className="container-page flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <span className="text-sm text-white/75">Desenvolvido por:</span>
        <a
          href={BUENO_MAESTRI_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bueno & Maestri — buenomaestri.com"
          className="group inline-flex items-center rounded-sm transition-opacity duration-300 hover:opacity-90"
        >
          <span className="relative inline-flex items-center py-0.5">
            <img
              src={BUENO_MAESTRI_LOGO}
              alt="Bueno & Maestri"
              width={180}
              height={48}
              className="relative z-10 block h-10 w-auto max-w-[170px] object-contain sm:h-11"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span
                className="developer-logo-shine-bar absolute inset-y-0 left-0 w-2/5 will-change-transform group-hover:animate-[developer-logo-shine_1.6s_ease-in-out]"
                style={{ animationIterationCount: 1 }}
              />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
