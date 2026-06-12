import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed right-3 bottom-[calc(0.5rem+env(safe-area-inset-bottom))] z-40 grid h-11 w-11 place-items-center rounded-full text-white transition-transform hover:scale-105 sm:right-5 sm:bottom-5 sm:h-14 sm:w-14"
      style={{ background: "#25D366", boxShadow: "0 10px 22px -13px rgba(37,211,102,0.75)" }}
    >
      <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
    </a>
  );
}
