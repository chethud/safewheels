"use client";

import Image from "next/image";
import { clients } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Clients() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="ribbon-accent mb-5" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Our Valued Clients
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] text-brand-black">
                Trusted by organisations that value reliability.
              </h2>
            </div>
            <a
              href="https://safewheelsindia.com/clientele/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark w-fit"
            >
              View More
            </a>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex min-h-[160px] items-center justify-center rounded-2xl border border-black/6 bg-white px-6 py-10 grayscale transition hover:grayscale-0"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={220}
                    height={110}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
