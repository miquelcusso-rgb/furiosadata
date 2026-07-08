# On-Page, Content & Internal Linking — furiosadata.com

**On-page: 92 · Content: 82 · (Images: 80)**

## On-page — strong
- Title template `%s · Furiosa Data`, default `Furiosa Data — The Data Tools Network`. Unique titles per route via `generateMetadata`. Home title verified live (54 chars, good).
- Meta description present and descriptive on home (verified live); per-tool descriptions pulled from `sites.ts`; per-blog descriptions set.
- Exactly one `<h1>` per page; logical `h2` structure (tools/datasets sections on home, leagues on data pages).
- OpenGraph + Twitter card complete (`summary_large_image`, `@furiosadata` site+creator). `DEFAULT_OG_IMAGES` correctly re-spread on routes that override `openGraph` (the documented Next.js footgun is handled).
- `og-default.png` verified 1200x630 — correct dimensions.

## Internal linking — good, the node connects
- Global header: Tools / Data / Blog. Footer: X, llms.txt, sitemap.
- Home links to all 9 `/tools/<slug>` + 4 datasets.
- `/tools/<slug>` links out to satellite + same-category siblings (related cluster).
- Data pages cross-link to the matching tool page + the live satellite (e.g. football dataset → /tools/top-scorers + top-scorers.com).
- Blog posts deep-link to satellites and datasets with topical anchors (verified in `best-free-astronomical-tools-2026`).
Anchors are topical (good), not "click here".

## Findings
| Severity | Finding | Recommendation |
|---|---|---|
| High | `/tools/<slug>` pages are thin: tagline + 1 description sentence + CTA + related. As the hub's canonical entry for each satellite, too light to rank or be cited. | Add 2–3 unique sentences per tool: what question it answers, who it's for, data source/coverage, a key stat. Optionally a 2–3 item FAQ w/ FAQPage schema. |
| Medium | Single shared OG image across all tool/data pages. | Generate per-entity OG images (or templated dynamic OG via `next/og`). |
| Low | Home `h1` "Open datasets and free web tools by Furiosa Studio" is brand-led; could fold in a head term ("data tools"). | Minor copy tweak; current is acceptable. |
| Low | Blog has 5 posts; healthy cadence would compound hub authority and create more internal-link surface to satellites. | Continue ~1 post/topic-cluster cadence. |
| Info | No images with missing alt (site is near-imageless; icons are inline SVG, decorative). | No action. |
