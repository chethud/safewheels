import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPublished } from "@/lib/published";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function postSlug(post: { id?: string; href: string }) {
  return post.id || post.href.split("/").filter(Boolean).pop() || "";
}

async function getPost(slug: string) {
  const { blogs } = await getPublished();
  return blogs.find((post) => postSlug(post) === slug);
}

export async function generateStaticParams() {
  const { blogs } = await getPublished();
  return blogs.map((post) => ({
    slug: postSlug(post),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { blogs } = await getPublished();
  const post = blogs.find((item) => postSlug(item) === slug);
  if (!post) notFound();

  const recommendations = blogs
    .filter((item) => postSlug(item) !== slug)
    .slice(0, 3);

  return (
    <article className="pt-[72px] md:pt-[80px]">
      <div className="bg-brand-grey-light py-10 md:py-14">
        <div className="section-pad">
          <div className="container-wide max-w-3xl">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey transition hover:text-brand-red"
            >
              <ArrowLeft size={14} /> Back to stories
            </Link>
            <time className="mt-6 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
              {post.date}
            </time>
            <h1 className="mt-3 font-display text-[clamp(1.85rem,4vw,3rem)] leading-[1.08] text-brand-black">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="section-pad py-10 md:py-14">
        <div className="container-wide max-w-3xl">
          {post.image ? (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-3xl bg-brand-black/5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          ) : null}

          {post.body?.length ? (
            <div className="space-y-4 text-base leading-relaxed text-brand-grey md:text-lg">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          ) : post.excerpt ? (
            <p className="text-base leading-relaxed text-brand-grey md:text-lg">
              {post.excerpt}
            </p>
          ) : (
            <p className="text-base leading-relaxed text-brand-grey md:text-lg">
              This travel story is coming soon on Safe Wheels. Meanwhile, explore
              our services or book a reliable ride from Mysuru.
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book" className="btn-primary">
              Book a ride
            </Link>
            <Link href="/services" className="btn-secondary">
              View services
            </Link>
          </div>
        </div>
      </div>

      {recommendations.length > 0 ? (
        <section className="border-t border-black/8 bg-brand-cream py-12 md:py-16">
          <div className="section-pad">
            <div className="container-wide">
              <div className="mb-8 md:mb-10">
                <div className="ribbon-accent mb-3" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Keep Reading
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] text-brand-black">
                  More travel stories you may like
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {recommendations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href.startsWith("/") ? item.href : `/blogs/${postSlug(item)}`}
                    className="group overflow-hidden rounded-3xl border border-black/6 bg-white transition hover:border-black/12"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-black/5">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : null}
                    </div>
                    <div className="p-5 md:p-6">
                      <time className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey">
                        {item.date}
                      </time>
                      <h3 className="mt-2 font-display text-xl leading-snug text-brand-black">
                        {item.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black transition group-hover:text-brand-red">
                        Read More <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
