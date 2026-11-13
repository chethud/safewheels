"use client";

import Image from "next/image";
import { useState } from "react";
import { fleet } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

export function Fleet() {
  const [active, setActive] = useState(0);
  const vehicle = fleet[active];

  return (
    <section id="fleet" className="bg-brand-grey-light py-12 md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-8 max-w-2xl md:mb-10">
            <div className="ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Choose Your Cab
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-brand-black">
              Rent the right car for the ride ahead.
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12">
            <Reveal className="flex flex-col">
              <div className="flex flex-wrap gap-2 border-b border-black/10 pb-4">
                {fleet.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                      active === index
                        ? "bg-brand-black text-white"
                        : "bg-white text-brand-black/70 hover:text-brand-black"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-grey">
                  Rental category
                </p>
                <h3 className="mt-2 font-display text-4xl text-brand-black md:text-5xl">
                  {vehicle.name}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-brand-grey">
                  {vehicle.description}
                </p>
                <button
                  type="button"
                  className="btn-primary mt-8"
                  onClick={() =>
                    openWhatsApp(
                      `Hello Safe Wheels, I would like to rent a ${vehicle.name} cab.`,
                    )
                  }
                >
                  Rent This Cab
                </button>
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className="relative min-h-[420px] overflow-hidden rounded-3xl bg-white md:min-h-[560px] lg:min-h-full lg:self-stretch"
            >
              <Image
                key={vehicle.id}
                src={vehicle.image}
                alt={vehicle.name}
                fill
                priority={active === 0}
                quality={100}
                className="object-contain object-center p-1 md:p-2"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute left-3 top-3 bottom-3 w-1.5 rounded-full bg-brand-red" aria-hidden />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
