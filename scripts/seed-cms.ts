/**
 * Upsert Safe Wheels static testimonials + blogs into shared ALL CMS Supabase.
 *
 * Usage:
 *   npm run seed:cms
 *
 * Requires: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, CMS_SITE_ID=safe-wheels
 */
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";
import { blogs, testimonials } from "../src/lib/data";

function loadEnvFile(fileName: string) {
  const filePath = resolve(process.cwd(), fileName);
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const SITE_ID = process.env.CMS_SITE_ID?.trim() || "safe-wheels";
const SITE_NAME = "Safe Wheels";
const SITE_DOMAIN = "safewheels-website.vercel.app";

function env(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function insightContent(post: (typeof blogs)[number], index: number) {
  const id = slugify(post.title);
  return {
    id,
    slug: id,
    title: post.title,
    excerpt: "",
    category: "Travel",
    date: post.date,
    image: post.image,
    body: [] as string[],
    source: post.href,
    href: post.href.startsWith("/") ? post.href : `/blogs/${id}`,
    positionHint: index,
  };
}

function testimonialContent(item: (typeof testimonials)[number], index: number) {
  const id = slugify(item.name);
  return {
    id,
    name: item.name,
    location: "",
    quote: item.quote,
    image: "",
    designation: "",
    verified: true,
    service: "",
    rating: 5,
    positionHint: index,
  };
}

async function main() {
  const url = env("NEXT_PUBLIC_SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY");
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const siteUpsert = await supabase.from("sites").upsert(
    { id: SITE_ID, name: SITE_NAME, domain: SITE_DOMAIN },
    { onConflict: "id" },
  );
  if (siteUpsert.error) throw new Error(`sites: ${siteUpsert.error.message}`);

  const now = new Date().toISOString();

  for (let i = 0; i < blogs.length; i++) {
    const post = blogs[i];
    const content = insightContent(post, i);
    const { error } = await supabase.from("insights").upsert({
      site_id: SITE_ID,
      id: content.id,
      position: i,
      content,
      updated_at: now,
    });
    if (error) throw new Error(`insights ${content.id}: ${error.message}`);
  }

  for (let i = 0; i < testimonials.length; i++) {
    const item = testimonials[i];
    const content = testimonialContent(item, i);
    const { error } = await supabase.from("testimonials").upsert({
      site_id: SITE_ID,
      id: content.id,
      position: i,
      content,
      updated_at: now,
    });
    if (error) throw new Error(`testimonials ${content.id}: ${error.message}`);
  }

  console.log(
    `Seeded Safe Wheels CMS (${SITE_ID}): ${blogs.length} insights/blogs, ${testimonials.length} testimonials.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
