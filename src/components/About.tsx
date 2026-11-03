"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-pad">
        <div className="container-wide grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-3xl lg:min-h-[620px]">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
              alt="Travellers experiencing a scenic journey"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Mysuru · Karnataka
              </p>
              <p className="mt-2 font-display text-3xl">Safe. Reliable. Personal.</p>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="flex flex-col justify-center rounded-3xl bg-brand-grey-light px-6 py-12 md:px-12 lg:px-16 lg:py-20"
          >
            <div className="ribbon-accent mb-6" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              About Safe Wheels
            </p>
            <h2 className="mt-4 max-w-lg font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-brand-black">
              More Than 25 Years of Moving People Forward.
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-brand-grey">
              Started in 1999, Safe Wheels is a travel agency that has
              consistently delivered safe, reliable and hassle-free travel
              solutions. Built on experience, trust and a commitment to customer
              satisfaction, we continue to make every journey comfortable and
              memorable.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-black/10 pt-8">
              <div>
                <p className="font-display text-5xl text-brand-black md:text-6xl">
                  1999
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-grey">
                  Since
                </p>
              </div>
              <div>
                <p className="font-display text-5xl text-brand-red md:text-6xl">
                  25+
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-grey">
                  Years of Legacy
                </p>
              </div>
            </div>

            <Link href="/why-us" className="btn-outline-dark mt-10 w-fit">
              Why Travellers Choose Us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
