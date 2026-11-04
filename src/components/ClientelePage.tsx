"use client";

import Image from "next/image";
import Link from "next/link";
import { clienteleNames, clients, siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ClientelePageContent() {
  return (
    <section className="bg-brand-cream pb-10 pt-6 md:pb-14 md:pt-8">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-8 max-w-3xl md:mb-10">
            <div className="ribbon-accent mb-2" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Our Esteemed Clientele
            </p>
            <h1 className="mt-1.5 font-display text-[clamp(1.85rem,3.5vw,2.85rem)] leading-[1.05] text-brand-black">
              Organisations that trust Safe Wheels.
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-grey md:text-base">
              From hospitals and campuses to manufacturing and life sciences —
              we support corporate travel, transfers and fleet needs across
              Mysuru and beyond.
            </p>
          </Reveal>

          <Reveal className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mb-12 md:grid-cols-4 md:gap-4">
            {clients.map((client) => (
              <div
                key={client.src}
                className="flex h-[100px] items-center justify-center rounded-2xl border border-black/6 bg-white px-4 md:h-[120px]"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={280}
                  height={140}
                  className="max-h-14 w-auto max-w-[140px] object-contain md:max-h-16"
                />
              </div>
            ))}
          </Reveal>

          <Reveal>
            <h2 className="mb-4 font-display text-xl text-brand-black md:mb-5 md:text-2xl">
              Full client list
            </h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {clienteleNames.map((name) => (
                <li
                  key={name}
                  className="rounded-xl border border-black/6 bg-white px-4 py-3 text-[14px] text-brand-black/85"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-3 rounded-2xl border border-black/6 bg-white p-5 md:mt-12 md:flex-row md:items-center md:justify-between md:p-6">
            <div>
              <p className="font-display text-lg text-brand-black md:text-xl">
                Looking for corporate travel support?
              </p>
              <p className="mt-1 text-sm text-brand-grey">
                Call {siteConfig.phoneMain} or send us your requirements.
              </p>
            </div>
            <Link href="/book" className="btn-primary w-fit shrink-0">
              Book Now
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
