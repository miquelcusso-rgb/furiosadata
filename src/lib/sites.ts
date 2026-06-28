export type Site = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  /**
   * 2–3 self-contained, citable sentences about the tool. Rendered as visible
   * prose on /tools/[slug] so generative engines (ChatGPT, Perplexity, Gemini,
   * Google AI Overviews) can extract standalone facts. Each sentence must make
   * sense on its own, out of context.
   */
  details: string[];
  category: 'Astronomy' | 'Sports' | 'Productivity' | 'Research' | 'Entertainment' | 'Post & VFX' | 'AI';
  lang: string;
};

export const SITES: Site[] = [
  {
    slug: 'top-scorers',
    name: 'Top Scorers',
    url: 'https://top-scorers.com',
    tagline: 'Top goalscorers across European football',
    description:
      'Live and historical top scorers for the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Champions League and the European Golden Shoe race.',
    details: [
      'Top Scorers tracks the leading goalscorers across the five major European leagues — the Premier League, La Liga, Serie A, Bundesliga and Ligue 1 — plus the UEFA Champions League.',
      'It also follows the European Golden Shoe race, which weights each goal by the strength of the league to crown the continent’s top scorer of the season.',
      'All goalscoring data is kept current for the live season and is free to browse, with no account required.',
    ],
    category: 'Sports',
    lang: 'EN/ES',
  },
  {
    slug: 'timezonematcher',
    name: 'Timezone Matcher',
    url: 'https://timezonematcher.com',
    tagline: 'Find the perfect meeting time across time zones',
    description:
      'A clean timezone converter and world clock for distributed teams. Compare multiple cities side-by-side and share meeting links in one click.',
    details: [
      'Timezone Matcher is a free world clock and meeting planner that compares multiple cities side by side to reveal the working hours they share.',
      'It generates a shareable meeting link in a single click, so distributed teams can agree on a time without back-and-forth emails.',
      'The tool runs entirely in the browser, needs no signup, and adjusts automatically for daylight saving time.',
    ],
    category: 'Productivity',
    lang: 'EN',
  },
  {
    slug: 'next-eclipse',
    name: 'Next Eclipse',
    url: 'https://next-eclipse.com',
    tagline: 'When and where is the next eclipse?',
    description:
      'Solar and lunar eclipse tracker with countdowns, visibility maps and historical context. Datasets sourced from NASA Goddard.',
    details: [
      'Next Eclipse is a solar and lunar eclipse tracker with a live countdown to the next event, visibility maps and historical context.',
      'Its eclipse datasets are sourced from NASA’s Goddard Space Flight Center, the reference catalogue for eclipse predictions.',
      'Each eclipse page lists the exact date, the type (total, partial, annular or penumbral) and the regions where it will be visible.',
    ],
    category: 'Astronomy',
    lang: 'EN',
  },
  {
    slug: 'lunallena',
    name: 'Luna Llena',
    url: 'https://lunallena.co',
    tagline: 'Calendario y datos de la próxima luna llena',
    description:
      'Calendario lunar en español: fechas exactas de cada luna llena, fases y nombres tradicionales.',
    details: [
      'Luna Llena es un calendario lunar en español con las fechas exactas de cada luna llena del año, sus fases y los nombres tradicionales de cada mes.',
      'Incluye una cuenta atrás hasta la próxima luna llena y señala cuándo una luna llena coincide con una superluna.',
      'Es una herramienta gratuita, sin registro, pensada para consultar de un vistazo cuándo es la siguiente luna llena.',
    ],
    category: 'Astronomy',
    lang: 'ES/EN',
  },
  {
    slug: 'nextfullmoon',
    name: 'Next Full Moon',
    url: 'https://nextfullmoon.co',
    tagline: 'Countdown to the next full moon, worldwide',
    description:
      'Precise full moon dates with a live countdown, supermoon flags and traditional moon names for every month.',
    details: [
      'Next Full Moon shows the precise date and time of the next full moon worldwide, with a live countdown.',
      'It flags supermoons and lists the traditional moon name for every month, such as the Wolf Moon, Strawberry Moon and Harvest Moon.',
      'Full moon dates are calculated for the current and upcoming years and refresh automatically.',
    ],
    category: 'Astronomy',
    lang: 'EN',
  },
  {
    slug: 'plagueatlas',
    name: 'Plague Atlas',
    url: 'https://plagueatlas.com',
    tagline: 'Mapping history through epidemics',
    description:
      'An interactive atlas of major pandemics and plagues throughout human history — from the Antonine Plague to modern outbreaks.',
    details: [
      'Plague Atlas is an interactive timeline and map of the major pandemics and plagues in human history, from the Antonine Plague of the 2nd century to modern outbreaks.',
      'Each entry summarises the disease, its estimated death toll, the dates it spanned and its geographic spread.',
      'It is built as a free historical reference for general audiences, not a medical resource.',
    ],
    category: 'Research',
    lang: 'EN',
  },
  {
    slug: 'deathvault',
    name: 'Death Vault',
    url: 'https://deathvault.app',
    tagline: 'A serious look at mortality data',
    description:
      'Curated mortality statistics, life expectancy and cause-of-death data presented for general audiences.',
    details: [
      'Death Vault presents curated mortality data — life expectancy, leading causes of death and historical death tolls — in plain language for general audiences.',
      'Its figures are drawn from public-health and historical sources and shown without sensationalism.',
      'The site is free to use and requires no account.',
    ],
    category: 'Research',
    lang: 'EN',
  },
  {
    slug: 'postmicrotools',
    name: 'PostMicroTools',
    url: 'https://postmicrotools.com',
    tagline: 'Calculators and utilities for post-production & VFX',
    description:
      'A free in-browser hub of 17+ calculators and utilities for editors, colorists and VFX artists — bitrate, storage, timecode, aspect ratio, LUT, EXR and more. All client-side, no signup, nothing uploaded.',
    details: [
      'PostMicroTools is a free in-browser hub of more than 17 calculators and utilities for video editors, colorists and VFX artists.',
      'It covers bitrate, storage, timecode, aspect ratio, frame rate, LUT and EXR calculations, among others.',
      'Everything runs client-side in the browser: there is no signup and no files are ever uploaded.',
    ],
    category: 'Post & VFX',
    lang: 'EN',
  },
  {
    slug: 'fartrank',
    name: 'Fart Rank',
    url: 'https://fartrank.app',
    tagline: 'A serious app for a ridiculous problem',
    description:
      'Rank, score and share the universal human comedy. Built as an experiment in viral product design.',
    details: [
      'Fart Rank is a lighthearted web app that lets people rank, score and share a universally human moment.',
      'It was built as an experiment in viral product design and is free to use.',
      'The web app is live, with a companion mobile version in development for Google Play.',
    ],
    category: 'Entertainment',
    lang: 'EN',
  },
  {
    slug: 'modelozero',
    name: 'Modelo Zero',
    url: 'https://modelozero.com',
    tagline: 'El pulso de la IA, en español',
    description:
      'Canal de divulgación sobre inteligencia artificial en español: cada lanzamiento de los grandes laboratorios (OpenAI, Anthropic, Google DeepMind, Meta, DeepSeek, Mistral, xAI…) explicado en 5 claves, en vídeos cortos.',
    details: [
      'Modelo Zero es un canal de divulgación en español sobre inteligencia artificial.',
      'Explica cada lanzamiento de los grandes laboratorios — OpenAI, Anthropic, Google DeepMind, Meta, DeepSeek, Mistral y xAI — en cinco claves y en vídeos cortos.',
      'Su objetivo es seguir el pulso de la IA en español, sin tecnicismos.',
    ],
    category: 'AI',
    lang: 'ES',
  },
];

export const SITE_URL = 'https://furiosadata.com';
export const PUBLISHER = 'Furiosa Studio';

/**
 * Default Open Graph / Twitter card image for furiosadata.com.
 *
 * Used by the root layout AND by every route that overrides `openGraph`
 * in its own `generateMetadata()` — Next.js Metadata API does NOT
 * deep-merge `openGraph` between layout and page, so any route that
 * redeclares `openGraph` must also re-pass `images` or the inherited
 * image is dropped. Spread this constant to avoid that footgun:
 *
 *   openGraph: { ..., images: DEFAULT_OG_IMAGES }
 *   twitter:   { ..., images: DEFAULT_OG_IMAGES }
 */
export const DEFAULT_OG_IMAGES = [
  {
    url: `${SITE_URL}/og-default.png`,
    width: 1200,
    height: 630,
    alt: 'Furiosa Studio — The Data Tools Network',
    type: 'image/png',
  },
];
