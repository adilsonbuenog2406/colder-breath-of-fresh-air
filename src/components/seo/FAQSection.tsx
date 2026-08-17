import type { SeoFaq } from "@/data/seo-pages";

export function FAQSection({ faq }: { faq: SeoFaq[] }) {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Dúvidas comuns antes do orçamento</h2>
        </div>

        <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-background">
          {faq.map((item) => (
            <details key={item.question} className="group p-5 sm:p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
