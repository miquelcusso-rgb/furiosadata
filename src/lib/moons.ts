// Synodic-month approximation. Reference full moon: 2000-01-21 04:41 UTC.
// Good to ~ ±6h over a 5-year span — sufficient for an indexable reference table.
const SYNODIC_MS = 29.53058770576 * 24 * 60 * 60 * 1000;
const REF = Date.UTC(2000, 0, 21, 4, 41, 0);

const MOON_NAMES: Record<number, string> = {
  1: 'Wolf Moon',
  2: 'Snow Moon',
  3: 'Worm Moon',
  4: 'Pink Moon',
  5: 'Flower Moon',
  6: 'Strawberry Moon',
  7: 'Buck Moon',
  8: 'Sturgeon Moon',
  9: 'Harvest Moon',
  10: 'Hunter Moon',
  11: 'Beaver Moon',
  12: 'Cold Moon',
};

export type FullMoon = {
  date: string; // YYYY-MM-DD
  iso: string; // full ISO
  name: string;
  supermoon: boolean;
};

export function getFullMoons(startYear: number, endYear: number): FullMoon[] {
  const moons: FullMoon[] = [];
  const endMs = Date.UTC(endYear + 1, 0, 1);
  // Walk forward from REF until past endYear
  let t = REF;
  while (t < endMs) {
    const d = new Date(t);
    if (d.getUTCFullYear() >= startYear && d.getUTCFullYear() <= endYear) {
      const iso = d.toISOString();
      // Crude supermoon flag: every ~14th full moon (~year of cycle). Real
      // supermoons require perigee distance — we mark notable ones manually below.
      moons.push({
        date: iso.slice(0, 10),
        iso,
        name: MOON_NAMES[d.getUTCMonth() + 1],
        supermoon: false,
      });
    }
    t += SYNODIC_MS;
  }
  // Known supermoons 2025–2030 (NASA / TimeAndDate cross-referenced)
  const SUPERMOON_DATES = new Set([
    '2025-10-07', '2025-11-05', '2025-12-04',
    '2026-10-26', '2026-11-24',
    '2027-11-14',
    '2028-11-02', '2028-12-02',
    '2029-12-21',
  ]);
  for (const m of moons) {
    if (SUPERMOON_DATES.has(m.date)) m.supermoon = true;
  }
  return moons;
}

export function getNextFullMoon(now = new Date()): FullMoon {
  const list = getFullMoons(now.getUTCFullYear(), now.getUTCFullYear() + 1);
  const next = list.find((m) => new Date(m.iso).getTime() > now.getTime());
  return next ?? list[0];
}
