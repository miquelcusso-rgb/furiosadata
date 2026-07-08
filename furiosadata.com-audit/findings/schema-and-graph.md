# Schema, GEO & Knowledge-Graph Wiring — furiosadata.com

**Schema score: 90/100 · GEO score: 95/100**

## Hub-as-node assessment: WELL WIRED (with enrichment headroom)

The core hub-and-spoke contract is satisfied:
- **Homepage `Organization.sameAs`** = 12 entities: `x.com/furiosadata` + all 9 satellite tool domains (top-scorers, timezonematcher, next-eclipse, lunallena, nextfullmoon, plagueatlas, deathvault, postmicrotools, fartrank) + `modelozero.com` + `youtube.com/@Modelo_Zero`. **Complete and matches `src/lib/sites.ts` + llms.txt.**
- **Homepage `WebSite`** schema present (name/url/publisher).
- **`/tools` index** emits `ItemList` with each satellite as a `ListItem` (`position`, `item` = WebSite name/url/description). Good catalog signal.
- **`/tools/<slug>`** emits `WebSite` (with `inLanguage`, publisher→Organization) + `BreadcrumbList`. Each links out to the satellite and to same-category siblings.
- **Datasets** (`/data/*`) emit valid `Dataset` schema: `creator`/`publisher` = Furiosa Studio, `license` = CC BY 4.0, `isAccessibleForFree: true`, `distribution` with CSV + JSON `DataDownload`. Excellent — directly citable by AI engines.
- **Blog posts** emit `Article` (author/publisher = Organization, `mainEntityOfPage`, logo ImageObject).

## GEO (AI search readiness) — excellent
- `llms.txt` (dynamic route) is rich: tagline, all 9 tools w/ one-line descriptions, Modelo Zero media, 4 open datasets, 2 public APIs, 5 articles, publisher + CC BY 4.0 license + X link. This is a model llms.txt.
- AI bots explicitly allowed in robots.
- Public JSON APIs (`/api/next-full-moon`, `/api/next-eclipse`) + downloadable CSV/JSON datasets = high citability surface.
- Datasets present concrete, attributable facts (NASA Goddard, RSSSF, death-toll ranges) — strong for citation.

## Findings
| Severity | Finding | Recommendation |
|---|---|---|
| High | Reciprocal wiring unverified: hub `sameAs`→satellites is present, but satellites must point back (`Organization.sameAs` incl. furiosadata.com, or `isPartOf`). Without back-refs the cluster isn't fully legible as one entity. | Audit each satellite's JSON-LD; ensure furiosadata.com is in their `sameAs`. (Separate task per site.) |
| Medium | `Organization` lacks `logo`, `knowsAbout`, `foundingDate`. | Add `logo` (ImageObject, 112x112+), `knowsAbout: ['astronomy','football statistics','time zones','epidemiology','post-production','VFX']`. |
| Medium | `/tools` `ItemList` `item` references the *external* satellite URL only; the hub catalog entries (`/tools/<slug>`) aren't the linked entity. | Make `ItemList` self-referential (item url = `/tools/<slug>`), and add `numberOfItems`. |
| Low | Homepage has no `ItemList`/`CollectionPage` advertising the spoke set, nor `WebSite` `potentialAction` SearchAction. | Add an `ItemList` of the 9 satellites + a `SearchAction` to the home JSON-LD. |
| Low | Tool pages type satellites as `WebSite`; `SoftwareApplication`/`WebApplication` would be more accurate for the interactive tools and unlocks richer results. | Consider per-tool `@type` mapping. |
