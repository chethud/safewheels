"use client";

import {
  Baby,
  Clock3,
  Droplets,
  Languages,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Wrench,
  CalendarClock,
} from "lucide-react";
import { whyUs } from "@/lib/data";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

const icons = [
  CalendarClock,
  MapPinned,
  Languages,
  Sparkles,
  Clock3,
  ShieldCheck,
  Wrench,
  Baby,
  Droplets,
];

export function WhyChooseUs() {
  const [featured, ...rest] = whyUs;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <div className="ribbon-accent mb-5" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Why Choose Safe Wheels
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] text-brand-black">
                Your Safety Isn&apos;t an Option. It&apos;s Our Standard.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-grey">
                From GPS-tracked vehicles to multilingual drivers and thoughtful
                in-cabin comforts, every detail is built around trust—earned
                since 1999.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 border-y border-black/10 py-8">
                <div>
                  <p className="font-display text-4xl text-brand-black md:text-5xl">
                    <AnimatedCounter value={25} suffix="+" />
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                    Years
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-brand-black md:text-5xl">
                    <AnimatedCounter value={24} suffix="/7" />
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                    Availability
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-brand-red md:text-5xl">
                    GPS
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                    Tracked Fleet
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-black/8 bg-brand-grey-light p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 text-brand-red">
                    <CalendarClock size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-brand-black">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                      {featured.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid gap-0 sm:grid-cols-2">
                {rest.map((item, index) => {
                  const Icon = icons[index + 1] ?? ShieldCheck;
                  return (
                    <li
                      key={item.title}
                      className="border-b border-black/8 py-5 pr-4 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                    >
                      <Icon
                        size={18}
                        className="mb-3 text-brand-red"
                        strokeWidth={1.6}
                      />
                      <h3 className="text-sm font-semibold tracking-wide text-brand-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
