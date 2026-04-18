# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This repo contains three independent Astro site templates (`template-one/`, `template-two/`, `template-three/`). They start out identical; a change must be made in each template directory that needs it.

## Scope — what you do and don't touch

**Don't touch `astro.config.mjs`.** Fonts, adapter, and Vite plugins are wired up and derived from the manifest/config files described below. Do not add integrations or reshape the config.

**Don't deploy, run, or configure Cloudflare / wrangler.** No `wrangler deploy`, no `wrangler.toml` edits, no provisioning of KV/Images bindings, no Pages dashboard changes. Deployment is out of scope.

## Fonts — `src/theme/font-manifest.json`

Fonts are managed **only** through this manifest. It defines the Google fonts used for `body` and `heading`, their weights, fallbacks, and the CSS variables they expose (`--font-provider-body`, `--font-provider-heading`). Astro self-hosts them at build time.

To change fonts: edit the manifest. Do not edit `astro.config.mjs`, do not import fonts manually, do not add `<link>` tags, do not reference Google Fonts URLs in CSS.

## Theme — `src/theme/theme.css`

All design tokens live in the `@theme { … }` block: colors, fonts, type scale, radii, shadows. Tailwind v4 auto-generates utility classes from each token (`--color-brand` → `bg-brand text-brand border-brand`, `--radius-md` → `rounded-md`, etc.).

Restyling the site = editing `theme.css`. Add a new token here if you genuinely need one; prefer reusing existing tokens first. Font tokens (`--font-heading`, `--font-body`) must stay pointed at the `--font-provider-*` variables — don't inline font stacks.

## Components and pages — only use theme tokens

When building or editing components and pages, **use only the utility classes generated from `theme.css` tokens.** Never hardcode colors, font families, type sizes, radii, or shadows.

- ✅ `bg-brand`, `text-text-soft`, `border-border`, `rounded-md`, `shadow-sm`, `text-lg`, `font-heading`
- ❌ `bg-blue-600`, `text-gray-500`, `text-[#2563eb]`, `rounded-[10px]`, inline `style="color: …"`, arbitrary Tailwind color palette classes

If a component seems to need a value that isn't in the theme, the answer is to add a token to `theme.css` — not to hardcode the value in the component.

## Commands

Run from inside a template directory:

- `pnpm install` — install dependencies
- `pnpm dev` — dev server at http://localhost:4321
- `pnpm build` — production build to `./dist/`

Requires Node ≥ 22.12 (Astro 6). Use `nvm use 22` if the system default is older.
