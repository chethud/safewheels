import { siteConfig } from "./data";

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
