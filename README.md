# Katara Suites Salalah — website

Bilingual (English / العربية) static site for **Katara Suites Salalah** (أجنحة كتارا صلالة), furnished
holiday suites in Al Wadi, Salalah, just east of Salalah Gardens Mall. Built with Astro 5, hosted on
GitHub Pages, no backend: every "Enquire" button opens WhatsApp with a structured message.

Live: **https://jeeveshverma.github.io/katara-suites-salalah/** · Arabic: `/ar/`

## What the site shows (and what it deliberately does not)

Only facts the property already publishes: the Google Maps listing (name, plus code 23C9+F3Q,
phone +968 9147 7727, the photos, the review lines) and the Booking.com listing (free parking,
free Wi‑Fi, recently renovated). The Google score (4.5 from 17) and the Booking.com score (9.1 from
16) are shown, as of 2026-10-22 (`SITE.scores`). **No prices, unit counts or check-in times.**

**From the owner (WhatsApp feedback, 2026-10-22):** the four unit types — suite (two bedrooms,
sitting room, kitchen, two bathrooms), one-bedroom apartment, studio (room, living area, bathroom)
and deluxe room (room, kitchenette, bathroom) — and the suites intro and "Salalah from here"
paragraphs in Arabic; stays are by the night or the month only; Instagram is @katara.suites;
29 photos are the owner's own (`src/assets/photos/`, catalogued in `src/data/photos.ts`).

**Provisional until the owner confirms:**
- Which photo shows which unit type (`ROOMS` in `src/data/site.ts`) is read from the photos.
- Four photos (`double-bed`, `living-art`, `kitchen`, `bathroom`) are still the listing's Google
  Maps photos.
- There was no website and no domain for the property on 2026-10-22, so it lives on GitHub Pages.

## Where things live

| What | Where |
|---|---|
| Facts: name, phone, WhatsApp number, pin, scores | `src/data/site.ts` |
| Unit types, their amenities and which photos belong to each | `src/data/site.ts` (`ROOMS`) |
| Photo catalogue: group, alt text EN/AR, captions | `src/data/photos.ts` |
| Landmarks with coordinates (distances are computed) | `src/data/places.ts` |
| Google review lines (verbatim) | `src/data/reviews.ts` |
| All wording, per language | `src/i18n/en.json`, `src/i18n/ar.json` |
| Pages | `src/views/*.astro`, routed by `src/pages/[...path].astro` |
| Components (hero, filmstrip, reviews, map, form…) | `src/components/` |
| Design tokens | `src/styles/global.css` (`:root`) |
| Photos (masters) | `src/assets/photos/*.jpg` |

Wording uses `t('key')` from `useT(lang)`; a missing Arabic string falls back to English.

## Editing

- **Change a fact** (phone, WhatsApp number, scores): edit `src/data/site.ts`.
- **Change wording**: edit the key in both `en.json` and `ar.json`.
- **Add a photo**: drop the JPG in `src/assets/photos/`, add an entry to `src/data/photos.ts`
  (group + alt text in both languages), then reference its id in `ROOMS` or a page.
- **Replace the placeholders**: when the owner sends originals (WhatsApp → share as *Document* to
  keep quality), save them under the same file names and rebuild.
- **Add a landmark**: `src/data/places.ts` with its Google Maps coordinates; distance, bearing and
  minutes are computed at build time. If its map label collides, set `lbl`.
- **Prices or times, if the owner ever wants them public**: add fields to `ROOMS` / `SITE` and
  render them in `src/views/Room.astro`.

Share image and icons: `node scripts/og.mjs` → `public/og-image.jpg`, `public/apple-touch-icon.png`.

## Run locally

```
npm install
npm run dev        # http://127.0.0.1:4321/katara-suites-salalah/
npm run build      # → dist/
```

QA helpers (dev or preview server running): `node scripts/qa.mjs audit / /ar/ /rooms/ --width 390`
(overflow, broken images, console errors, tap targets, alt text) and
`node scripts/qa.mjs shots /ar/ 390 work/shots/ar --device iphone` (page screenshots);
`node scripts/shot-el.mjs /salalah/ .citymap 1440 out.png` (one element).

## Deploy

`scripts/deploy.sh` builds the site and force-pushes `dist/` to the `gh-pages` branch, which
GitHub Pages serves (Settings → Pages → source: branch `gh-pages`, `/`). The repo is on the
personal `jeeveshverma` account: `gh auth switch -u jeeveshverma` before pushing or deploying,
and switch back after. The site lives under the `/katara-suites-salalah` base path.

A GitHub Actions workflow is parked in `deploy/github-actions-pages.yml` (it needs a token with
the `workflow` scope).

**Custom domain later**: set `site` in `astro.config.mjs` and `url` in `src/data/site.ts`,
remove `base`, add `public/CNAME` with the domain, then point DNS at GitHub Pages
(`A` records 185.199.108.153 / .109 / .110 / .111 for `@`, `CNAME www → jeeveshverma.github.io`)
and add the domain under Settings → Pages.

## Owner checklist (optional, none blocks the site)

Original photos (and more of them: the listing has 44) · an exterior photo · confirm the suite
layouts and whether every suite has a full kitchen · confirm the WhatsApp number · a logo if
there is one · attach the site URL to the Google Business Profile.
