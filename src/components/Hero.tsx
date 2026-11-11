"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront, Headphones, Play, ShieldCheck } from "lucide-react";
import { BookingWidget } from "./BookingWidget";

const trust = [
  { label: "Safe & Reliable", icon: ShieldCheck },
  { label: "Premium Fleet", icon: CarFront },
  { label: "24/7 Support", icon: Headphones },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-[72px] md:pt-[84px]">
      <div className="relative min-h-[88vh] md:min-h-[92vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80"
            alt="Scenic mountain road journey through misty valleys at sunrise"
            fill
            priority
            className="object-cover object-[68%_40%] md:object-[72%_42%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream from-[8%] via-brand-cream/92 via-[34%] to-transparent to-[68%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-brand-cream/15 to-transparent to-[55%]" />
        </div>

        <div className="relative z-10 section-pad flex min-h-[88vh] flex-col justify-between gap-10 pb-8 pt-12 md:min-h-[92vh] md:pb-10 md:pt-16">
          <div className="container-wide w-full pt-2 md:pt-6">
            <div className="w-full max-w-[34rem] lg:max-w-[38%]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-grey">
                Tours · Transfers · Rentals
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.75rem,5.8vw,5rem)] leading-[0.98] tracking-tight text-brand-black">
                Your Journey,
                <br />
                <span className="italic text-brand-red">Our Expertise.</span>
              </h1>

              <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-brand-grey md:text-base">
                Domestic tours, airport transfers, corporate travel and luxury
                rentals — designed for comfort, safety and peace of mind.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#booking" className="btn-primary">
                  Plan Your Trip <ArrowRight size={16} />
                </Link>
                <a href="#about-preview" className="btn-secondary">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Play size={11} fill="currentColor" />
                  </span>
                  Watch Our Story
                </a>
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

          {/* Floating booking bar — sits on the hero image like the reference */}
          <div className="container-wide w-full">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
