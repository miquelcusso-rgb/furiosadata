// Historical epidemics dataset. Sources: WHO, Wikipedia, CDC summaries.
// Mortality figures are best-available estimates; ranges noted where contested.
export type Epidemic = {
  name: string;
  start: number;
  end: number | null;
  region: string;
  pathogen: string;
  deathsLow: number;
  deathsHigh: number;
  era: 'Ancient' | 'Medieval' | 'Early Modern' | 'Modern' | 'Contemporary';
};

export const EPIDEMICS: Epidemic[] = [
  { name: 'Antonine Plague',          start: 165,  end: 180,  region: 'Roman Empire',           pathogen: 'Smallpox or measles (suspected)', deathsLow: 5_000_000,   deathsHigh: 10_000_000,    era: 'Ancient' },
  { name: 'Plague of Cyprian',        start: 249,  end: 262,  region: 'Roman Empire',           pathogen: 'Unknown (possibly smallpox)',     deathsLow: 1_000_000,   deathsHigh: 2_000_000,     era: 'Ancient' },
  { name: 'Plague of Justinian',      start: 541,  end: 549,  region: 'Mediterranean, Europe',  pathogen: 'Yersinia pestis',                 deathsLow: 25_000_000,  deathsHigh: 100_000_000,   era: 'Ancient' },
  { name: 'Black Death',              start: 1346, end: 1353, region: 'Eurasia, North Africa',  pathogen: 'Yersinia pestis',                 deathsLow: 75_000_000,  deathsHigh: 200_000_000,   era: 'Medieval' },
  { name: 'New World smallpox',       start: 1520, end: 1600, region: 'Americas',               pathogen: 'Variola major',                   deathsLow: 25_000_000,  deathsHigh: 56_000_000,    era: 'Early Modern' },
  { name: 'Italian Plague',           start: 1629, end: 1631, region: 'Northern Italy',         pathogen: 'Yersinia pestis',                 deathsLow: 280_000,     deathsHigh: 1_000_000,     era: 'Early Modern' },
  { name: 'Great Plague of London',   start: 1665, end: 1666, region: 'England',                pathogen: 'Yersinia pestis',                 deathsLow: 75_000,      deathsHigh: 100_000,       era: 'Early Modern' },
  { name: 'Marseille Plague',         start: 1720, end: 1722, region: 'France',                 pathogen: 'Yersinia pestis',                 deathsLow: 50_000,      deathsHigh: 126_000,       era: 'Early Modern' },
  { name: 'First Cholera Pandemic',   start: 1817, end: 1824, region: 'Asia, Middle East',      pathogen: 'Vibrio cholerae',                 deathsLow: 100_000,     deathsHigh: 1_000_000,     era: 'Modern' },
  { name: 'Third Plague Pandemic',    start: 1855, end: 1960, region: 'Global (originated China)', pathogen: 'Yersinia pestis',              deathsLow: 12_000_000,  deathsHigh: 15_000_000,    era: 'Modern' },
  { name: 'Russian Flu',              start: 1889, end: 1890, region: 'Global',                 pathogen: 'Influenza (likely H3N8 or HCoV-OC43)', deathsLow: 1_000_000, deathsHigh: 1_000_000,  era: 'Modern' },
  { name: 'Spanish Flu',              start: 1918, end: 1920, region: 'Global',                 pathogen: 'Influenza A/H1N1',                deathsLow: 17_000_000,  deathsHigh: 100_000_000,   era: 'Modern' },
  { name: 'Asian Flu',                start: 1957, end: 1958, region: 'Global',                 pathogen: 'Influenza A/H2N2',                deathsLow: 1_100_000,   deathsHigh: 2_000_000,     era: 'Modern' },
  { name: 'Hong Kong Flu',            start: 1968, end: 1969, region: 'Global',                 pathogen: 'Influenza A/H3N2',                deathsLow: 1_000_000,   deathsHigh: 4_000_000,     era: 'Modern' },
  { name: 'HIV/AIDS pandemic',        start: 1981, end: null, region: 'Global',                 pathogen: 'HIV',                             deathsLow: 36_000_000,  deathsHigh: 42_000_000,    era: 'Contemporary' },
  { name: 'SARS',                     start: 2002, end: 2004, region: 'Asia, Canada',           pathogen: 'SARS-CoV-1',                      deathsLow: 774,         deathsHigh: 774,           era: 'Contemporary' },
  { name: 'Swine Flu',                start: 2009, end: 2010, region: 'Global',                 pathogen: 'Influenza A/H1N1pdm09',           deathsLow: 151_000,     deathsHigh: 575_000,       era: 'Contemporary' },
  { name: 'West African Ebola',       start: 2013, end: 2016, region: 'West Africa',            pathogen: 'Ebolavirus (Zaire)',              deathsLow: 11_323,      deathsHigh: 11_323,        era: 'Contemporary' },
  { name: 'MERS',                     start: 2012, end: null, region: 'Middle East, Korea',     pathogen: 'MERS-CoV',                        deathsLow: 858,         deathsHigh: 858,           era: 'Contemporary' },
  { name: 'COVID-19',                 start: 2019, end: 2023, region: 'Global',                 pathogen: 'SARS-CoV-2',                      deathsLow: 7_000_000,   deathsHigh: 28_000_000,    era: 'Contemporary' },
  { name: 'Mpox outbreak',            start: 2022, end: 2024, region: 'Global',                 pathogen: 'Monkeypox virus (clade IIb)',     deathsLow: 200,         deathsHigh: 250,           era: 'Contemporary' },
];
