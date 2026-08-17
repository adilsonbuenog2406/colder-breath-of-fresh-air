import { useEffect, useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { solutions, type Solution } from "@/data/solutions";

interface SolutionCardProps {
  solution: Solution;
  onImageClick: (solution: Solution) => void;
}

function SolutionCard({ solution, onImageClick }: SolutionCardProps) {
  const { title, description, image, alt, href } = solution;

  return (
    <article className="card-soft card-soft-hover flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => onImageClick(solution)}
        className="group relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
        aria-label={`Ampliar imagem: ${title}`}
      >
        <img
          src={image}
          alt={alt ?? title}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn className="h-5 w-5" aria-hidden="true" />
          </span>
        </span>
      </button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug sm:text-xl">
          <a href={href} className="hover:text-brand">
            {title}
          </a>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
          {description}
        </p>
        <a
          href={href}
          className="mt-4 text-sm font-semibold text-brand underline-offset-2 hover:underline"
        >
          Ver solução
        </a>
      </div>
    </article>
  );
}

function SolutionLightbox({
  solution,
  onClose,
}: {
  solution: Solution | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={solution !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[min(92vw,56rem)] gap-0 overflow-hidden border-none bg-transparent p-0 shadow-none sm:max-w-4xl [&>button]:right-3 [&>button]:top-3 [&>button]:rounded-full [&>button]:border-0 [&>button]:bg-black/55 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100 hover:[&>button]:bg-black/75 [&>button]:focus:ring-white/40">
        {solution && (
          <>
            <DialogTitle className="sr-only">{solution.title}</DialogTitle>
            <DialogDescription className="sr-only">{solution.description}</DialogDescription>
            <div className="overflow-hidden rounded-xl bg-background shadow-2xl">
              <img
                src={solution.image}
                alt={solution.alt ?? solution.title}
                className="max-h-[min(78vh,720px)] w-full object-contain bg-[var(--color-surface)]"
              />
              <div className="border-t border-border px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-base font-semibold sm:text-lg">{solution.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  useEffect(() => {
    if (!carouselApi || solutions.length <= 1) return;

    const interval = window.setInterval(() => {
      if (!autoplayPaused && selectedSolution === null) {
        carouselApi.scrollNext();
      }
    }, 15_000);

    return () => window.clearInterval(interval);
  }, [carouselApi, autoplayPaused, selectedSolution]);

  return (
    <section className="section-pad" aria-labelledby="solutions-heading">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Conheça nossas soluções</span>
          <h2 id="solutions-heading" className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Soluções de climatização para cada ambiente
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Projetos pensados para empresas, indústrias e espaços que precisam de conforto térmico,
            economia e renovação constante do ar.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          {solutions.length === 1 ? (
            <div className="mx-auto max-w-md sm:max-w-lg">
              <SolutionCard solution={solutions[0]} onImageClick={setSelectedSolution} />
            </div>
          ) : (
            <div
              onMouseEnter={() => setAutoplayPaused(true)}
              onMouseLeave={() => setAutoplayPaused(false)}
              onFocusCapture={() => setAutoplayPaused(true)}
              onBlurCapture={() => setAutoplayPaused(false)}
            >
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: solutions.length > 1,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {solutions.map((solution) => (
                    <CarouselItem
                      key={solution.id}
                      className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                    >
                      <SolutionCard solution={solution} onImageClick={setSelectedSolution} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 top-[calc(50%-2rem)] border-border bg-white/95 shadow-sm hover:bg-white sm:-left-3" />
                <CarouselNext className="right-0 top-[calc(50%-2rem)] border-border bg-white/95 shadow-sm hover:bg-white sm:-right-3" />
              </Carousel>
            </div>
          )}
        </div>
      </div>

      <SolutionLightbox solution={selectedSolution} onClose={() => setSelectedSolution(null)} />
    </section>
  );
}
