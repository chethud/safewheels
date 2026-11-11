"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Gem,
  Headphones,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { pageServices, serviceProcess, siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";

const trust = [
  { label: "Safe & Reliable", icon: ShieldCheck },
  { label: "Premium Fleet", icon: CarFront },
  { label: "24/7 Support", icon: Headphones },
] as const;

const serviceIcons = {
  car: CarFront,
  plane: Plane,
  gem: Gem,
  pin: MapPin,
} as const;

const processIcons = {
  calendar: CalendarDays,
  clipboard: ClipboardList,
  check: CheckCircle2,
  car: CarFront,
} as const;

export function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[400px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80"
              alt="Scenic mountain road journey at golden hour"
              fill
              priority
              className="object-cover object-[72%_42%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cream from-[10%] via-brand-cream/95 via-[38%] to-transparent to-[72%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/40 via-transparent to-brand-cream/20" />
          </div>

          <div className="relative z-10 section-pad flex min-h-[340px] items-center py-10 md:min-h-[380px] md:py-12 lg:min-h-[400px]">
            <div className="container-wide w-full">
              <div className="max-w-[34rem] lg:max-w-[42%]">
                <nav
                  aria-label="Breadcrumb"
                  className="mb-4 flex items-center gap-1.5 text-[12px] text-brand-grey"
                >
                  <Link href="/" className="transition hover:text-brand-red">
                    Home
                  </Link>
                  <ChevronRight size={12} className="opacity-50" />
                  <span className="font-medium text-brand-black">Services</span>
                </nav>

                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  Our Services
                </p>

                <h1 className="mt-3 font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.08] tracking-tight text-brand-black">
                  Comprehensive
                  <br />
                  Travel &amp; Mobility Solutions
                </h1>

                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-brand-grey md:text-base">
                  From domestic tours to premium rentals, we offer end-to-end
                  travel services designed for comfort, safety and convenience.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {trust.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="inline-flex items-center gap-2.5 text-[12px] font-medium text-brand-black/80"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-red/15 bg-white text-brand-red shadow-[0_6px_18px_rgba(23,23,23,0.05)]">
                          <Icon size={15} strokeWidth={1.7} />
                        </span>
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="bg-brand-cream pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="section-pad">
          <div className="container-wide">
            <Reveal className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  Explore Our Services
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.85rem,3.4vw,2.85rem)] leading-[1.08] text-brand-black">
                  Travel Solutions for
                  <br />
                  Every Journey
                </h2>
              </div>
              <div className="flex max-w-sm items-start gap-4 md:pb-1">
                <span
                  className="mt-1 hidden h-12 w-px shrink-0 bg-brand-red/70 md:block"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-brand-grey md:text-[15px]">
                  A complete range of travel and transportation services for
                  leisure, business and special occasions.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {pageServices.map((service, index) => {
                const Icon =
                  serviceIcons[service.icon as keyof typeof serviceIcons] ??
                  CarFront;
                return (
                  <Reveal
                    key={service.id}
                    delay={index * 0.07}
                    className="group flex flex-col overflow-hidden rounded-[1.15rem] bg-white shadow-[0_12px_40px_rgba(23,23,23,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(23,23,23,0.1)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="img-cover hover-zoom"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col px-5 pb-5 pt-7">
                      <span className="absolute -top-5 left-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-brand-red shadow-[0_8px_24px_rgba(23,23,23,0.1)]">
                        <Icon size={17} strokeWidth={1.7} />
                      </span>
                      <h3 className="font-display text-[1.35rem] leading-tight text-brand-black md:text-[1.4rem]">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-brand-grey">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-red transition group-hover:gap-2.5"
                      >
                        {service.cta}
                        <ArrowRight size={14} strokeWidth={2.2} />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-black/5 bg-brand-cream-deep py-12 md:py-16">
        <div className="section-pad">
          <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  Our Process
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.08] text-brand-black">
                  Plan, Book,
                  <br />
                  Travel – Easy.
                </h2>
              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
                {serviceProcess.map((item, index) => {
                  const Icon =
                    processIcons[item.icon as keyof typeof processIcons] ??
                    CalendarDays;
                  const isLast = index === serviceProcess.length - 1;
                  return (
                    <Reveal
                      key={item.step}
                      delay={index * 0.06}
                      className="relative"
                    >
                      <div className="flex items-start gap-3 lg:flex-col lg:gap-0">
                        <div className="relative shrink-0">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                            <Icon size={18} strokeWidth={1.7} />
                          </span>
                          {!isLast ? (
                            <ArrowRight
                              size={14}
                              className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-brand-grey/35 lg:block xl:-right-4"
                              aria-hidden
                            />
                          ) : null}
                        </div>
                        <div className="lg:mt-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-red/80">
                            Step {item.step}
                          </p>
                          <h3 className="mt-1 text-[15px] font-semibold text-brand-black">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-brand-grey">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-cream pb-12 pt-4 md:pb-16 md:pt-6">
        <div className="section-pad">
          <div className="container-wide">
            <Reveal className="relative overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem]">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
                  alt=""
                  fill
                  className="object-cover object-center opacity-35"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8F151A] via-brand-red to-[#941719]" />
                <div className="absolute inset-0 bg-brand-red/55" />
              </div>

              <div className="relative z-10 flex flex-col gap-8 px-6 py-9 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-11 lg:px-12">
                <h2 className="max-w-xs font-display text-[clamp(1.75rem,3vw,2.45rem)] leading-[1.1] text-white">
                  Ready to Plan
                  <br />
                  Your Next Journey?
                </h2>

                <div className="hidden h-16 w-px shrink-0 bg-white/25 lg:block" />

                <p className="max-w-xs text-sm leading-relaxed text-white/85 md:text-[15px]">
                  Get in touch with our team and find the right travel solution
                  for your needs.
                </p>

                <div className="flex flex-wrap gap-3 md:shrink-0">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-red transition hover:bg-brand-cream"
                  >
                    Book Now <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`tel:${siteConfig.phoneMainTel}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Call {siteConfig.phoneMain}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
