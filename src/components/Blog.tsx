"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Blog() {
  const [featured, ...rest] = blogs;

  return (
    <section className="bg-brand-grey-light py-20 md:py-28">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-12 md:mb-16">
            <div className="ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Latest Travel Stories
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.05] text-brand-black">
              Notes from the road, written for travellers.
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="group relative min-h-[420px] overflow-hidden rounded-3xl lg:col-span-7">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="img-cover hover-zoom"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <time className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {featured.date}
                </time>
                <h3 className="mt-3 max-w-xl font-display text-3xl text-white md:text-4xl">
                  {featured.title}
                </h3>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:text-brand-red"
                >
                  Read More <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6 lg:col-span-5">
              {rest.map((post, index) => (
                <Reveal
                  key={post.href}
                  delay={0.08 * (index + 1)}
                  className="group grid overflow-hidden rounded-3xl bg-white sm:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className="relative min-h-[160px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="img-cover hover-zoom"
                      sizes="(max-width: 640px) 100vw, 20vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 md:p-6">
                    <time className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                      {post.date}
                    </time>
                    <h3 className="mt-2 font-display text-xl leading-snug text-brand-black">
                      {post.title}
                    </h3>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:text-brand-red"
                    >
                      Read More <ArrowUpRight size={14} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
