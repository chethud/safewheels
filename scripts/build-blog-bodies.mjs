import fs from "fs";

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li>/gi, "• ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&hellip;/g, "…")
    .replace(/\[\s*&hellip;\s*\]/g, "…")
    .replace(/\[&hellip;\]/g, "…")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanParas(paras, title) {
  const titleNorm = title.toLowerCase().trim();
  return paras
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => s.length > 35)
    .filter((s) => s.toLowerCase() !== titleNorm)
    .filter((s) => !s.startsWith("• Why Choosing a Taxi"))
    .filter((s) => !s.includes("• Best Taxi Services in Mysore for Airport"))
    .filter((s) => !/^Related|Keep Reading|Share this/i.test(s));
}

function cleanExcerpt(excerpt, title) {
  return excerpt
    .replace(new RegExp(`^${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*`, "i"), "")
    .replace(/^[A-Za-z]+ \d{1,2}, \d{4}\s*/, "")
    .replace(/\[\s*…\s*\]/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

const posts = JSON.parse(fs.readFileSync("tmp-blogs.json", "utf8"));
const top5 = JSON.parse(fs.readFileSync("tmp-top5.json", "utf8"));
const all = [...posts, ...top5];

const wanted = {
  "why-choosing-a-taxi-in-mysore-is-best-for-tourists-and-families":
    "Why Choosing a Taxi in Mysore is Best for Tourists and Families",
  "best-taxi-services-in-mysore-for-airport-coorg-ooty-trips":
    "Best Taxi Services in Mysore for Airport, Coorg & Ooty Trips",
  "how-to-choose-the-right-taxi-services-in-mysore-for-your-travel":
    "How to Choose the Right Taxi Services in Mysore for Your Travel",
  "airport-transfers-made-easy-tips-for-stress-free-travel":
    "Airport Transfers Made Easy: Tips for Stress-Free Travel",
  "exploring-mysuru-like-a-local-best-places-to-visit-with-a-private-cab":
    "Exploring Mysuru Like a Local: Best Places to Visit with a Private Cab",
  "top-5-reasons-to-choose-safe-wheels-india-for-your-mysuru-to-bengaluru-airport-transfers":
    "Top 5 Reasons to Choose Safe Wheels India for Your Mysuru to Bengaluru Airport Transfers",
};

const out = {};
for (const p of all) {
  if (!wanted[p.slug]) continue;
  const title = wanted[p.slug];
  const text = strip(p.content.rendered);
  const paras = cleanParas(
    text.split(/\n\n+/).map((s) => s.replace(/\s+/g, " ").trim()),
    title,
  );
  const excerpt = cleanExcerpt(strip(p.excerpt.rendered), title);
  out[p.slug] = { excerpt, body: paras };
  console.log(p.slug, paras.length, excerpt.slice(0, 70));
}

fs.mkdirSync("src/lib", { recursive: true });
fs.writeFileSync("src/lib/blog-bodies.json", JSON.stringify(out, null, 2));
console.log("wrote src/lib/blog-bodies.json", Object.keys(out).length);
