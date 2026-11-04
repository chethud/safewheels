"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";
import { Reveal } from "./Reveal";

export function Blog() {
  const { blogs } = useCms();
  const posts = blogs.slice(0, 3);
  if (!posts.length) return null;

  return (
    <section className="bg-brand-grey-light py-12 md:py-16">
      <div className="section-pad">
        <div className="container-wide">
          <Reveal className="mb-8 md:mb-10">
            <div className="ribbon-accent mb-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Latest Travel Stories
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.05] text-brand-black">
              Notes from the road, written for travellers.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal
                key={post.id || post.href || post.title}
                delay={0.05 * index}
                className="group overflow-hidden rounded-3xl bg-white"
              >
                <div className="relative min-h-[180px] bg-brand-black/5">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="img-cover hover-zoom"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col p-5 md:p-6">
                  <time className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                    {post.date}
                  </time>
                  <h3 className="mt-2 font-display text-xl leading-snug text-brand-black md:text-[1.35rem]">
                    {post.title}
                  </h3>
                  {post.excerpt ? (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-grey">
                      {post.excerpt}
                    </p>
                  ) : null}
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
    </section>
  );
}
