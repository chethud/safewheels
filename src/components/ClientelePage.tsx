"use client";

import Image from "next/image";
import Link from "next/link";
import { Handshake, Users } from "lucide-react";
import {
  clienteleLogos,
  clienteleNames,
  partnerLogos,
  siteConfig,
} from "@/lib/data";
import { Reveal } from "./Reveal";

function LogoGrid({
  items,
}: {
  items: readonly { name: string; src: string; dark?: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
      {items.map((item) => (
        <div
          key={`${item.name}-${item.src}`}
          className={`flex h-[100px] items-center justify-center rounded-2xl border px-4 md:h-[120px] ${
            item.dark
              ? "border-black/20 bg-black"
              : "border-black/6 bg-white"
          }`}
        >
          <Image
            src={item.src}
            alt={item.name}
            width={280}
            height={140}
            className="max-h-14 w-auto max-w-[150px] object-contain md:max-h-[4.5rem]"
          />
        </div>
      ))}
    </div>
  );
}

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

          <Reveal className="mb-3 flex items-center gap-3 md:mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A227]/12 text-[#8F7410]">
              <Users size={16} strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-black">
                Clientele
              </h2>
              <span className="mt-1 block h-px w-10 bg-[#C9A227]" />
            </div>
          </Reveal>

          <Reveal className="mb-12 md:mb-14">
            <LogoGrid items={clienteleLogos} />
          </Reveal>

          <Reveal className="mb-3 flex items-center gap-3 md:mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A227]/12 text-[#8F7410]">
              <Handshake size={16} strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-black">
                Partners &amp; Associations
              </h2>
              <span className="mt-1 block h-px w-10 bg-[#C9A227]" />
            </div>
          </Reveal>

          <Reveal className="mb-12 md:mb-14">
            <LogoGrid items={partnerLogos} />
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
