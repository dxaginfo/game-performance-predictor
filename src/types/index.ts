// Player related types
export interface PlayerStats {
  points: number
  rebounds: number
  assists: number
  steals: number
  blocks: number
  turnovers: number
  fieldGoalPercentage: number
  threePointPercentage: number
  freeThrowPercentage: number
  minutes: number
}

export interface PlayerHistory {
  lastFiveGames: PlayerStats[]
  seasonAverage: PlayerStats
  vsOpponent: PlayerStats[]
  homeVsAway: {
    home: PlayerStats
    away: PlayerStats
  }
}

export interface Player {
  id: string
  name: string
  position: string
  team: string
  teamId: string
  number: number
  height: string
  weight: number
  age: number
  experience: number
  college: string
  stats: PlayerStats
  history: PlayerHistory
}

// Team related types
export interface TeamStats {
  points: number
  fieldGoalPercentage: number
  threePointPercentage: number
  freeThrowPercentage: number
  assists: number
  rebounds: number
  offensiveRebounds: number
  defensiveRebounds: number
  steals: number
  blocks: number
  turnovers: number
  fouls: number
  pace: number
}

export interface TeamHistory {
  lastFiveGames: TeamStats[]
  seasonAverage: TeamStats
  vsOpponent: TeamStats[]
  homeVsAway: {
    home: TeamStats
    away: TeamStats
  }
  streak: {
    type: 'win' | 'loss'
    count: number
  }
}

export interface Team {
  id: string
  name: string
  abbreviation: string
  conference: 'Eastern' | 'Western'
  division: string
  record: {
    wins: number
    losses: number
  }
  stats: TeamStats
  history: TeamHistory
  players: string[] // IDs of players on the team
}

// Prediction related types
export interface StatPrediction {
  average: number
  high: number
  low: number
  confidence: number // 0-100
}

export interface PlayerStatPrediction {
  points: StatPrediction
  rebounds: StatPrediction
  assists: StatPrediction
  steals: StatPrediction
  blocks: StatPrediction
  turnovers: StatPrediction
  fieldGoalPercentage: StatPrediction
  threePointPercentage: StatPrediction
  freeThrowPercentage: StatPrediction
  minutes: StatPrediction
}

export interface TeamStatPrediction {
  points: StatPrediction
  fieldGoalPercentage: StatPrediction
  threePointPercentage: StatPrediction
  freeThrowPercentage: StatPrediction
  assists: StatPrediction
  rebounds: StatPrediction
  offensiveRebounds: StatPrediction
  defensiveRebounds: StatPrediction
  steals: StatPrediction
  blocks: StatPrediction
  turnovers: StatPrediction
  fouls: StatPrediction
  pace: StatPrediction
}

export interface Prediction {
  player?: PlayerStatPrediction
  team?: TeamStatPrediction
  winProbability?: number
  factorsConsidered: string[]
  timestamp: string
}

// Matchup analysis types
export interface MatchupAdvantage {
  category: string
  team: string
  difference: number // positive number indicating advantage size
  description: string
}

export interface HeadToHead {
  lastFiveGames: {
    winner: string
    score: {
      team1: number
      team2: number
    }
    date: string
  }[]
  overall: {
    team1Wins: number
    team2Wins: number
  }
}

export interface KeyPlayerMatchup {
  player1: {
    id: string
    name: string
    stats: PlayerStats
  }
  player2: {
    id: string
    name: string
    stats: PlayerStats
  }
  advantage: {
    player: string
    size: 'slight' | 'moderate' | 'significant'
    description: string
  }
}

export interface MatchupAnalysis {
  advantages: MatchupAdvantage[]
  headToHead: HeadToHead
  keyMatchups: KeyPlayerMatchup[]
  pace: 'slow' | 'moderate' | 'fast'
  scoringPotential: 'low' | 'average' | 'high'
  injuryImpact: string
}