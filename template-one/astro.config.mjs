// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import fontManifest from "./src/theme/font-manifest.json" with { type: "json" };

const bodyWeights = /** @type {[number, ...number[]]} */ (fontManifest.body.weights);
const headingWeights = /** @type {[number, ...number[]]} */ (fontManifest.heading.weights);

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  fonts: [
    {
      provider: fontProviders.google(),
      name: fontManifest.body.name,
      weights: bodyWeights,
      cssVariable: fontManifest.body.cssVariable,
    },
    {
      provider: fontProviders.google(),
      name: fontManifest.heading.name,
      weights: headingWeights,
      cssVariable: fontManifest.heading.cssVariable,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".smrtlk.com"],
    },
  },
});
