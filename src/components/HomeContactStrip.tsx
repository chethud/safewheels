"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";

export function HomeContactStrip() {
  return (
    <section className="bg-brand-black py-12 text-white md:py-16">
      <div className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <div className="ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Head Office
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
              Ready when you are — from Mysuru since 1999.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
              Visit us at Prashanth Plaza or reach the rentals desk for taxis,
              transfers and tour enquiries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">
                Book Now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Details
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <MapPin className="text-brand-red" size={20} />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {siteConfig.address.title}
                <br />
                {siteConfig.address.lines.join(" ")}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Phone className="text-brand-red" size={20} />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Call
              </p>
              <a
                href={`tel:${siteConfig.phoneMainTel}`}
                className="mt-2 block text-sm text-white/80 transition hover:text-white"
              >
                {siteConfig.phoneMain}
              </a>
              <a
                href={`tel:+91${siteConfig.rentals[0]}`}
                className="mt-1 block text-sm text-white/80 transition hover:text-white"
              >
                {siteConfig.rentals[0]}
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
              <Mail className="text-brand-red" size={20} />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Email
              </p>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/80">
                <a
                  href={`mailto:${siteConfig.emails.rentals}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.emails.rentals}
                </a>
                <a
                  href={`mailto:${siteConfig.emails.taxi}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.emails.taxi}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
