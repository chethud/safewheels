import type { CmsBlog, CmsTestimonial } from "./published-local";

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function num(value: unknown) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
}

function strList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function asRecord(value: unknown) {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

/** insights → Blog cards (title, date, href/source, image, excerpt/body). */
export function blogFromCms(raw: unknown): CmsBlog | null {
  const row = asRecord(raw);
  const title = str(row.title);
  if (!title) return null;

  const slug = str(row.slug) || str(row.id) || title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const body = strList(row.body).length
    ? strList(row.body)
    : strList(row.paragraphs).length
      ? strList(row.paragraphs)
      : strList(row.content);
  const excerpt = str(row.excerpt) || body[0] || undefined;

  return {
    id: str(row.id) || slug,
    title,
    date: str(row.date) || "",
    href: `/blogs/${slug}`,
    image: str(row.image) || "",
    excerpt,
    body: body.length ? body : undefined,
  };
}

/** testimonials → Guest reviews (name, quote; rating optional). */
export function testimonialFromCms(raw: unknown): CmsTestimonial | null {
  const row = asRecord(raw);
  const name = str(row.name) || str(row.author);
  const quote = str(row.quote);
  if (!name || !quote) return null;

  const ratingRaw = Math.round(num(row.rating));
  const rating = ratingRaw >= 1 && ratingRaw <= 5 ? ratingRaw : undefined;

  return {
    id: str(row.id) || name,
    name,
    quote,
    rating,
  };
}
