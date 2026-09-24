import { getCollection } from "astro:content";
import { site } from "../data/site";

const escape = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export async function GET({ site: origin }) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  const base = origin ?? new URL("https://ryanlyu.com");
  const items = posts.map((post) => `
    <item>
      <title>${escape(post.data.title)}</title>
      <description>${escape(post.data.description)}</description>
      <link>${new URL(`/blog/${post.id}/`, base)}</link>
      <guid>${new URL(`/blog/${post.id}/`, base)}</guid>
      <pubDate>${post.data.publishedAt.toUTCString()}</pubDate>
    </item>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel>
    <title>${escape(site.name)}</title>
    <description>${escape(site.intro)}</description>
    <link>${base}</link>${items}
  </channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
