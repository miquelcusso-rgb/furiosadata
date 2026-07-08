# furiosadata.com — Prioritized Action Plan

Health score today: **88/100**. Already a well-wired knowledge-graph hub node. No critical/indexing blockers. The list below is sequenced by impact-vs-effort. (Analysis only — nothing applied.)

## Phase 1 — Quick wins (Week 1)
1. **Security headers** in `next.config.ts` `headers()`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `X-Frame-Options: SAMEORIGIN`, CSP (report-only first). *[High, ~15 min]*
2. **Enrich `Organization` JSON-LD**: add `logo` (ImageObject), `knowsAbout` (topical domains), optional `foundingDate`. *[Medium, ~10 min]*
3. **`/tools` `ItemList`**: add `numberOfItems` and make `item` self-referential to `/tools/<slug>`. *[Medium, ~10 min]*
4. **Home JSON-LD**: add `WebSite.potentialAction` SearchAction + an `ItemList` of the 9 satellites. *[Low, ~20 min]*

## Phase 2 — High-impact (Weeks 2–3)
5. **Thicken `/tools/<slug>` pages**: 2–3 unique citable sentences per satellite + optional FAQ (FAQPage schema). Turns thin catalog stubs into rankable/citable entity pages. *[High, ~1–2 h]*
6. **Verify reciprocal graph wiring**: confirm each satellite's `Organization.sameAs`/`isPartOf` points back to furiosadata.com; fix any that don't. *[High, per-site task]*

## Phase 3 — Authority & distinctiveness (Month 2)
7. **Per-entity OG images** (dynamic `next/og` template) for tool + dataset pages. *[Medium]*
8. **Map tool `@type`** to `SoftwareApplication`/`WebApplication` where accurate. *[Low]*
9. **Sustain blog cadence** — each post adds topical internal links into the spokes. *[Low, ongoing]*

## Phase 4 — Monitoring (ongoing)
10. GSC: confirm sitemap accepted, watch indexation of /tools/* and /data/*.
11. Track AI-engine citations of the open datasets (the highest-value citability asset).
12. Re-run this audit after Phase 1–2.

## Protocol reminder (per CLAUDE.md)
On applying any change: update `tools/mywebgent/seo-status.json` + `CHANGELOG.md` entry; if it moves a status band, commit/push mywebgent.
