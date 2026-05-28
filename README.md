# furiosadata.com — The Data Tools Network

Umbrella hub for the 8 Furiosa Studio web tools. Open datasets, free public APIs, and blog content that links out (dofollow) to every property in the portfolio.

## Stack
- Next.js 16 (App Router, Turbopack) + Tailwind v4
- TypeScript, fully static where possible (`force-static` on data pages)
- Deployed to Vercel

## Local dev
```bash
npm run dev    # http://localhost:3000
npm run build
npm start
```

## Routes

| Route | Description |
|---|---|
| `/` | Homepage — overview of all 8 tools and 4 datasets |
| `/tools` | Tool directory |
| `/tools/[slug]` | One page per tool with `WebSite` + `BreadcrumbList` JSON-LD |
| `/data/moon-phases-2025-2030` | Full moon dataset (`Dataset` schema, CSV + JSON downloads) |
| `/data/eclipses-2025-2035` | NASA-sourced eclipses dataset (`Dataset` + `Event` schema) |
| `/data/historical-epidemics` | 21 historical pandemics |
| `/data/football-scorers-europe` | All-time top scorers |
| `/blog` + `/blog/[slug]` | 5 articles (`Article` schema) |
| `/api/next-full-moon` | Public JSON, CORS open |
| `/api/next-eclipse` | Public JSON, CORS open |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | SEO/GEO infrastructure |

## SEO/GEO compliance (`~/Documents/sites-system/CLAUDE.md` rules 9–18)
- Canonical URLs match served URL, single host, no redirect
- Single sitemap source (`app/sitemap.ts`)
- Per-page schema: `Dataset`, `Event`, `Article`, `BreadcrumbList`, `ItemList`
- Publisher = **Furiosa Studio** everywhere (brand rule, non-negotiable)
- `llms.txt` at `/llms.txt`
- AI bots explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot)
- All datasets CC BY 4.0 with machine-readable downloads referenced via `distribution[]`

## Internal-linking snippet for the 8 portfolio sites

Once `furiosadata.com` is live, add this to the footer of each of the 8 sites. **Dofollow** — passes equity from each tool back to the hub; the hub already links dofollow to every tool.

```html
<!-- EN -->
<p style="font-size:.875rem;opacity:.7;margin-top:1rem;">
  Part of the <a href="https://furiosadata.com" rel="dofollow">Furiosa Data Tools Network</a> — open data and 8 free specialized tools by Furiosa Studio.
</p>

<!-- ES -->
<p style="font-size:.875rem;opacity:.7;margin-top:1rem;">
  Parte de la <a href="https://furiosadata.com" rel="dofollow">Red de Herramientas Furiosa Data</a> — datos abiertos y 8 herramientas gratuitas de Furiosa Studio.
</p>
```

### Per-site placement

| Site | Repo / file | Lang |
|---|---|---|
| top-scorers.com | `sites-system/sites/topscorer/index.html` footer | EN + ES |
| timezonematcher.com | `sites-system/sites/timezones/index.html` footer | EN |
| next-eclipse.com | `sites-system/sites/nexteclipse/` footer | EN |
| lunallena.co | `sites-system/sites/lunallena/index.html` footer | ES |
| nextfullmoon.co | `sites-system/sites/lunallena/` (multi-brand) footer | EN |
| plagueatlas.com | `sites-system/sites/plagueatlas/` + mirror `deathvault/` | EN |
| deathvault.app | mirror repo, replicate the same change | EN |
| fartrank.app | `sites-system/sites/FartRank/` footer | EN |

⚠️ Don't add until Miqui confirms — this is 8 separate commit+deploys.

## Deployment

```bash
vercel --prod
# In Vercel dashboard:
# 1. Project Settings → Domains → add furiosadata.com (apex) + www redirect (308)
# 2. Analytics → enable Web Analytics (free)
# 3. Wire GA4 in src/app/layout.tsx (placeholder present)
```

## Roadmap
- GA4 / Plausible wiring (placeholder in `app/layout.tsx`)
- OG image generator (`app/opengraph-image.tsx`)
- Per-eclipse pages (`/data/eclipses/2026-08-12`)
- 2 blog posts/week
- Internal-linking snippet rolled into each of the 8 portfolio sites
