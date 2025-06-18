import { Player, Team } from '../types'

// Sample player data
export const samplePlayers: Player[] = [
  {
    id: 'p1',
    name: 'LeBron James',
    position: 'SF',
    team: 'Los Angeles Lakers',
    teamId: 't1',
    number: 23,
    height: '6\'9"',
    weight: 250,
    age: 39,
    experience: 21,
    college: 'None',
    stats: {
      points: 25.7,
      rebounds: 7.3,
      assists: 8.3,
      steals: 1.3,
      blocks: 0.5,
      turnovers: 3.5,
      fieldGoalPercentage: 54.0,
      threePointPercentage: 41.0,
      freeThrowPercentage: 75.0,
      minutes: 35.5
    },
    history: {
      lastFiveGames: [
        {
          points: 28,
          rebounds: 8,
          assists: 9,
          steals: 2,
          blocks: 1,
          turnovers: 4,
          fieldGoalPercentage: 58.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 80.0,
          minutes: 36
        },
        {
          points: 24,
          rebounds: 6,
          assists: 10,
          steals: 1,
          blocks: 0,
          turnovers: 3,
          fieldGoalPercentage: 52.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 70.0,
          minutes: 34
        },
        {
          points: 30,
          rebounds: 9,
          assists: 7,
          steals: 1,
          blocks: 1,
          turnovers: 2,
          fieldGoalPercentage: 62.0,
          threePointPercentage: 45.0,
          freeThrowPercentage: 75.0,
          minutes: 38
        },
        {
          points: 22,
          rebounds: 7,
          assists: 8,
          steals: 0,
          blocks: 0,
          turnovers: 4,
          fieldGoalPercentage: 48.0,
          threePointPercentage: 33.0,
          freeThrowPercentage: 80.0,
          minutes: 32
        },
        {
          points: 26,
          rebounds: 8,
          assists: 11,
          steals: 2,
          blocks: 1,
          turnovers: 3,
          fieldGoalPercentage: 55.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 78.0,
          minutes: 37
        }
      ],
      seasonAverage: {
        points: 25.7,
        rebounds: 7.3,
        assists: 8.3,
        steals: 1.3,
        blocks: 0.5,
        turnovers: 3.5,
        fieldGoalPercentage: 54.0,
        threePointPercentage: 41.0,
        freeThrowPercentage: 75.0,
        minutes: 35.5
      },
      vsOpponent: [
        {
          points: 27,
          rebounds: 8,
          assists: 9,
          steals: 1,
          blocks: 0,
          turnovers: 3,
          fieldGoalPercentage: 56.0,
          threePointPercentage: 42.0,
          freeThrowPercentage: 76.0,
          minutes: 36
        }
      ],
      homeVsAway: {
        home: {
          points: 26.5,
          rebounds: 7.5,
          assists: 8.7,
          steals: 1.4,
          blocks: 0.6,
          turnovers: 3.3,
          fieldGoalPercentage: 55.0,
          threePointPercentage: 42.0,
          freeThrowPercentage: 76.0,
          minutes: 36.0
        },
        away: {
          points: 24.9,
          rebounds: 7.1,
          assists: 7.9,
          steals: 1.2,
          blocks: 0.4,
          turnovers: 3.7,
          fieldGoalPercentage: 53.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 74.0,
          minutes: 35.0
        }
      }
    }
  },
  {
    id: 'p2',
    name: 'Stephen Curry',
    position: 'PG',
    team: 'Golden State Warriors',
    teamId: 't2',
    number: 30,
    height: '6\'2"',
    weight: 185,
    age: 36,
    experience: 15,
    college: 'Davidson',
    stats: {
      points: 26.8,
      rebounds: 4.7,
      assists: 5.1,
      steals: 1.1,
      blocks: 0.3,
      turnovers: 2.8,
      fieldGoalPercentage: 45.0,
      threePointPercentage: 40.0,
      freeThrowPercentage: 92.0,
      minutes: 33.5
    },
    history: {
      lastFiveGames: [
        {
          points: 32,
          rebounds: 5,
          assists: 6,
          steals: 2,
          blocks: 0,
          turnovers: 3,
          fieldGoalPercentage: 48.0,
          threePointPercentage: 45.0,
          freeThrowPercentage: 95.0,
          minutes: 35
        },
        {
          points: 28,
          rebounds: 4,
          assists: 4,
          steals: 1,
          blocks: 0,
          turnovers: 2,
          fieldGoalPercentage: 44.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 90.0,
          minutes: 32
        },
        {
          points: 25,
          rebounds: 6,
          assists: 7,
          steals: 0,
          blocks: 1,
          turnovers: 3,
          fieldGoalPercentage: 42.0,
          threePointPercentage: 36.0,
          freeThrowPercentage: 92.0,
          minutes: 34
        },
        {
          points: 30,
          rebounds: 4,
          assists: 5,
          steals: 1,
          blocks: 0,
          turnovers: 2,
          fieldGoalPercentage: 47.0,
          threePointPercentage: 42.0,
          freeThrowPercentage: 94.0,
          minutes: 33
        },
        {
          points: 22,
          rebounds: 5,
          assists: 6,
          steals: 2,
          blocks: 0,
          turnovers: 3,
          fieldGoalPercentage: 40.0,
          threePointPercentage: 35.0,
          freeThrowPercentage: 90.0,
          minutes: 30
        }
      ],
      seasonAverage: {
        points: 26.8,
        rebounds: 4.7,
        assists: 5.1,
        steals: 1.1,
        blocks: 0.3,
        turnovers: 2.8,
        fieldGoalPercentage: 45.0,
        threePointPercentage: 40.0,
        freeThrowPercentage: 92.0,
        minutes: 33.5
      },
      vsOpponent: [
        {
          points: 28,
          rebounds: 5,
          assists: 6,
          steals: 1,
          blocks: 0,
          turnovers: 3,
          fieldGoalPercentage: 46.0,
          threePointPercentage: 42.0,
          freeThrowPercentage: 93.0,
          minutes: 34
        }
      ],
      homeVsAway: {
        home: {
          points: 28.2,
          rebounds: 4.9,
          assists: 5.5,
          steals: 1.2,
          blocks: 0.3,
          turnovers: 2.6,
          fieldGoalPercentage: 47.0,
          threePointPercentage: 42.0,
          freeThrowPercentage: 93.0,
          minutes: 34.0
        },
        away: {
          points: 25.4,
          rebounds: 4.5,
          assists: 4.7,
          steals: 1.0,
          blocks: 0.3,
          turnovers: 3.0,
          fieldGoalPercentage: 43.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 91.0,
          minutes: 33.0
        }
      }
    }
  },
  {
    id: 'p3',
    name: 'Giannis Antetokounmpo',
    position: 'PF',
    team: 'Milwaukee Bucks',
    teamId: 't3',
    number: 34,
    height: '6\'11"',
    weight: 242,
    age: 30,
    experience: 11,
    college: 'None',
    stats: {
      points: 29.7,
      rebounds: 11.5,
      assists: 5.8,
      steals: 1.2,
      blocks: 1.0,
      turnovers: 3.2,
      fieldGoalPercentage: 58.0,
      threePointPercentage: 28.0,
      freeThrowPercentage: 68.0,
      minutes: 33.0
    },
    history: {
      lastFiveGames: [
        {
          points: 32,
          rebounds: 12,
          assists: 6,
          steals: 1,
          blocks: 2,
          turnovers: 4,
          fieldGoalPercentage: 60.0,
          threePointPercentage: 30.0,
          freeThrowPercentage: 70.0,
          minutes: 35
        },
        {
          points: 28,
          rebounds: 10,
          assists: 5,
          steals: 0,
          blocks: 1,
          turnovers: 3,
          fieldGoalPercentage: 55.0,
          threePointPercentage: 25.0,
          freeThrowPercentage: 65.0,
          minutes: 32
        },
        {
          points: 35,
          rebounds: 13,
          assists: 7,
          steals: 2,
          blocks: 0,
          turnovers: 2,
          fieldGoalPercentage: 62.0,
          threePointPercentage: 33.0,
          freeThrowPercentage: 72.0,
          minutes: 36
        },
        {
          points: 26,
          rebounds: 11,
          assists: 4,
          steals: 1,
          blocks: 1,
          turnovers: 3,
          fieldGoalPercentage: 54.0,
          threePointPercentage: 20.0,
          freeThrowPercentage: 60.0,
          minutes: 30
        },
        {
          points: 30,
          rebounds: 12,
          assists: 6,
          steals: 2,
          blocks: 2,
          turnovers: 4,
          fieldGoalPercentage: 58.0,
          threePointPercentage: 30.0,
          freeThrowPercentage: 75.0,
          minutes: 34
        }
      ],
      seasonAverage: {
        points: 29.7,
        rebounds: 11.5,
        assists: 5.8,
        steals: 1.2,
        blocks: 1.0,
        turnovers: 3.2,
        fieldGoalPercentage: 58.0,
        threePointPercentage: 28.0,
        freeThrowPercentage: 68.0,
        minutes: 33.0
      },
      vsOpponent: [
        {
          points: 30,
          rebounds: 12,
          assists: 6,
          steals: 1,
          blocks: 1,
          turnovers: 3,
          fieldGoalPercentage: 59.0,
          threePointPercentage: 29.0,
          freeThrowPercentage: 69.0,
          minutes: 34
        }
      ],
      homeVsAway: {
        home: {
          points: 31.2,
          rebounds: 12.0,
          assists: 6.2,
          steals: 1.3,
          blocks: 1.1,
          turnovers: 3.0,
          fieldGoalPercentage: 60.0,
          threePointPercentage: 30.0,
          freeThrowPercentage: 70.0,
          minutes: 34.0
        },
        away: {
          points: 28.2,
          rebounds: 11.0,
          assists: 5.4,
          steals: 1.1,
          blocks: 0.9,
          turnovers: 3.4,
          fieldGoalPercentage: 56.0,
          threePointPercentage: 26.0,
          freeThrowPercentage: 66.0,
          minutes: 32.0
        }
      }
    }
  }
]

// Sample team data
export const sampleTeams: Team[] = [
  {
    id: 't1',
    name: 'Los Angeles Lakers',
    abbreviation: 'LAL',
    conference: 'Western',
    division: 'Pacific',
    record: {
      wins: 42,
      losses: 25
    },
    stats: {
      points: 117.2,
      fieldGoalPercentage: 49.0,
      threePointPercentage: 36.5,
      freeThrowPercentage: 78.3,
      assists: 27.2,
      rebounds: 44.5,
      offensiveRebounds: 10.8,
      defensiveRebounds: 33.7,
      steals: 8.2,
      blocks: 5.5,
      turnovers: 14.2,
      fouls: 19.8,
      pace: 101.2
    },
    history: {
      lastFiveGames: [
        {
          points: 120,
          fieldGoalPercentage: 51.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 80.0,
          assists: 28,
          rebounds: 46,
          offensiveRebounds: 11,
          defensiveRebounds: 35,
          steals: 9,
          blocks: 6,
          turnovers: 13,
          fouls: 20,
          pace: 102.0
        },
        {
          points: 114,
          fieldGoalPercentage: 48.0,
          threePointPercentage: 35.0,
          freeThrowPercentage: 76.0,
          assists: 26,
          rebounds: 43,
          offensiveRebounds: 10,
          defensiveRebounds: 33,
          steals: 8,
          blocks: 5,
          turnovers: 15,
          fouls: 18,
          pace: 100.5
        },
        {
          points: 125,
          fieldGoalPercentage: 52.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 82.0,
          assists: 30,
          rebounds: 47,
          offensiveRebounds: 12,
          defensiveRebounds: 35,
          steals: 10,
          blocks: 7,
          turnovers: 12,
          fouls: 19,
          pace: 103.0
        },
        {
          points: 110,
          fieldGoalPercentage: 46.0,
          threePointPercentage: 34.0,
          freeThrowPercentage: 75.0,
          assists: 25,
          rebounds: 42,
          offensiveRebounds: 10,
          defensiveRebounds: 32,
          steals: 7,
          blocks: 4,
          turnovers: 16,
          fouls: 21,
          pace: 99.5
        },
        {
          points: 118,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 37.0,
          freeThrowPercentage: 79.0,
          assists: 27,
          rebounds: 45,
          offensiveRebounds: 11,
          defensiveRebounds: 34,
          steals: 9,
          blocks: 6,
          turnovers: 14,
          fouls: 20,
          pace: 101.0
        }
      ],
      seasonAverage: {
        points: 117.2,
        fieldGoalPercentage: 49.0,
        threePointPercentage: 36.5,
        freeThrowPercentage: 78.3,
        assists: 27.2,
        rebounds: 44.5,
        offensiveRebounds: 10.8,
        defensiveRebounds: 33.7,
        steals: 8.2,
        blocks: 5.5,
        turnovers: 14.2,
        fouls: 19.8,
        pace: 101.2
      },
      vsOpponent: [
        {
          points: 118,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 37.0,
          freeThrowPercentage: 79.0,
          assists: 28,
          rebounds: 45,
          offensiveRebounds: 11,
          defensiveRebounds: 34,
          steals: 9,
          blocks: 6,
          turnovers: 14,
          fouls: 20,
          pace: 102.0
        }
      ],
      homeVsAway: {
        home: {
          points: 120.5,
          fieldGoalPercentage: 51.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 80.0,
          assists: 28.5,
          rebounds: 46.0,
          offensiveRebounds: 11.5,
          defensiveRebounds: 34.5,
          steals: 9.0,
          blocks: 6.0,
          turnovers: 13.5,
          fouls: 19.0,
          pace: 102.0
        },
        away: {
          points: 114.0,
          fieldGoalPercentage: 47.0,
          threePointPercentage: 35.0,
          freeThrowPercentage: 76.5,
          assists: 26.0,
          rebounds: 43.0,
          offensiveRebounds: 10.0,
          defensiveRebounds: 33.0,
          steals: 7.5,
          blocks: 5.0,
          turnovers: 15.0,
          fouls: 20.5,
          pace: 100.5
        }
      },
      streak: {
        type: 'win',
        count: 3
      }
    },
    players: ['p1']
  },
  {
    id: 't2',
    name: 'Golden State Warriors',
    abbreviation: 'GSW',
    conference: 'Western',
    division: 'Pacific',
    record: {
      wins: 40,
      losses: 27
    },
    stats: {
      points: 119.8,
      fieldGoalPercentage: 48.0,
      threePointPercentage: 38.5,
      freeThrowPercentage: 82.1,
      assists: 29.8,
      rebounds: 42.3,
      offensiveRebounds: 9.5,
      defensiveRebounds: 32.8,
      steals: 7.8,
      blocks: 4.5,
      turnovers: 15.2,
      fouls: 18.5,
      pace: 103.5
    },
    history: {
      lastFiveGames: [
        {
          points: 125,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 84.0,
          assists: 31,
          rebounds: 43,
          offensiveRebounds: 10,
          defensiveRebounds: 33,
          steals: 8,
          blocks: 5,
          turnovers: 14,
          fouls: 18,
          pace: 104.0
        },
        {
          points: 115,
          fieldGoalPercentage: 46.0,
          threePointPercentage: 36.0,
          freeThrowPercentage: 80.0,
          assists: 28,
          rebounds: 41,
          offensiveRebounds: 9,
          defensiveRebounds: 32,
          steals: 7,
          blocks: 4,
          turnovers: 16,
          fouls: 19,
          pace: 102.5
        },
        {
          points: 130,
          fieldGoalPercentage: 52.0,
          threePointPercentage: 42.0,
          freeThrowPercentage: 85.0,
          assists: 32,
          rebounds: 44,
          offensiveRebounds: 10,
          defensiveRebounds: 34,
          steals: 9,
          blocks: 5,
          turnovers: 13,
          fouls: 17,
          pace: 105.0
        },
        {
          points: 112,
          fieldGoalPercentage: 45.0,
          threePointPercentage: 35.0,
          freeThrowPercentage: 78.0,
          assists: 27,
          rebounds: 40,
          offensiveRebounds: 9,
          defensiveRebounds: 31,
          steals: 7,
          blocks: 4,
          turnovers: 17,
          fouls: 20,
          pace: 101.5
        },
        {
          points: 120,
          fieldGoalPercentage: 49.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 83.0,
          assists: 30,
          rebounds: 42,
          offensiveRebounds: 9,
          defensiveRebounds: 33,
          steals: 8,
          blocks: 5,
          turnovers: 15,
          fouls: 18,
          pace: 103.0
        }
      ],
      seasonAverage: {
        points: 119.8,
        fieldGoalPercentage: 48.0,
        threePointPercentage: 38.5,
        freeThrowPercentage: 82.1,
        assists: 29.8,
        rebounds: 42.3,
        offensiveRebounds: 9.5,
        defensiveRebounds: 32.8,
        steals: 7.8,
        blocks: 4.5,
        turnovers: 15.2,
        fouls: 18.5,
        pace: 103.5
      },
      vsOpponent: [
        {
          points: 120,
          fieldGoalPercentage: 49.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 83.0,
          assists: 30,
          rebounds: 42,
          offensiveRebounds: 9,
          defensiveRebounds: 33,
          steals: 8,
          blocks: 5,
          turnovers: 15,
          fouls: 18,
          pace: 103.0
        }
      ],
      homeVsAway: {
        home: {
          points: 122.5,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 84.0,
          assists: 31.0,
          rebounds: 43.0,
          offensiveRebounds: 10.0,
          defensiveRebounds: 33.0,
          steals: 8.5,
          blocks: 5.0,
          turnovers: 14.0,
          fouls: 18.0,
          pace: 104.0
        },
        away: {
          points: 117.0,
          fieldGoalPercentage: 46.0,
          threePointPercentage: 37.0,
          freeThrowPercentage: 80.0,
          assists: 28.5,
          rebounds: 41.5,
          offensiveRebounds: 9.0,
          defensiveRebounds: 32.5,
          steals: 7.0,
          blocks: 4.0,
          turnovers: 16.5,
          fouls: 19.0,
          pace: 103.0
        }
      },
      streak: {
        type: 'win',
        count: 2
      }
    },
    players: ['p2']
  },
  {
    id: 't3',
    name: 'Milwaukee Bucks',
    abbreviation: 'MIL',
    conference: 'Eastern',
    division: 'Central',
    record: {
      wins: 44,
      losses: 23
    },
    stats: {
      points: 120.5,
      fieldGoalPercentage: 49.5,
      threePointPercentage: 37.0,
      freeThrowPercentage: 77.5,
      assists: 26.5,
      rebounds: 47.2,
      offensiveRebounds: 11.5,
      defensiveRebounds: 35.7,
      steals: 7.5,
      blocks: 6.0,
      turnovers: 13.8,
      fouls: 18.2,
      pace: 102.5
    },
    history: {
      lastFiveGames: [
        {
          points: 125,
          fieldGoalPercentage: 51.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 79.0,
          assists: 27,
          rebounds: 48,
          offensiveRebounds: 12,
          defensiveRebounds: 36,
          steals: 8,
          blocks: 7,
          turnovers: 13,
          fouls: 18,
          pace: 103.0
        },
        {
          points: 118,
          fieldGoalPercentage: 48.0,
          threePointPercentage: 36.0,
          freeThrowPercentage: 76.0,
          assists: 25,
          rebounds: 46,
          offensiveRebounds: 11,
          defensiveRebounds: 35,
          steals: 7,
          blocks: 6,
          turnovers: 14,
          fouls: 19,
          pace: 102.0
        },
        {
          points: 130,
          fieldGoalPercentage: 52.0,
          threePointPercentage: 40.0,
          freeThrowPercentage: 80.0,
          assists: 28,
          rebounds: 49,
          offensiveRebounds: 12,
          defensiveRebounds: 37,
          steals: 8,
          blocks: 7,
          turnovers: 12,
          fouls: 17,
          pace: 104.0
        },
        {
          points: 115,
          fieldGoalPercentage: 47.0,
          threePointPercentage: 35.0,
          freeThrowPercentage: 75.0,
          assists: 24,
          rebounds: 45,
          offensiveRebounds: 11,
          defensiveRebounds: 34,
          steals: 7,
          blocks: 5,
          turnovers: 15,
          fouls: 19,
          pace: 101.0
        },
        {
          points: 122,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 37.0,
          freeThrowPercentage: 78.0,
          assists: 26,
          rebounds: 47,
          offensiveRebounds: 11,
          defensiveRebounds: 36,
          steals: 8,
          blocks: 6,
          turnovers: 14,
          fouls: 18,
          pace: 103.0
        }
      ],
      seasonAverage: {
        points: 120.5,
        fieldGoalPercentage: 49.5,
        threePointPercentage: 37.0,
        freeThrowPercentage: 77.5,
        assists: 26.5,
        rebounds: 47.2,
        offensiveRebounds: 11.5,
        defensiveRebounds: 35.7,
        steals: 7.5,
        blocks: 6.0,
        turnovers: 13.8,
        fouls: 18.2,
        pace: 102.5
      },
      vsOpponent: [
        {
          points: 122,
          fieldGoalPercentage: 50.0,
          threePointPercentage: 37.0,
          freeThrowPercentage: 78.0,
          assists: 26,
          rebounds: 47,
          offensiveRebounds: 11,
          defensiveRebounds: 36,
          steals: 8,
          blocks: 6,
          turnovers: 14,
          fouls: 18,
          pace: 103.0
        }
      ],
      homeVsAway: {
        home: {
          points: 124.0,
          fieldGoalPercentage: 51.0,
          threePointPercentage: 38.0,
          freeThrowPercentage: 79.0,
          assists: 27.0,
          rebounds: 48.0,
          offensiveRebounds: 12.0,
          defensiveRebounds: 36.0,
          steals: 8.0,
          blocks: 6.5,
          turnovers: 13.0,
          fouls: 18.0,
          pace: 103.0
        },
        away: {
          points: 117.0,
          fieldGoalPercentage: 48.0,
          threePointPercentage: 36.0,
          freeThrowPercentage: 76.0,
          assists: 25.0,
          rebounds: 46.0,
          offensiveRebounds: 11.0,
          defensiveRebounds: 35.0,
          steals: 7.0,
          blocks: 5.5,
          turnovers: 14.5,
          fouls: 19.0,
          pace: 102.0
        }
      },
      streak: {
        type: 'win',
        count: 4
      }
    },
    players: ['p3']
  }
]