"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { homeServices } from "@/lib/data";
import { Reveal } from "./Reveal";

export function HomeServices() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="bg-brand-cream-deep py-14 md:py-20">
      <div className="section-pad">
        <div className="container-wide">
          <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
            <Reveal className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Our Services
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-brand-black">
                Travel, <em className="italic text-brand-red">Simplified.</em>
              </h2>
            </Reveal>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-black transition hover:border-brand-red hover:text-brand-red"
                aria-label="Previous services"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-black transition hover:border-brand-red hover:text-brand-red"
                aria-label="Next services"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scroller}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4"
          >
            {homeServices.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * 0.06}
                className="group relative min-h-[280px] w-[78%] shrink-0 overflow-hidden rounded-[1.35rem] sm:w-[55%] md:w-auto md:min-h-[300px]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="img-cover hover-zoom"
                  sizes="(max-width: 768px) 80vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-white">
                      {service.title}
                    </h3>
                    <Link
                      href={service.href}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-brand-red"
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
