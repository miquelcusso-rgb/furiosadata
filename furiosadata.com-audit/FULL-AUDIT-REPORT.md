# Furiosadata.com — Full SEO Audit

**Date:** 2026-06-27
**Auditor:** Furiosa Studio SEO session (claude-seo skill)
**Type:** Hub / knowledge-graph node (hub-and-spoke) — Next.js 16, Vercel
**Scope:** Technical, On-page, Schema, GEO, Internal linking, Content. Analysis only — no code changed.

## Executive Summary

**SEO Health Score: 88 / 100 — Strong.**

furiosadata.com is well-built and **correctly wired as the central node of the hub-and-spoke knowledge graph**. The `Organization.sameAs` array is complete (X + all 9 satellite tool sites + Modelo Zero media + its YouTube channel = 12 entities), every satellite has a dedicated `/tools/<slug>` page with `WebSite` + `BreadcrumbList` schema and an outbound link, datasets carry valid `Dataset` schema with CC BY 4.0 license, and the GEO layer (robots AI-bot allow-list, llms.txt, citable datasets/APIs) is exemplary. The site does its job as an authority + internal-linking + cataloguing node.

The gaps are refinements, not blockers: no security headers, a few schema enrichments that would deepen the graph, and a content-thinness risk on the `/tools/<slug>` pages.

### Category scores
| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 90 |
| Content Quality | 23% | 82 |
| On-Page SEO | 20% | 92 |
| Schema / Structured Data | 10% | 90 |
| Performance (CWV) | 10% | 90 (lab/infra-inferred) |
| AI Search Readiness (GEO) | 10% | 95 |
| Images | 5% | 80 |

### Top 5 critical/high issues
1. **[High] No security/hardening HTTP headers.** Live response lacks CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. HSTS is present (good). Minor trust/quality signal; easy win via `next.config.ts` headers().
2. **[High] `/tools/<slug>` pages are thin.** Each is ~3 short paragraphs (tagline + description) + an outbound link + related list. As the canonical hub catalog entry for each satellite this is the page expected to *describe and contextualise* the satellite for generative engines — currently too light to be cited or to rank for the satellite's brand/topic.
3. **[High] No knowledge-graph back-reference from satellites verified here.** The hub `sameAs` points out to 9 satellites, but the node is only fully "wired" if each satellite's `Organization.sameAs` / `isPartOf` points *back* to furiosadata.com. Confirm and (if missing) add reciprocal links — this is what makes the cluster legible as one entity.
4. **[Medium→High] Org schema missing `logo`, `founder`/`foundingDate`, `description` is good but no `knowsAbout`.** Adding `logo` (ImageObject) and `knowsAbout` (the topical domains) materially strengthens entity recognition for AI/Knowledge Graph.
5. **[Medium] Tool/data pages reuse a single generic OG image.** Every `/tools/<slug>` and dataset shares `og-default.png`. Per-entity OG images improve social/AI card distinctiveness.

### Top 5 quick wins
1. Add `headers()` to `next.config.ts` (CSP report-only + X-Content-Type-Options + Referrer-Policy + Permissions-Policy). ~15 min, lifts Technical score.
2. Add `logo` + `knowsAbout` to the homepage `Organization` JSON-LD. ~10 min, strengthens the node.
3. Add `numberOfItems` to the `/tools` `ItemList` and convert each `ListItem.item` to reference the canonical `/tools/<slug>` hub URL (not just the external URL) so the catalog is self-referential. ~10 min.
4. Expand each `/tools/<slug>` page with 2–3 sentences of unique, citable context per satellite (what it answers, who it's for, key data source). ~1–2 h, fixes the thin-content/citability gap.
5. Add `WebSite` + `SearchAction` (sitelinks search) and an `ItemList` of satellites to the homepage JSON-LD so the home page itself advertises the spoke set. ~20 min.

See `findings/` for per-category detail and `ACTION-PLAN.md` for the sequenced plan.
