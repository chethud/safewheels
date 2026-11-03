import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Safe Wheels Tours & Travels in Mysuru for bookings, rentals and tour enquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <Contact />
    </div>
  );
}
