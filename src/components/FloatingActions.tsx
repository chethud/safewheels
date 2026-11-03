"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <a
      href={buildWhatsAppUrl(
        "Hello Safe Wheels, I would like to enquire about a vehicle / tour.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 md:bottom-8 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
    </a>
  );
}
