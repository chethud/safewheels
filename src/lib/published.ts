import { cache } from "react";
import { blogFromCms, testimonialFromCms } from "./cms-map";
import {
  getPublishedFallback,
  type CmsBlog,
  type CmsTestimonial,
  type PublishedContent,
} from "./published-local";
import { cmsSiteId, createCmsClient } from "./supabase";

export type { CmsBlog, CmsTestimonial, PublishedContent } from "./published-local";
export { getPublishedFallback } from "./published-local";

type CmsRow = { id: string; content: unknown };

async function loadRemote(): Promise<{
  testimonials: CmsTestimonial[];
  blogs: CmsBlog[];
} | null> {
  const supabase = createCmsClient();
  if (!supabase) return null;
  const siteId = cmsSiteId();

  const [insights, testimonials] = await Promise.all([
    supabase
      .from("insights")
      .select("id, position, content")
      .eq("site_id", siteId)
      .order("position"),
    supabase
      .from("testimonials")
      .select("id, position, content")
      .eq("site_id", siteId)
      .order("position"),
  ]);

  const failed = [insights.error, testimonials.error].find(Boolean);
  if (failed) {
    console.error("Safe Wheels CMS:", failed.message);
    return null;
  }

  return {
    blogs: ((insights.data ?? []) as CmsRow[])
      .map((row) =>
        blogFromCms({
          ...(typeof row.content === "object" && row.content ? row.content : {}),
          id: row.id,
        }),
      )
      .filter((item): item is CmsBlog => Boolean(item)),
    testimonials: ((testimonials.data ?? []) as CmsRow[])
      .map((row) =>
        testimonialFromCms({
          ...(typeof row.content === "object" && row.content ? row.content : {}),
          id: row.id,
        }),
      )
      .filter((item): item is CmsTestimonial => Boolean(item)),
  };
}

export const getPublished = cache(async (): Promise<PublishedContent> => {
  const local = getPublishedFallback();
  const remote = await loadRemote();
  if (!remote) return local;

  const blogs = (remote.blogs.length ? remote.blogs : local.blogs).map((post) => {
    const localPost = local.blogs.find(
      (item) => item.href === post.href || item.title === post.title,
    );
    // Prefer local file images so homepage art updates without a CMS reseed.
    return localPost?.image ? { ...post, image: localPost.image } : post;
  });
  const testimonials = remote.testimonials.length
    ? remote.testimonials
    : local.testimonials;

  return { testimonials, blogs, insights: blogs };
});
