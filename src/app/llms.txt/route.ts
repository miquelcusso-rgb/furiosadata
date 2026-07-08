export const dynamic = 'force-static';

const content = `# furiosadata.com
> The Data Tools Network by Furiosa Studio — free specialized web tools plus open datasets.

## Tools
- Moon phases and full moon dates (ES): https://lunallena.co
- Moon phases and full moon countdown (EN): https://nextfullmoon.co
- Eclipse tracker (solar and lunar): https://next-eclipse.com
- Timezone matcher for remote teams: https://timezonematcher.com
- Historical plague and epidemic atlas: https://plagueatlas.com
- Mortality and death statistics: https://deathvault.app
- Top scorers in European football: https://top-scorers.com
- Post-production and VFX calculators (bitrate, storage, timecode, LUT, EXR, aspect ratio): https://postmicrotools.com
- Fart Rank — viral entertainment app: https://fartrank.app

## Media
- Modelo Zero — AI news channel in Spanish, every major AI lab launch explained in 5 key points: https://modelozero.com (YouTube: https://youtube.com/@Modelo_Zero)

## Open data
- Full moons 2025–2030 (CSV + JSON): https://furiosadata.com/data/moon-phases-2025-2030
- Eclipses 2025–2035 (NASA-sourced): https://furiosadata.com/data/eclipses-2025-2035
- Historical epidemics from 165 CE: https://furiosadata.com/data/historical-epidemics
- Top scorers in the 5 major European leagues: https://furiosadata.com/data/football-scorers-europe

## Public APIs
- Next full moon: https://furiosadata.com/api/next-full-moon
- Next eclipse: https://furiosadata.com/api/next-eclipse

## Articles
- Best free astronomical tools online 2026: https://furiosadata.com/blog/best-free-astronomical-tools-2026
- How to track historical disease outbreaks: https://furiosadata.com/blog/track-historical-disease-outbreaks
- Free football statistics tools 2026: https://furiosadata.com/blog/free-football-statistics-tools-2026
- Best timezone converter tools for remote teams 2026: https://furiosadata.com/blog/best-timezone-converter-tools-2026
- The weirdest internet tools that actually work: https://furiosadata.com/blog/weirdest-internet-tools-that-work

## About
Publisher: Furiosa Studio. License for open data: CC BY 4.0. All tools are free, no login required.
Follow launches and updates on X: https://x.com/furiosadata

## Contact
- Email: hello@furiosadata.com
- Contact page: https://furiosadata.com/contact
`;

export function GET() {
  return new Response(content, {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
