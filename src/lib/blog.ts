export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readMinutes: number;
  tags: string[];
  body: string; // simple paragraphs + headings; renderer below supports ## h2, - lists, and links
  related: string[]; // related tool slugs
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-free-astronomical-tools-2026',
    title: 'The best free astronomical tools online in 2026',
    description:
      'A curated guide to the most useful free astronomy tools on the web — full moon trackers, eclipse calculators, sky maps and open datasets.',
    date: '2026-05-28',
    readMinutes: 6,
    tags: ['astronomy', 'tools', 'moon', 'eclipses'],
    related: ['lunallena', 'nextfullmoon', 'next-eclipse'],
    body: `Most "best astronomy apps" lists push the same five paid mobile apps. The web has quietly become better for everyday questions like "when is the next full moon?" or "where will the eclipse pass?" — and most of the best tools are free.

## Why the web beats the app store for astronomy
The questions you ask about the sky are rarely "explore the universe in 3D". They are: a date, a time, a place. Web tools answer those in one second without a 200 MB install.

## Full moon calendars
For a Spanish-speaking audience, [Luna Llena](https://lunallena.co) gives a clean calendar of every full moon for the current year with traditional names. The English-language [Next Full Moon](https://nextfullmoon.co) ships a live countdown to the next event and flags supermoons. If you need the full table, our open dataset of [full moons 2025–2030](/data/moon-phases-2025-2030) is downloadable as CSV or JSON.

## Eclipse tracking
[Next Eclipse](https://next-eclipse.com) tracks the next solar and lunar eclipses with visibility maps. For the underlying data — every eclipse from 2025 to 2035 — see our [eclipses dataset](/data/eclipses-2025-2035), built from NASA Goddard records.

## Sky maps and identification
Stellarium Web is the gold standard if you want to see what's in the sky right now from your location. It runs in the browser, no install, no signup.

## Open datasets you can build on
If you're a developer building anything sky-related, our public API endpoints return JSON for the next full moon and next eclipse — see [/api/next-full-moon](/api/next-full-moon) and [/api/next-eclipse](/api/next-eclipse). No key required.

## The shortlist
- **Next full moon**: [nextfullmoon.co](https://nextfullmoon.co) (EN) or [lunallena.co](https://lunallena.co) (ES)
- **Next eclipse**: [next-eclipse.com](https://next-eclipse.com)
- **Live sky map**: Stellarium Web
- **Raw data**: [furiosadata.com/data](/data/moon-phases-2025-2030)

All of the Furiosa Studio tools above are free with no account required.`,
  },
  {
    slug: 'track-historical-disease-outbreaks',
    title: 'How to track historical disease outbreaks: tools and data',
    description:
      'A practical guide to researching historical epidemics — the best open data sources, visualisation tools and where to find primary records.',
    date: '2026-05-28',
    readMinutes: 7,
    tags: ['epidemiology', 'history', 'research', 'data'],
    related: ['plagueatlas', 'deathvault'],
    body: `Researching historical epidemics is a strange problem: the data exists, but it is scattered across academic papers, WHO PDFs, Wikipedia, and country health ministries with mismatched definitions.

## Start with a structured timeline
Before opening any tool, you want a calibrated mental model. Our [historical epidemics dataset](/data/historical-epidemics) lists 21 major pandemics from the Antonine Plague (165 CE) to COVID-19 with estimated death-toll ranges. Use this to anchor the era you're researching.

## Visual atlases
[Plague Atlas](https://plagueatlas.com) maps major historical outbreaks geographically and chronologically — useful for spotting patterns across centuries (trade routes, climate events, war).

## Mortality context
Historical death tolls only make sense relative to baseline mortality. [Death Vault](https://deathvault.app) presents life-expectancy and cause-of-death data in a readable format for general audiences.

## Primary sources
- **WHO Disease Outbreak News** (1996–present): authoritative for modern outbreaks.
- **CDC MMWR**: weekly mortality and morbidity reports back to 1952.
- **Our World in Data — Pandemics**: the best free explorable dashboard.
- **JSTOR + Wikipedia citation chains**: for pre-20th-century events, Wikipedia's references are surprisingly thorough — follow them to the originals.

## Be skeptical of single numbers
For events like the Black Death, mortality estimates range from 75 million to 200 million. That isn't bad data — it's honest uncertainty. Our dataset shows both bounds so you can cite the range rather than a false-precision midpoint.

## Build on the data
The dataset is available as [CSV](/data/historical-epidemics/epidemics.csv) and [JSON](/data/historical-epidemics/epidemics.json) under CC BY 4.0. Use it in your own visualisations, classroom materials or research.`,
  },
  {
    slug: 'free-football-statistics-tools-2026',
    title: 'Free football statistics tools: the complete guide 2026',
    description:
      'The best free tools and datasets for football fans, fantasy managers and analysts in 2026 — from live top scorers to historical archives.',
    date: '2026-05-28',
    readMinutes: 6,
    tags: ['football', 'soccer', 'stats', 'fantasy'],
    related: ['top-scorers'],
    body: `Paid platforms like Opta and Wyscout own the elite analytics market. But for the average fan, fantasy manager or hobbyist analyst, the free tier of the web has never been better.

## Live top scorers
The fastest answer to "who's top scorer of the Premier League right now?" is [Top Scorers](https://top-scorers.com), which tracks live leaderboards across the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, the Champions League and the European Golden Shoe race.

## All-time records
For historical context, our [top scorers open dataset](/data/football-scorers-europe) lists the all-time leaders in each of the five major European leagues. Useful for context when a player is "chasing the record": you can see exactly where they stand.

## League pages
- **Premier League**: official site has match data back to 1992.
- **La Liga**: official LaLiga app for live data.
- **Serie A, Bundesliga, Ligue 1**: each league has an official stats portal with goals, assists, and minutes.

## Aggregators (free tier)
- **FBref**: the best free site for advanced stats (xG, progressive passes). Sources from StatsBomb.
- **Transfermarkt**: market values, transfer history, contract dates.
- **SofaScore**: live in-match stats with heatmaps.

## For fantasy managers
Use a top-scorer leaderboard to spot early-season hot streaks, and FBref's xG data to filter out lucky finishers. The combination beats most paid newsletters.

## Open data
If you're building something yourself, the [scorers dataset](/data/football-scorers-europe/scorers.json) is free under CC BY 4.0. Combine with the open-source StatsBomb releases for a serious free stack.`,
  },
  {
    slug: 'best-timezone-converter-tools-2026',
    title: 'Best timezone converter tools for remote teams in 2026',
    description:
      'A no-nonsense comparison of the best free timezone tools for distributed teams in 2026 — from quick conversions to recurring meeting planners.',
    date: '2026-05-28',
    readMinutes: 5,
    tags: ['productivity', 'remote work', 'timezones'],
    related: ['timezonematcher'],
    body: `Every remote team eventually loses 30 minutes to a meeting nobody can actually attend. The fix isn't a 50-feature productivity suite — it's one good timezone tool you actually use.

## The three things a timezone tool needs to do
1. **Compare multiple cities side by side** with working hours highlighted.
2. **Share a meeting link** that auto-adjusts to each viewer's zone.
3. **Be fast** — under one second from open to answer.

That's it. Anything else is bloat.

## The recommendation
[Timezone Matcher](https://timezonematcher.com) is built exactly to that spec. Add the cities your team works from, drag the time slider, and share the resulting link. No signup, no calendar permission requests, no upsell to a paid plan.

## Alternatives
- **World Time Buddy**: the original, still solid but ad-heavy on the free tier.
- **Every Time Zone**: clean visualisation, weaker for meeting links.
- **Google Calendar's "world clock"**: built in if you already live in Calendar, but only secondary time zones.

## For asynchronous teams
The bigger unlock for fully-async teams isn't a timezone tool — it's removing meetings entirely. But for the meetings you can't remove, picking the time fairly (rotating who takes the bad slot) matters more than the tool.

## For developers
If you're building any tool that shows time-of-day across geographies, treat timezone correctness as a first-class concern. Use IANA zone identifiers (\`Europe/Madrid\`), not UTC offsets, because of DST.`,
  },
  {
    slug: 'weirdest-internet-tools-that-work',
    title: 'The weirdest internet tools that actually work (and go viral)',
    description:
      'A tour through the strangest niche tools on the web in 2026 — tools nobody asked for, that somehow became indispensable.',
    date: '2026-05-28',
    readMinutes: 5,
    tags: ['internet', 'viral', 'weird web'],
    related: ['fartrank', 'plagueatlas', 'deathvault', 'top-scorers'],
    body: `The best part of the internet is still the part that doesn't make sense. A site that does exactly one absurd thing very well will outlast ten productivity apps.

## The rule of one job, done seriously
The pattern is consistent: pick a topic that sounds like a joke, then build it with real engineering care. The contrast is what makes it work.

## Examples
- **[Fart Rank](https://fartrank.app)** — a scoring system for a universal human experience, presented with the sincerity of a sports stats site. The tagline says it best: "a serious app for a ridiculous problem".
- **[Plague Atlas](https://plagueatlas.com)** — historical pandemics mapped with the rigor of a research tool, not the lurid framing you'd expect.
- **[Death Vault](https://deathvault.app)** — mortality statistics presented for general audiences without doomerism.
- **[Top Scorers](https://top-scorers.com)** — football leaderboards with no clutter, just numbers. The most "normal" of the list, until you realise how rare clean stats sites are.
- **What3Words**, **The Useless Web**, **Pointer Pointer**, **Wiby**: the canonical weird-web shortlist.

## Why they go viral
They are shareable in one screenshot. The premise is the joke; the execution is the punchline. People share them not because they're useful (some are, some aren't) but because they restore the feeling that the web can still surprise you.

## Build your own
The recipe: pick a topic friends laugh about when you mention it, then build something for it that you'd be embarrassed to ship if you didn't care. Treat the topic seriously even when nobody else does.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Tiny renderer: ## heading, - list, paragraphs, [text](url) links.
export function renderBody(md: string): string {
  const blocks = md.trim().split(/\n\n+/);
  const html: string[] = [];
  for (const block of blocks) {
    if (block.startsWith('## ')) {
      html.push(`<h2>${escapeHtml(block.slice(3))}</h2>`);
    } else if (block.split('\n').every((l) => l.startsWith('- '))) {
      const items = block
        .split('\n')
        .map((l) => `<li>${inline(l.slice(2))}</li>`)
        .join('');
      html.push(`<ul>${items}</ul>`);
    } else {
      html.push(`<p>${inline(block)}</p>`);
    }
  }
  return html.join('\n');
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inline(s: string): string {
  // links [text](url)
  const linked = escapeHtml(s).replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>',
  );
  // bold **text**
  return linked.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
