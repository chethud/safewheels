"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Services() {
  const featured = services.filter((s) => s.featured);
  const supporting = services.filter((s) => !s.featured);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="ribbon-accent mb-5" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Our Services
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-brand-black">
                Travel solutions shaped around how you move.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-brand-grey md:text-base">
              Domestic tours, airport transfers, corporate travel and luxury
              rentals—each service designed with clarity, comfort and trust.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-12">
            {featured.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * 0.08}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0
                    ? "min-h-[420px] lg:col-span-7"
                    : index === 1
                      ? "min-h-[360px] lg:col-span-5"
                      : "min-h-[360px] lg:col-span-12 lg:min-h-[380px]"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="img-cover hover-zoom"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-3xl text-white md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:text-brand-red"
                  >
                    Explore More <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supporting.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * 0.06}
                className="group grid overflow-hidden rounded-3xl border border-black/8 bg-brand-grey-light md:min-h-[220px] md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-[180px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="img-cover hover-zoom"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="font-display text-2xl text-brand-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-grey">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:text-brand-red"
                  >
                    Explore More <ArrowUpRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
