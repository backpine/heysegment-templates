#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const METADATA_URL = "https://fonts.google.com/metadata/fonts";
const OUTPUT_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "google-fonts.txt",
);

const res = await fetch(METADATA_URL);
if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);

// Google prefixes the JSON with `)]}'` to defeat JSON hijacking — strip it.
const raw = await res.text();
const json = JSON.parse(raw.replace(/^\)]\}'\s*/, ""));

const families = json.familyMetadataList
  .map((f) => ({ family: f.family, popularity: f.popularity }))
  .sort((a, b) => a.popularity - b.popularity);

const lines = families.map(
  (f, i) => `${String(i + 1).padStart(4, " ")}. ${f.family}`,
);

await writeFile(OUTPUT_PATH, lines.join("\n") + "\n", "utf8");
console.log(`Wrote ${families.length} fonts to ${OUTPUT_PATH}`);
