"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront, Headphones, ShieldCheck } from "lucide-react";
import { BookingWidget } from "./BookingWidget";

const trust = [
  { label: "Clean Fleet", icon: CarFront },
  { label: "Trained Drivers", icon: ShieldCheck },
  { label: "24/7 Cabs", icon: Headphones },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-[72px] md:pt-[84px]">
      <div className="relative min-h-[88vh] md:min-h-[92vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/cab-rental.jpg"
            alt="Chauffeured Innova cab ready for hire with Safe Wheels in Mysuru"
            fill
            priority
            quality={95}
            className="object-cover object-[70%_50%] md:object-[75%_48%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream from-[8%] via-brand-cream/92 via-[36%] to-transparent to-[70%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-brand-cream/18 to-transparent to-[58%]" />
        </div>

        <div className="relative z-10 section-pad flex min-h-[88vh] flex-col justify-between gap-10 pb-8 pt-12 md:min-h-[92vh] md:pb-10 md:pt-16">
          <div className="container-wide w-full pt-2 md:pt-6">
            <div className="w-full max-w-[34rem] lg:max-w-[40%]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-grey">
                Cab Rentals · Airport Transfers · Outstation
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.75rem,5.8vw,5rem)] leading-[0.98] tracking-tight text-brand-black">
                Book a Cab.
                <br />
                <span className="italic text-brand-red">Ride with Safe Wheels.</span>
              </h1>

              <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-brand-grey md:text-base">
                Chauffeured cabs from Mysuru for city rides, airport runs and
                outstation rentals — clean cars, trained drivers, since 1999.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#booking" className="btn-primary">
                  Book a Cab <ArrowRight size={16} />
                </Link>
                <Link href="#fleet" className="btn-secondary">
                  View Fleet
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {trust.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 text-[12px] font-medium text-brand-black/75"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-red shadow-[0_6px_20px_rgba(23,23,23,0.06)]">
                        <Icon size={15} strokeWidth={1.75} />
                      </span>
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container-wide w-full">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
