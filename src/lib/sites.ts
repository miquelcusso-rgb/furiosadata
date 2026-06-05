export type Site = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
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
