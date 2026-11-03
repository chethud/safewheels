"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=80"
          alt="Premium vehicle travelling along a scenic mountain road"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-center section-pad pt-[88px] pb-20 md:pt-[96px] md:pb-24">
          <div className="container-wide max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="ribbon-accent" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                Est. 1999 · Mysuru · Celebrating 25+ Years
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.95] tracking-tight text-white"
            >
              Every Journey
              <br />
              Deserves a{" "}
              <span className="text-brand-red">Safer</span> Way.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              From everyday transportation to unforgettable journeys, travel
              with the experience and reliability of Safe Wheels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/book" className="btn-primary">
                Book Your Vehicle
              </Link>
              <Link href="/tourist-places" className="btn-secondary">
                Explore Destinations
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
