import { ECLIPSES } from '../../../../lib/eclipses';

export const dynamic = 'force-static';

export function GET() {
  const header = 'date,type,utc_time,visibility,notes\n';
  const body = ECLIPSES
    .map((e) => `${e.date},${e.type},${e.maxTimeUTC},"${e.visibility}","${e.notes ?? ''}"`)
    .join('\n');
  return new Response(header + body, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename="furiosadata-eclipses-2025-2035.csv"',
      'cache-control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
