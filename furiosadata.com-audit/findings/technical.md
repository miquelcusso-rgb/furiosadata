# Technical SEO — furiosadata.com

**Score: 90/100**

## What works
- HTTPS, HTTP/2, valid TLS, `strict-transport-security: max-age=63072000` (2y HSTS).
- Served from Vercel edge, `x-vercel-cache: HIT` on home — fast TTFB, static (`force-static`) pages.
- `robots.txt` clean: `Allow: /`, only `/api/private/` disallowed, explicit allow rules for GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot, `Host` + `Sitemap` directives present.
- `sitemap.xml` valid, complete (home, /tools, /blog, 10 tool pages, 4 datasets, 5 blog posts), lastmod/changefreq/priority set sensibly.
- Canonicals correct everywhere. Root canonical hand-injected as `https://furiosadata.com/` to dodge the Next.js trailing-slash strip — well handled. Sub-pages use relative `alternates.canonical`.
- `lang="en"` on `<html>`. 404 handled (`not-found.tsx`).
- All sampled live URLs return 200 (home, /tools/top-scorers, /blog/...).

## Findings
| Severity | Finding | Recommendation |
|---|---|---|
| High | No security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). `next.config.ts` has no `headers()`. | Add a `headers()` block. Start CSP in report-only. |
| Low | `cache-control: public, max-age=0, must-revalidate` on home — fine for ISR but no s-maxage hint; Vercel CDN caches anyway (HIT observed). | Optional: tune for longer edge TTL on truly static routes. |
| Info | No `hreflang`. Hub is EN-only; satellites carry their own ES/EN. Acceptable for the hub. | No action. |
