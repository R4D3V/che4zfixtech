import { SITE } from "@/data/site";
import { IconWhatsApp } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}