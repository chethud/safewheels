"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

export function Destinations() {
  return (
    <section className="bg-brand-cream py-12 text-brand-black md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="ribbon-accent mb-5" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Destinations & Tour Ideas
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
                Discover routes worth the journey.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-brand-muted md:text-base">
              Domestic escapes, Mysuru sightseeing and international tour
              ideas—presented as discoverable inspiration. Enquire for tailored
              itineraries.
            </p>
          </Reveal>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {destinations.map((place, index) => (
              <Reveal
                key={place.name}
                delay={index * 0.05}
                className="mb-5 break-inside-avoid"
              >
                <article className="group relative overflow-hidden rounded-3xl">
                  <div
                    className={`relative overflow-hidden rounded-3xl ${
                      place.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="img-cover hover-zoom"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="font-display text-2xl md:text-3xl">{place.name}</h3>
                    <p className="mt-2 text-sm text-white/75">{place.description}</p>
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          `Hello Safe Wheels, I am interested in exploring tours to ${place.name}.`,
                        )
                      }
                      className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:text-brand-red"
                    >
                      Explore Tour <ArrowUpRight size={15} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
