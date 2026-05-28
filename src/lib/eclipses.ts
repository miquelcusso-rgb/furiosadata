// Eclipse dataset 2025–2035. Source: NASA Goddard (eclipse.gsfc.nasa.gov).
// Curated subset of major events with type, max-eclipse time (UTC) and visibility.
export type Eclipse = {
  date: string;
  type: 'Total Solar' | 'Annular Solar' | 'Partial Solar' | 'Hybrid Solar' | 'Total Lunar' | 'Partial Lunar' | 'Penumbral Lunar';
  maxTimeUTC: string;
  visibility: string;
  notes?: string;
};

export const ECLIPSES: Eclipse[] = [
  { date: '2025-03-14', type: 'Total Lunar',     maxTimeUTC: '06:58', visibility: 'Americas, W Europe, W Africa' },
  { date: '2025-03-29', type: 'Partial Solar',   maxTimeUTC: '10:47', visibility: 'NE North America, Europe, NW Africa' },
  { date: '2025-09-07', type: 'Total Lunar',     maxTimeUTC: '18:11', visibility: 'Europe, Africa, Asia, Australia' },
  { date: '2025-09-21', type: 'Partial Solar',   maxTimeUTC: '19:41', visibility: 'S Pacific, New Zealand, Antarctica' },

  { date: '2026-02-17', type: 'Annular Solar',   maxTimeUTC: '12:13', visibility: 'Antarctica, S Africa, S Atlantic' },
  { date: '2026-03-03', type: 'Total Lunar',     maxTimeUTC: '11:33', visibility: 'E Asia, Australia, Pacific, Americas' },
  { date: '2026-08-12', type: 'Total Solar',     maxTimeUTC: '17:46', visibility: 'Greenland, Iceland, N Spain', notes: 'First total solar eclipse over mainland Europe since 1999' },
  { date: '2026-08-28', type: 'Partial Lunar',   maxTimeUTC: '04:13', visibility: 'Americas, Europe, Africa' },

  { date: '2027-02-06', type: 'Annular Solar',   maxTimeUTC: '16:00', visibility: 'S America, Atlantic, W Africa' },
  { date: '2027-02-20', type: 'Penumbral Lunar', maxTimeUTC: '23:13', visibility: 'Americas, Europe, Africa' },
  { date: '2027-07-18', type: 'Penumbral Lunar', maxTimeUTC: '16:03', visibility: 'Africa, Europe, W Asia' },
  { date: '2027-08-02', type: 'Total Solar',     maxTimeUTC: '10:07', visibility: 'S Spain, N Africa, Egypt, Saudi Arabia', notes: 'Path of totality crosses Gibraltar — longest 21st-century totality on land (6m23s)' },
  { date: '2027-08-17', type: 'Penumbral Lunar', maxTimeUTC: '07:13', visibility: 'Pacific, Australia, E Asia' },

  { date: '2028-01-12', type: 'Annular Solar',   maxTimeUTC: '04:13', visibility: 'NW S America, Atlantic, NW Europe' },
  { date: '2028-01-31', type: 'Partial Lunar',   maxTimeUTC: '16:53', visibility: 'Asia, Australia, W North America' },
  { date: '2028-07-22', type: 'Total Solar',     maxTimeUTC: '02:56', visibility: 'Australia, New Zealand' },
  { date: '2028-12-31', type: 'Total Lunar',     maxTimeUTC: '16:52', visibility: 'Europe, Africa, Asia' },

  { date: '2029-01-14', type: 'Partial Solar',   maxTimeUTC: '17:13', visibility: 'N America' },
  { date: '2029-06-12', type: 'Partial Solar',   maxTimeUTC: '03:51', visibility: 'Arctic, Scandinavia' },
  { date: '2029-06-26', type: 'Total Lunar',     maxTimeUTC: '03:23', visibility: 'Americas, Africa, Europe' },
  { date: '2029-07-11', type: 'Partial Solar',   maxTimeUTC: '15:37', visibility: 'S America' },
  { date: '2029-12-05', type: 'Partial Solar',   maxTimeUTC: '15:03', visibility: 'S Argentina, Antarctica' },
  { date: '2029-12-20', type: 'Total Lunar',     maxTimeUTC: '22:42', visibility: 'Americas, Europe, Africa' },

  { date: '2030-06-01', type: 'Annular Solar',   maxTimeUTC: '06:29', visibility: 'N Africa, Europe, Russia, Japan' },
  { date: '2030-06-15', type: 'Partial Lunar',   maxTimeUTC: '18:34', visibility: 'Asia, Australia' },
  { date: '2030-11-25', type: 'Total Solar',     maxTimeUTC: '06:51', visibility: 'S Africa, Indian Ocean, Australia' },

  { date: '2031-05-07', type: 'Total Lunar',     maxTimeUTC: '03:51', visibility: 'Americas, Europe, Africa' },
  { date: '2031-05-21', type: 'Annular Solar',   maxTimeUTC: '07:16', visibility: 'Central Africa, Indian Ocean' },
  { date: '2031-11-14', type: 'Hybrid Solar',    maxTimeUTC: '21:07', visibility: 'C Pacific' },

  { date: '2032-04-25', type: 'Total Lunar',     maxTimeUTC: '15:14', visibility: 'Asia, Australia' },
  { date: '2032-05-09', type: 'Annular Solar',   maxTimeUTC: '13:25', visibility: 'C Atlantic, Africa' },
  { date: '2032-11-03', type: 'Annular Solar',   maxTimeUTC: '05:33', visibility: 'Pacific' },
  { date: '2032-11-18', type: 'Total Lunar',     maxTimeUTC: '22:34', visibility: 'Americas, Europe, Africa' },

  { date: '2033-03-30', type: 'Total Solar',     maxTimeUTC: '18:02', visibility: 'Alaska, Arctic' },
  { date: '2033-09-23', type: 'Annular Solar',   maxTimeUTC: '13:54', visibility: 'Antarctica' },

  { date: '2034-03-20', type: 'Total Solar',     maxTimeUTC: '10:18', visibility: 'C Africa, Middle East, India' },
  { date: '2034-09-12', type: 'Annular Solar',   maxTimeUTC: '02:18', visibility: 'Pacific, S America' },

  { date: '2035-03-09', type: 'Annular Solar',   maxTimeUTC: '23:05', visibility: 'New Zealand, S Pacific' },
  { date: '2035-09-02', type: 'Total Solar',     maxTimeUTC: '01:55', visibility: 'China, Korea, Japan, Pacific' },
];

export function getNextEclipse(now = new Date()): Eclipse {
  const next = ECLIPSES.find((e) => new Date(`${e.date}T${e.maxTimeUTC}:00Z`).getTime() > now.getTime());
  return next ?? ECLIPSES[0];
}
