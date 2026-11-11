"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CarFront,
  Compass,
  Handshake,
  HeartHandshake,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  aboutMilestones,
  aboutOffers,
  aboutPillars,
  siteConfig,
} from "@/lib/data";
import { Reveal } from "./Reveal";

const pillarIcons = [Compass, HeartHandshake, ShieldCheck] as const;
const offerIcons = [Compass, Plane, Building2, CarFront] as const;

export function About({ full = false }: { full?: boolean }) {
  return (
    <>
      <section className="bg-brand-cream py-12 md:py-16">
        <div className="section-pad">
          <div className="container-wide grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
            <Reveal className="relative min-h-[280px] overflow-hidden rounded-3xl lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
                alt="Travellers experiencing a scenic journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Mysuru · Karnataka
                </p>
                <p className="mt-1.5 font-display text-2xl md:text-[1.75rem]">
                  Safe. Reliable. Personal.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.12}
              className="flex flex-col justify-center rounded-3xl bg-brand-grey-light px-6 py-8 md:px-8 lg:px-10 lg:py-10"
            >
              <div className="ribbon-accent mb-4" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                About Safe Wheels
              </p>
              <h2 className="mt-3 max-w-lg font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.05] text-brand-black">
                More Than 25 Years of Moving People Forward.
              </h2>
              <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-brand-grey">
                Started in 1999, Safe Wheels is a travel agency that has
                consistently delivered safe, reliable and hassle-free travel
                solutions. Built on experience, trust and a commitment to
                customer satisfaction, we continue to make every journey
                comfortable and memorable.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-5 border-t border-black/10 pt-5">
                <div>
                  <p className="font-display text-4xl text-brand-black md:text-5xl">
                    1999
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-grey">
                    Since
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-brand-red md:text-5xl">
                    25+
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-grey">
                    Years of Legacy
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {full ? (
                  <Link href="/why-us" className="btn-outline-dark w-fit">
                    Why Travellers Choose Us
                  </Link>
                ) : (
                  <>
                    <Link href="/about" className="btn-outline-dark w-fit">
                      Read Our Story
                    </Link>
                    <Link href="/why-us" className="btn-secondary w-fit">
                      Why Choose Us
                    </Link>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {full ? (
        <>
          {/* Vision / Mission / Promise */}
          <section className="border-t border-black/5 bg-white py-12 md:py-16">
            <div className="section-pad">
              <div className="container-wide">
                <Reveal className="mb-8 max-w-2xl md:mb-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                    Who We Are
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.08] text-brand-black">
                    A planned vision — carried forward every day.
                  </h2>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-brand-grey md:text-base">
                    There has been a persistent endeavour to realise and carry
                    forward our vision: travel that is safe, organised and
                    genuinely caring for families, guests and corporate
                    travellers alike.
                  </p>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-3">
                  {aboutPillars.map((pillar, index) => {
                    const Icon = pillarIcons[index] ?? Sparkles;
                    return (
                      <Reveal
                        key={pillar.title}
                        delay={index * 0.08}
                        className="rounded-[1.25rem] border border-black/6 bg-brand-cream p-6 md:p-7"
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                          <Icon size={18} strokeWidth={1.7} />
                        </span>
                        <h3 className="mt-5 font-display text-2xl text-brand-black">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-brand-grey">
                          {pillar.description}
                        </p>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Journey timeline */}
          <section className="bg-brand-cream-deep py-12 md:py-16">
            <div className="section-pad">
              <div className="container-wide">
                <Reveal className="mb-8 md:mb-10 md:flex md:items-end md:justify-between md:gap-10">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                      Our Journey
                    </p>
                    <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.08] text-brand-black">
                      From a Mysuru start to journeys across India.
                    </h2>
                  </div>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-grey md:mt-0 md:pb-1">
                    Rooted at Prashanth Plaza, Saraswathipuram — serving
                    travellers with the same care since {siteConfig.established}.
                  </p>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {aboutMilestones.map((item, index) => (
                    <Reveal
                      key={item.year}
                      delay={index * 0.06}
                      className="relative rounded-[1.25rem] bg-white p-5 shadow-[0_10px_36px_rgba(23,23,23,0.05)] md:p-6"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                        {item.year}
                      </p>
                      <h3 className="mt-3 font-display text-xl text-brand-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                        {item.description}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* What we offer */}
          <section className="bg-brand-cream py-12 md:py-16">
            <div className="section-pad">
              <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
                <Reveal>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                    What We Offer
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.08] text-brand-black">
                    Travel solutions shaped around how you move.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-brand-grey md:text-[15px]">
                    Domestic tours, airport transfers, corporate travel and
                    luxury rentals — each service designed with clarity, comfort
                    and trust.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/services" className="btn-primary">
                      Explore Services <ArrowRight size={15} />
                    </Link>
                    <Link href="/book" className="btn-outline-dark">
                      Book a Trip
                    </Link>
                  </div>
                </Reveal>

                <div className="grid gap-3 sm:grid-cols-2">
                  {aboutOffers.map((offer, index) => {
                    const Icon = offerIcons[index] ?? MapPinned;
                    return (
                      <Reveal
                        key={offer.title}
                        delay={index * 0.06}
                        className="rounded-[1.15rem] border border-black/6 bg-white p-5 transition hover:border-brand-red/25"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                          <Icon size={17} strokeWidth={1.7} />
                        </span>
                        <h3 className="mt-4 font-display text-xl text-brand-black">
                          {offer.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                          {offer.description}
                        </p>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Local roots / office */}
          <section className="border-t border-black/5 bg-white py-12 md:py-16">
            <div className="section-pad">
              <div className="container-wide grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <Reveal className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] md:min-h-[340px]">
                  <Image
                    src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=80"
                    alt="Mysuru heritage and city atmosphere"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                      Head Office
                    </p>
                    <p className="mt-1.5 font-display text-2xl">
                      {siteConfig.address.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      {siteConfig.address.lines.join(" ")}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                    Based in Mysuru
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.6rem)] leading-[1.08] text-brand-black">
                    Local expertise. Personal attention.
                  </h2>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-brand-grey">
                    Whether you need a quick airport run, a weekend in Coorg, or
                    a multi-day tour, our team plans around your schedule —
                    with drivers who know the roads and languages of the region.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "GPS-tracked vehicles and punctual pickups",
                      "Multilingual drivers for comfort on the road",
                      "Corporate and family travel handled with equal care",
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 text-sm text-brand-black/85"
                      >
                        <Handshake
                          size={16}
                          className="mt-0.5 shrink-0 text-brand-red"
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`tel:${siteConfig.phoneMainTel}`}
                      className="btn-primary"
                    >
                      Call {siteConfig.phoneMain}
                    </a>
                    <Link href="/contact" className="btn-outline-dark">
                      Contact Details
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="bg-brand-cream pb-12 pt-2 md:pb-16">
            <div className="section-pad">
              <div className="container-wide">
                <Reveal className="relative overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8F151A] via-brand-red to-[#941719]" />
                  <div className="relative z-10 flex flex-col gap-6 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-10 md:py-11">
                    <div className="max-w-md">
                      <h2 className="font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.1] text-white">
                        Ready to travel with Safe Wheels?
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/85">
                        Share your route and dates — we will help you plan a
                        comfortable, reliable journey from Mysuru.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/book"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-red transition hover:bg-brand-cream"
                      >
                        Book Now <ArrowRight size={15} />
                      </Link>
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                      >
                        View Services
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
