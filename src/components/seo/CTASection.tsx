import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function CTASection({
  title,
  text,
  buttonLabel,
}: {
  title: string;
  text: string;
  buttonLabel: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div
          className="rounded-lg border border-border p-7 sm:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in oklch, var(--color-primary) 95%, white) 100%)",
          }}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/78">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                {buttonLabel}
              </a>
              <a href="/contato" className="btn-ghost-light">
                Contato
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
