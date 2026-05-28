import { getFullMoons } from '../../../../lib/moons';

export const dynamic = 'force-static';

export function GET() {
  const moons = getFullMoons(2025, 2030);
  const header = 'date,utc_time,name,supermoon\n';
  const body = moons
    .map((m) => `${m.date},${m.iso.slice(11, 16)},${m.name},${m.supermoon ? 'true' : 'false'}`)
    .join('\n');
  return new Response(header + body, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename="furiosadata-full-moons-2025-2030.csv"',
      'cache-control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
