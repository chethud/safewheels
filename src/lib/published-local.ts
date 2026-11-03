import { blogs as fileBlogs, testimonials as fileTestimonials } from "@/lib/data";

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

export function getPublishedFallback(): PublishedContent {
  const blogs: CmsBlog[] = fileBlogs.map((post) => ({
    id: slugify(post.title),
    title: post.title,
    date: post.date,
    href: post.href,
    image: post.image,
  }));

  const testimonials: CmsTestimonial[] = fileTestimonials.map((item) => ({
    id: slugify(item.name),
    name: item.name,
    quote: item.quote,
    rating: 5,
  }));

  return { testimonials, blogs, insights: blogs };
}
