/**
 * sitemap.xml, prerendered Astro endpoint.
 *
 * Emits one <url> per page using absolute URLs built from business.siteUrl
 * (wire the real domain in src/data/business.ts). Covers the static pages,
 * every service detail (/services/[slug]) and every location
 * (/service-area/[slug]), so the sitemap stays in sync with the data.
 */
import { business } from "@/data/business";

export const prerender = true;

const siteUrl = business.siteUrl.replace(/\/$/, "");

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/gallery",
  "/reviews",
  "/services",
  "/service-area",
  "/privacy-policy",
  "/terms-and-conditions",
];

const servicePaths = business.serviceDetails.map(
  (detail) => `/services/${detail.slug}`,
);

const locationPaths = business.locations.map(
  (location) => `/service-area/${location.slug}`,
);

const allPaths = [...staticPaths, ...servicePaths, ...locationPaths];

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join("\n")}
</urlset>
`;

export const GET = () =>
  new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
