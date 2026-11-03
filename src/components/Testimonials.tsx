"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-brand-grey-light py-20 md:py-28">
      <div className="section-pad">
        <div className="container-safe">
          <Reveal className="mb-10 text-center md:mb-14">
            <div className="mx-auto ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Testimonials
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-brand-black">
              Journeys Made Memorable. Trust Earned Over Time.
            </h2>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white px-6 py-12 md:px-14 md:py-16">
              <div className="absolute left-0 top-0 h-full w-1.5 rounded-full bg-brand-red" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="font-display text-2xl leading-snug text-brand-black md:text-[1.85rem]">
                    “{current.quote}”
                  </p>
                  <footer className="mt-8">
                    <cite className="not-italic text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">
                      {current.name}
                    </cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      aria-label={`Show testimonial from ${t.name}`}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 w-8 rounded-full transition ${
                        i === index ? "bg-brand-red" : "bg-black/15"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-black transition hover:border-brand-red hover:text-brand-red"
                    onClick={() =>
                      setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                    }
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-black transition hover:border-brand-red hover:text-brand-red"
                    onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
