/**
 * robots.txt, prerendered Astro endpoint.
 *
 * Allows all crawlers and points them at the sitemap. The Sitemap URL is
 * built from business.siteUrl (wire the real domain in src/data/business.ts).
 */
import { business } from "@/data/business";

export const prerender = true;

const siteUrl = business.siteUrl.replace(/\/$/, "");

const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

export const GET = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
