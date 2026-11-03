"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-8 max-w-3xl md:mb-10">
            <div className="ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Contact
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] text-brand-black">
              Where Would You Like to Go Next?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-grey md:text-lg">
              Let us take care of your journey. Get in touch with our team and
              experience safe, comfortable and hassle-free travel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() =>
                  openWhatsApp(
                    "Hello Safe Wheels, I would like to book my next journey.",
                  )
                }
              >
                Book Your Journey
              </button>
              <Link href="/book" className="btn-outline-dark">
                Open Booking Form
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-black/8 p-6 md:p-7">
                <MapPin className="mb-4 text-brand-red" size={20} strokeWidth={1.6} />
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey">
                  Head Office
                </h3>
                <p className="mt-3 font-display text-2xl text-brand-black">
                  {siteConfig.address.title}
                </p>
                {siteConfig.address.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm leading-relaxed text-brand-grey">
                    {line}
                  </p>
                ))}
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-red"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="rounded-3xl border border-black/8 p-6 md:p-7">
                <Phone className="mb-4 text-brand-red" size={20} strokeWidth={1.6} />
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey">
                  Call Us
                </h3>
                <a
                  href={`tel:${siteConfig.phoneMainTel}`}
                  className="mt-3 block font-display text-2xl text-brand-black transition hover:text-brand-red"
                >
                  {siteConfig.phoneMain}
                </a>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                  Vehicle Rentals
                </p>
                <div className="mt-2 space-y-1">
                  {siteConfig.rentals.map((num) => (
                    <a
                      key={num}
                      href={`tel:+91${num}`}
                      className="block text-sm text-brand-black transition hover:text-brand-red"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-black/8 p-6 md:p-7 sm:col-span-2">
                <Mail className="mb-4 text-brand-red" size={20} strokeWidth={1.6} />
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey">
                  Email
                </h3>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-8">
                  <a
                    href={`mailto:${siteConfig.emails.rentals}`}
                    className="text-sm text-brand-black transition hover:text-brand-red"
                  >
                    {siteConfig.emails.rentals}
                  </a>
                  <a
                    href={`mailto:${siteConfig.emails.taxi}`}
                    className="text-sm text-brand-black transition hover:text-brand-red"
                  >
                    {siteConfig.emails.taxi}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="min-h-[360px] overflow-hidden rounded-3xl border border-black/8">
              <iframe
                title="Safe Wheels head office map"
                src={siteConfig.mapEmbed}
                className="h-full min-h-[360px] w-full rounded-3xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
