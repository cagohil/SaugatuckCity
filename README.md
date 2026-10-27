# City of Saugatuck — redesign

A Next.js 16 redesign of https://www.saugatuckcity.com, built with the city's own content and photography.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Static export (any static host): `STATIC_EXPORT=1 npm run build` → `out/`.

Deploy: push to GitHub and import the repo in Vercel (framework auto-detected), or run `npx vercel`.

## What's inside

- `lib/content.ts` — every piece of scraped content (parks, fares, passes, history, departments, documents, boards). Edit copy here.
- `app/` — routes: `/`, `/parks`, `/parks/[slug]` (14 parks, statically generated), `/visit`, `/history`, `/city-hall`.
- `components/home/*` — the home page scenes: hero with live Saugatuck time + weather (Open-Meteo, no key), scroll-revealed intro, hover accordion of shorelines, Mt. Baldhead 303-step climb, hand-cranked Chain Ferry crossing, pinned horizontal parks rail, parallax gallery, City Hall history, resident hub, marquee.
- `components/*` — Lenis smooth scroll, preloader, page-wipe transitions, magnetic buttons, custom cursor, split-text reveals, lightbox, open/closed City Hall status.

Photos are loaded from the city's upload folder (`saugatuckcity.com/uploads/...`), as the city states its images are used with permission. For production, download them into `public/` and update `U` in `lib/content.ts` so the site doesn't depend on the old host.

All motion respects `prefers-reduced-motion`.
