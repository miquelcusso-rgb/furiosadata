import { SCORERS } from '../../../../lib/scorers';

export const dynamic = 'force-static';

export function GET() {
  const header = 'league,rank,player,nationality,goals,span\n';
  const body = SCORERS
    .map((s) => `"${s.league}",${s.rank},"${s.player}","${s.nationality}",${s.goals},"${s.span}"`)
    .join('\n');
  return new Response(header + body, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename="furiosadata-scorers.csv"',
      'cache-control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
