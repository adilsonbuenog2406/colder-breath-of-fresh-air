import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="card-soft flex flex-col items-start gap-4 p-7 text-muted-foreground"
            >
              <Quote className="h-6 w-6" style={{ color: "var(--color-brand)" }} />
              <p className="text-sm leading-relaxed">
                Depoimentos de clientes em breve.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
