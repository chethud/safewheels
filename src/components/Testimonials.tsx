"use client";

import { useCms } from "@/components/cms/CmsProvider";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { testimonials } = useCms();

  return (
    <section className="bg-brand-grey-light py-12 md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-7 text-center md:mb-8">
            <div className="mx-auto ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Testimonials
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(1.85rem,3.5vw,3rem)] leading-[1.05] text-brand-black">
              Journeys Made Memorable. Trust Earned Over Time.
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {testimonials.map((item, index) => (
              <Reveal key={item.id || item.name} delay={index * 0.08}>
                <blockquote className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white px-5 py-6 md:px-6 md:py-7">
                  <div
                    className="absolute left-0 top-0 h-full w-1 bg-brand-red"
                    aria-hidden
                  />
                  {typeof item.rating === "number" ? (
                    <p
                      className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-red"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {"★".repeat(item.rating)}
                      <span className="text-black/15">
                        {"★".repeat(Math.max(0, 5 - item.rating))}
                      </span>
                    </p>
                  ) : null}
                  <p className="text-[0.95rem] leading-relaxed text-brand-black/85">
                    “{item.quote}”
                  </p>
                  <footer className="mt-5 border-t border-black/6 pt-4">
                    <cite className="not-italic text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-red">
                      {item.name}
                    </cite>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
