import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, EMAIL, WHATSAPP_URL } from "@/lib/contact";

export function Contact() {
  return (
    <section id="contato" className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="eyebrow">Contato</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Vamos climatizar seu ambiente?</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Fale com nossa equipe e receba uma proposta sob medida para sua empresa, indústria ou
            galpão.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7"
          >
            <MessageCircle className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>

        <div className="card-soft p-7 sm:p-8 space-y-5">
          <ContactItem icon={MapPin} title="Endereço">
            {ADDRESS.street}
            <br />
            {ADDRESS.neighborhood}
            <br />
            {ADDRESS.city} - {ADDRESS.state} · CEP: {ADDRESS.zip}
          </ContactItem>
          <ContactItem icon={Phone} title="Telefone">
            <a href={`tel:+55${PHONE_DISPLAY.replace(/\D/g, "")}`} className="hover:underline">
              {PHONE_DISPLAY}
            </a>
          </ContactItem>
          <ContactItem icon={MessageCircle} title="WhatsApp">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
          </ContactItem>
          <ContactItem icon={Mail} title="E-mail">
            <a href={`mailto:${EMAIL}`} className="break-all hover:underline">
              {EMAIL}
            </a>
          </ContactItem>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
        style={{ background: "var(--color-brand-soft)" }}
      >
        <Icon className="h-5 w-5" style={{ color: "var(--color-brand)" }} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  );
}
