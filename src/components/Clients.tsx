"use client";

import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Clients({ showViewMore = true }: { showViewMore?: boolean }) {
  const row = [...clients, ...clients];

  return (
    <section className="bg-brand-cream py-6 md:py-8">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-3 flex flex-col gap-2 md:mb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="ribbon-accent mb-2" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Our Valued Clients
              </p>
              <h2 className="mt-1.5 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05] text-brand-black">
                Trusted by organisations that value reliability.
              </h2>
            </div>
            {showViewMore ? (
              <Link href="/clientele" className="btn-outline-dark w-fit">
                View More
              </Link>
            ) : null}
          </Reveal>
        </div>
      </div>

      <div className="clients-marquee group relative overflow-hidden">
        <div className="clients-marquee-track flex w-max gap-3">
          {row.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-2xl border border-black/6 bg-white px-5 md:h-[110px] md:w-[220px]"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={280}
                height={140}
                className="max-h-16 w-auto max-w-[160px] object-contain md:max-h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
