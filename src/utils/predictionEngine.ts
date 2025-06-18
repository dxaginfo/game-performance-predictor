import {
  Player,
  Team,
  Prediction,
  PlayerStatPrediction,
  TeamStatPrediction,
  StatPrediction,
  MatchupAnalysis,
  MatchupAdvantage,
  KeyPlayerMatchup
} from '../types'

// Helper to generate a random variation within a certain percentage
const randomVariation = (base: number, variationPercent: number): number => {
  const variation = (base * variationPercent) / 100
  return base + (Math.random() * variation * 2 - variation)
}

// Helper to calculate confidence level (0-100)
const calculateConfidence = (player: Player, opponent: Team | null): number => {
  // Base confidence level
  let confidence = 70

  // Factors that increase confidence
  if (player.history.lastFiveGames.length >= 5) confidence += 5
  if (player.history.vsOpponent.length >= 3) confidence += 10
  if (player.experience > 5) confidence += player.experience / 2

  // Factors that decrease confidence
  if (player.stats.minutes < 25) confidence -= 10
  if (opponent && opponent.stats.blocks > 6) confidence -= 5
  
  // Random factor
  confidence += (Math.random() * 5) - 2.5

  // Ensure confidence is between 0 and 100
  return Math.min(Math.max(confidence, 0), 100)
}

// Helper to create a stat prediction
const createStatPrediction = (
  value: number,
  variationPercent: number = 10,
  confidence: number = 70
): StatPrediction => {
  const high = value * (1 + variationPercent / 100)
  const low = value * (1 - variationPercent / 100)
  
  return {
    average: value,
    high: parseFloat(high.toFixed(1)),
    low: parseFloat(low.toFixed(1)),
    confidence
  }
}

// Generate player prediction
export const generatePlayerPrediction = (
  player: Player,
  opponent: Team | null
): Prediction => {
  const confidence = calculateConfidence(player, opponent)
  
  // Factors to consider based on game context
  const factorsConsidered = [
    'Player season average performance',
    'Recent form (last 5 games)',
    'Minutes played',
    'Home/away performance differential'
  ]
  
  if (opponent) {
    factorsConsidered.push('Historical performance against opponent')
    factorsConsidered.push('Opponent defensive metrics')
  }
  
  // Adjust stats based on opponent strength if available
  let adjustmentFactor = 1.0
  if (opponent) {
    // Defensive adjustment (better defense = lower stats)
    const defenseStrength = (opponent.stats.blocks + opponent.stats.steals) / 15
    adjustmentFactor = 1.0 - (defenseStrength * 0.05)
    
    factorsConsidered.push(`Opponent defensive strength (${(defenseStrength * 100).toFixed(0)}%)`)
  }
  
  // Generate predictions for each stat category
  const playerPrediction: PlayerStatPrediction = {
    points: createStatPrediction(player.stats.points * adjustmentFactor, 15, confidence),
    rebounds: createStatPrediction(player.stats.rebounds * adjustmentFactor, 20, confidence - 5),
    assists: createStatPrediction(player.stats.assists * adjustmentFactor, 20, confidence - 5),
    steals: createStatPrediction(player.stats.steals, 30, confidence - 10),
    blocks: createStatPrediction(player.stats.blocks, 30, confidence - 10),
    turnovers: createStatPrediction(player.stats.turnovers, 25, confidence - 5),
    fieldGoalPercentage: createStatPrediction(player.stats.fieldGoalPercentage, 10, confidence),
    threePointPercentage: createStatPrediction(player.stats.threePointPercentage, 15, confidence - 10),
    freeThrowPercentage: createStatPrediction(player.stats.freeThrowPercentage, 8, confidence + 5),
    minutes: createStatPrediction(player.stats.minutes, 10, confidence + 10)
  }
  
  return {
    player: playerPrediction,
    factorsConsidered,
    timestamp: new Date().toISOString()
  }
}

// Generate team prediction
export const generateTeamPrediction = (
  team: Team,
  opponent: Team
): Prediction => {
  // Calculate win probability based on team strength, record, and head-to-head
  const teamStrength = team.stats.points + (team.stats.fieldGoalPercentage / 2)
  const opponentStrength = opponent.stats.points + (opponent.stats.fieldGoalPercentage / 2)
  
  const recordFactor = (team.record.wins / (team.record.wins + team.record.losses)) - 
                      (opponent.record.wins / (opponent.record.wins + opponent.record.losses))
  
  // Home court advantage (we're assuming the team is at home in this example)
  const homeCourtAdvantage = 0.05
  
  // Calculate base win probability
  let winProbability = 0.5 + (teamStrength - opponentStrength) / 200 + (recordFactor * 0.1) + homeCourtAdvantage
  
  // Add streak factor
  if (team.history.streak.type === 'win') {
    winProbability += team.history.streak.count * 0.01
  } else {
    winProbability -= team.history.streak.count * 0.01
  }
  
  if (opponent.history.streak.type === 'win') {
    winProbability -= opponent.history.streak.count * 0.01
  } else {
    winProbability += opponent.history.streak.count * 0.01
  }
  
  // Ensure win probability is between 0 and 1
  winProbability = Math.min(Math.max(winProbability, 0.05), 0.95)
  
  // Factors considered in prediction
  const factorsConsidered = [
    'Team season averages',
    'Recent form (last 5 games)',
    'Win/loss record',
    'Home court advantage',
    'Team winning/losing streaks',
    'Head-to-head matchup history'
  ]
  
  // Calculate the confidence based on data quality
  const confidence = 65 + (team.history.lastFiveGames.length * 2) + (team.history.vsOpponent.length * 3)
  
  // Generate team stat predictions
  const teamPrediction: TeamStatPrediction = {
    points: createStatPrediction(team.stats.points, 10, confidence),
    fieldGoalPercentage: createStatPrediction(team.stats.fieldGoalPercentage, 8, confidence),
    threePointPercentage: createStatPrediction(team.stats.threePointPercentage, 12, confidence - 5),
    freeThrowPercentage: createStatPrediction(team.stats.freeThrowPercentage, 5, confidence + 5),
    assists: createStatPrediction(team.stats.assists, 15, confidence),
    rebounds: createStatPrediction(team.stats.rebounds, 15, confidence),
    offensiveRebounds: createStatPrediction(team.stats.offensiveRebounds, 20, confidence - 5),
    defensiveRebounds: createStatPrediction(team.stats.defensiveRebounds, 15, confidence),
    steals: createStatPrediction(team.stats.steals, 20, confidence - 10),
    blocks: createStatPrediction(team.stats.blocks, 25, confidence - 10),
    turnovers: createStatPrediction(team.stats.turnovers, 20, confidence - 5),
    fouls: createStatPrediction(team.stats.fouls, 15, confidence),
    pace: createStatPrediction(team.stats.pace, 5, confidence + 5)
  }
  
  return {
    team: teamPrediction,
    winProbability,
    factorsConsidered,
    timestamp: new Date().toISOString()
  }
}

// Analyze matchup between two teams
export const analyzeMatchup = (
  team1: Team,
  team2: Team
): MatchupAnalysis => {
  // Calculate advantages in different statistical categories
  const advantages: MatchupAdvantage[] = []
  
  // Scoring advantage
  if (Math.abs(team1.stats.points - team2.stats.points) > 2) {
    const higherScoringTeam = team1.stats.points > team2.stats.points ? team1.name : team2.name
    advantages.push({
      category: 'Scoring',
      team: higherScoringTeam,
      difference: Math.abs(team1.stats.points - team2.stats.points),
      description: `${higherScoringTeam} scores ${Math.abs(team1.stats.points - team2.stats.points).toFixed(1)} more points per game`
    })
  }
  
  // Rebounding advantage
  if (Math.abs(team1.stats.rebounds - team2.stats.rebounds) > 2) {
    const betterReboundingTeam = team1.stats.rebounds > team2.stats.rebounds ? team1.name : team2.name
    advantages.push({
      category: 'Rebounding',
      team: betterReboundingTeam,
      difference: Math.abs(team1.stats.rebounds - team2.stats.rebounds),
      description: `${betterReboundingTeam} collects ${Math.abs(team1.stats.rebounds - team2.stats.rebounds).toFixed(1)} more rebounds per game`
    })
  }
  
  // Assists advantage
  if (Math.abs(team1.stats.assists - team2.stats.assists) > 1.5) {
    const betterAssistTeam = team1.stats.assists > team2.stats.assists ? team1.name : team2.name
    advantages.push({
      category: 'Ball Movement',
      team: betterAssistTeam,
      difference: Math.abs(team1.stats.assists - team2.stats.assists),
      description: `${betterAssistTeam} averages ${Math.abs(team1.stats.assists - team2.stats.assists).toFixed(1)} more assists per game`
    })
  }
  
  // Defensive advantage (steals + blocks)
  const team1Defense = team1.stats.steals + team1.stats.blocks
  const team2Defense = team2.stats.steals + team2.stats.blocks
  
  if (Math.abs(team1Defense - team2Defense) > 1.5) {
    const betterDefensiveTeam = team1Defense > team2Defense ? team1.name : team2.name
    advantages.push({
      category: 'Defense',
      team: betterDefensiveTeam,
      difference: Math.abs(team1Defense - team2Defense),
      description: `${betterDefensiveTeam} has stronger defensive metrics (steals + blocks)`
    })
  }
  
  // Shooting efficiency advantage
  if (Math.abs(team1.stats.fieldGoalPercentage - team2.stats.fieldGoalPercentage) > 1.5) {
    const betterShootingTeam = team1.stats.fieldGoalPercentage > team2.stats.fieldGoalPercentage ? team1.name : team2.name
    advantages.push({
      category: 'Shooting Efficiency',
      team: betterShootingTeam,
      difference: Math.abs(team1.stats.fieldGoalPercentage - team2.stats.fieldGoalPercentage),
      description: `${betterShootingTeam} shoots ${Math.abs(team1.stats.fieldGoalPercentage - team2.stats.fieldGoalPercentage).toFixed(1)}% better from the field`
    })
  }
  
  // Ball security advantage
  if (Math.abs(team1.stats.turnovers - team2.stats.turnovers) > 1) {
    const betterBallSecurityTeam = team1.stats.turnovers < team2.stats.turnovers ? team1.name : team2.name
    advantages.push({
      category: 'Ball Security',
      team: betterBallSecurityTeam,
      difference: Math.abs(team1.stats.turnovers - team2.stats.turnovers),
      description: `${betterBallSecurityTeam} commits ${Math.abs(team1.stats.turnovers - team2.stats.turnovers).toFixed(1)} fewer turnovers per game`
    })
  }
  
  // Mock head-to-head data
  const headToHead = {
    lastFiveGames: [
      {
        winner: Math.random() > 0.5 ? team1.name : team2.name,
        score: {
          team1: Math.floor(Math.random() * 20) + 100,
          team2: Math.floor(Math.random() * 20) + 100
        },
        date: '2025-05-15'
      },
      {
        winner: Math.random() > 0.5 ? team1.name : team2.name,
        score: {
          team1: Math.floor(Math.random() * 20) + 100,
          team2: Math.floor(Math.random() * 20) + 100
        },
        date: '2025-03-22'
      },
      {
        winner: Math.random() > 0.5 ? team1.name : team2.name,
        score: {
          team1: Math.floor(Math.random() * 20) + 100,
          team2: Math.floor(Math.random() * 20) + 100
        },
        date: '2025-01-10'
      },
      {
        winner: Math.random() > 0.5 ? team1.name : team2.name,
        score: {
          team1: Math.floor(Math.random() * 20) + 100,
          team2: Math.floor(Math.random() * 20) + 100
        },
        date: '2024-12-05'
      },
      {
        winner: Math.random() > 0.5 ? team1.name : team2.name,
        score: {
          team1: Math.floor(Math.random() * 20) + 100,
          team2: Math.floor(Math.random() * 20) + 100
        },
        date: '2024-10-28'
      }
    ],
    overall: {
      team1Wins: Math.floor(Math.random() * 10) + 10,
      team2Wins: Math.floor(Math.random() * 10) + 10
    }
  }
  
  // Key player matchups (simplified for the example)
  const keyMatchups: KeyPlayerMatchup[] = [
    {
      player1: {
        id: 'player1',
        name: 'Star Player (Team 1)',
        stats: {
          points: 25.5,
          rebounds: 7.2,
          assists: 6.8,
          steals: 1.2,
          blocks: 0.8,
          turnovers: 2.5,
          fieldGoalPercentage: 48.5,
          threePointPercentage: 38.5,
          freeThrowPercentage: 85.0,
          minutes: 34.5
        }
      },
      player2: {
        id: 'player2',
        name: 'Star Player (Team 2)',
        stats: {
          points: 26.2,
          rebounds: 6.5,
          assists: 7.5,
          steals: 1.5,
          blocks: 0.5,
          turnovers: 2.8,
          fieldGoalPercentage: 47.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 88.0,
          minutes: 35.0
        }
      },
      advantage: {
        player: 'Star Player (Team 2)',
        size: 'slight',
        description: 'Slightly more efficient scorer with better playmaking'
      }
    },
    {
      player1: {
        id: 'player3',
        name: 'Supporting Player (Team 1)',
        stats: {
          points: 18.5,
          rebounds: 9.2,
          assists: 2.8,
          steals: 0.8,
          blocks: 1.5,
          turnovers: 1.5,
          fieldGoalPercentage: 52.5,
          threePointPercentage: 34.5,
          freeThrowPercentage: 75.0,
          minutes: 31.5
        }
      },
      player2: {
        id: 'player4',
        name: 'Supporting Player (Team 2)',
        stats: {
          points: 16.8,
          rebounds: 7.5,
          assists: 3.5,
          steals: 1.0,
          blocks: 0.8,
          turnovers: 1.8,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 80.0,
          minutes: 30.0
        }
      },
      advantage: {
        player: 'Supporting Player (Team 1)',
        size: 'moderate',
        description: 'Stronger interior presence and rebounding ability'
      }
    }
  ]
  
  // Determine game pace
  const averagePace = (team1.stats.pace + team2.stats.pace) / 2
  let pace: 'slow' | 'moderate' | 'fast' = 'moderate'
  
  if (averagePace > 103) {
    pace = 'fast'
  } else if (averagePace < 98) {
    pace = 'slow'
  }
  
  // Determine scoring potential
  const averageScoring = (team1.stats.points + team2.stats.points) / 2
  let scoringPotential: 'low' | 'average' | 'high' = 'average'
  
  if (averageScoring > 118) {
    scoringPotential = 'high'
  } else if (averageScoring < 105) {
    scoringPotential = 'low'
  }
  
  // Mock injury impact
  const injuryImpact = 'No significant injuries affecting this matchup'
  
  return {
    advantages,
    headToHead,
    keyMatchups,
    pace,
    scoringPotential,
    injuryImpact
  }
}