// All-time top scorers in the 5 major European leagues. Source: official league records + RSSSF.
export type Scorer = {
  rank: number;
  player: string;
  nationality: string;
  league: 'Premier League' | 'La Liga' | 'Serie A' | 'Bundesliga' | 'Ligue 1';
  goals: number;
  span: string;
};

export const SCORERS: Scorer[] = [
  // Premier League era (1992–)
  { rank: 1, player: 'Alan Shearer',     nationality: 'England',      league: 'Premier League', goals: 260, span: '1992–2006' },
  { rank: 2, player: 'Harry Kane',       nationality: 'England',      league: 'Premier League', goals: 213, span: '2011–2023' },
  { rank: 3, player: 'Wayne Rooney',     nationality: 'England',      league: 'Premier League', goals: 208, span: '2002–2018' },
  { rank: 4, player: 'Mohamed Salah',    nationality: 'Egypt',        league: 'Premier League', goals: 186, span: '2014–present' },
  { rank: 5, player: 'Andrew Cole',      nationality: 'England',      league: 'Premier League', goals: 187, span: '1992–2008' },

  // La Liga
  { rank: 1, player: 'Lionel Messi',     nationality: 'Argentina',    league: 'La Liga',        goals: 474, span: '2004–2021' },
  { rank: 2, player: 'Cristiano Ronaldo',nationality: 'Portugal',     league: 'La Liga',        goals: 311, span: '2009–2018' },
  { rank: 3, player: 'Karim Benzema',    nationality: 'France',       league: 'La Liga',        goals: 238, span: '2009–2023' },
  { rank: 4, player: 'Telmo Zarra',      nationality: 'Spain',        league: 'La Liga',        goals: 251, span: '1940–1955' },
  { rank: 5, player: 'Hugo Sánchez',     nationality: 'Mexico',       league: 'La Liga',        goals: 234, span: '1981–1994' },

  // Serie A
  { rank: 1, player: 'Silvio Piola',     nationality: 'Italy',        league: 'Serie A',        goals: 274, span: '1929–1954' },
  { rank: 2, player: 'Francesco Totti',  nationality: 'Italy',        league: 'Serie A',        goals: 250, span: '1992–2017' },
  { rank: 3, player: 'Gunnar Nordahl',   nationality: 'Sweden',       league: 'Serie A',        goals: 225, span: '1949–1958' },
  { rank: 4, player: 'Giuseppe Meazza',  nationality: 'Italy',        league: 'Serie A',        goals: 216, span: '1929–1947' },
  { rank: 5, player: 'José Altafini',    nationality: 'Brazil/Italy', league: 'Serie A',        goals: 216, span: '1958–1976' },

  // Bundesliga
  { rank: 1, player: 'Gerd Müller',      nationality: 'Germany',      league: 'Bundesliga',     goals: 365, span: '1965–1979' },
  { rank: 2, player: 'Robert Lewandowski',nationality: 'Poland',      league: 'Bundesliga',     goals: 312, span: '2010–2022' },
  { rank: 3, player: 'Klaus Fischer',    nationality: 'Germany',      league: 'Bundesliga',     goals: 268, span: '1968–1988' },
  { rank: 4, player: 'Jupp Heynckes',    nationality: 'Germany',      league: 'Bundesliga',     goals: 220, span: '1965–1978' },
  { rank: 5, player: 'Manfred Burgsmüller', nationality: 'Germany',   league: 'Bundesliga',     goals: 213, span: '1969–1990' },

  // Ligue 1
  { rank: 1, player: 'Delio Onnis',      nationality: 'Argentina',    league: 'Ligue 1',        goals: 299, span: '1971–1986' },
  { rank: 2, player: 'Bernard Lacombe',  nationality: 'France',       league: 'Ligue 1',        goals: 255, span: '1969–1987' },
  { rank: 3, player: 'Hervé Revelli',    nationality: 'France',       league: 'Ligue 1',        goals: 216, span: '1965–1978' },
  { rank: 4, player: 'Roger Courtois',   nationality: 'France',       league: 'Ligue 1',        goals: 210, span: '1932–1956' },
  { rank: 5, player: 'Kylian Mbappé',    nationality: 'France',       league: 'Ligue 1',        goals: 174, span: '2015–2024' },
];
