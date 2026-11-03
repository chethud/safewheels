import type { Metadata } from "next";
import { BookingWidget } from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book a vehicle with Safe Wheels Tours & Travels — taxis, rentals and transfers from Mysuru.",
};

export default function BookPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <section className="relative overflow-hidden bg-brand-grey-light py-12 md:py-16">
        <div className="section-pad">
          <div className="container-wide">
            <div className="mb-7 max-w-2xl md:mb-8">
              <div className="ribbon-accent mb-5" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Book Now
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] text-brand-black">
                Reserve your next journey.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-grey md:text-lg">
                Share your trip details and our team will confirm availability
                over WhatsApp — fast, clear and personal.
              </p>
            </div>
            <BookingWidget />
          </div>
        </div>
      </section>
    </div>
  );
}
