"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCms } from "@/components/cms/CmsProvider";
import { Reveal } from "./Reveal";

function Stars({ rating }: { rating?: number }) {
  if (typeof rating !== "number") return null;
  return (
    <p
      className="text-[12px] tracking-[0.2em] text-brand-red"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(rating)}
      <span className="text-black/15">{"★".repeat(Math.max(0, 5 - rating))}</span>
    </p>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-[11px] font-semibold tracking-[0.08em] text-white"
      aria-hidden
    >
      {initials || "SW"}
    </span>
  );
}

export function Testimonials() {
  const { testimonials } = useCms();
  const reduce = useReducedMotion();
  const [featured, ...rest] = testimonials;

  if (!testimonials.length) return null;

  return (
    <section className="relative overflow-hidden bg-brand-cream py-12 text-brand-black md:py-16">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-brand-red/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="section-pad relative z-10">
        <div className="container-wide">
          <Reveal className="mb-8 max-w-3xl md:mb-10">
            <div className="ribbon-accent mb-4" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Guest Reviews
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.05]">
              Journeys Made Memorable.{" "}
              <span className="text-brand-grey">Trust earned over time.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-grey md:text-[0.95rem]">
              Families, first-time visitors and regular travellers choose Safe
              Wheels for the same reason — dependable people behind the wheel.
            </p>
          </Reveal>

          <div className="space-y-5">
            {featured ? (
              <Reveal>
                <blockquote className="relative overflow-hidden rounded-[1.75rem] border border-black/8 bg-brand-grey-light p-6 md:p-8">
                  <motion.span
                    aria-hidden
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 0.12, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-none absolute -top-3 left-4 font-display text-[7rem] leading-none text-brand-red md:text-[8.5rem]"
                  >
                    “
                  </motion.span>
                  <Stars rating={featured.rating} />
                  <p className="relative mt-3 max-w-4xl font-display text-[1.25rem] leading-snug text-brand-black md:text-[1.45rem]">
                    {featured.quote}
                  </p>
                  <footer className="relative mt-6 flex items-center gap-3">
                    <Initials name={featured.name} />
                    <div>
                      <cite className="not-italic text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-black">
                        {featured.name}
                      </cite>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-brand-grey">
                        Verified traveller
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ) : null}

            {rest.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {rest.map((item, index) => (
                  <Reveal key={item.id || item.name} delay={0.08 * (index + 1)}>
                    <blockquote className="flex h-full flex-col rounded-[1.5rem] border border-black/8 bg-brand-grey-light p-5 md:p-6">
                      <Stars rating={item.rating} />
                      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-brand-black/80">
                        “{item.quote}”
                      </p>
                      <footer className="mt-5 flex items-center gap-3 border-t border-black/8 pt-4">
                        <Initials name={item.name} />
                        <cite className="not-italic text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-black">
                          {item.name}
                        </cite>
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
