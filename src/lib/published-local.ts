import { blogs as fileBlogs, testimonials as fileTestimonials } from "@/lib/data";
import blogBodies from "@/lib/blog-bodies.json";

export type CmsTestimonial = {
  id: string;
  name: string;
  quote: string;
  rating?: number;
};

export type CmsBlog = {
  id: string;
  title: string;
  date: string;
  href: string;
  image: string;
  excerpt?: string;
  body?: string[];
};

export type PublishedContent = {
  testimonials: CmsTestimonial[];
  blogs: CmsBlog[];
  /** Same as blogs — ALL CMS section key alias. */
  insights: CmsBlog[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type BlogBody = { excerpt?: string; body?: string[] };

export function getPublishedFallback(): PublishedContent {
  const bodies = blogBodies as Record<string, BlogBody>;
  const blogs: CmsBlog[] = fileBlogs.map((post) => {
    const id = slugify(post.title);
    const content = bodies[id] || bodies[post.href.split("/").filter(Boolean).pop() || ""];
    return {
      id,
      title: post.title,
      date: post.date,
      href: post.href,
      image: post.image,
      excerpt: content?.excerpt,
      body: content?.body,
    };
  });

  const testimonials: CmsTestimonial[] = fileTestimonials.map((item) => ({
    id: slugify(item.name),
    name: item.name,
    quote: item.quote,
    rating: 5,
  }));

  return { testimonials, blogs, insights: blogs };
}
