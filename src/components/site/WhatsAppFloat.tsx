import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
      style={{ background: "#25D366", boxShadow: "0 10px 30px -8px rgba(37,211,102,0.6)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
