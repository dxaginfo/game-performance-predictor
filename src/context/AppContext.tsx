import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { Player, Team, Prediction, MatchupAnalysis } from '../types'
import { samplePlayers, sampleTeams } from '../data/sampleData'
import { generatePlayerPrediction, generateTeamPrediction, analyzeMatchup } from '../utils/predictionEngine'

interface AppContextType {
  players: Player[]
  teams: Team[]
  selectedPlayer: Player | null
  selectedTeam: Team | null
  selectedOpponent: Team | null
  playerPrediction: Prediction | null
  teamPrediction: Prediction | null
  matchupAnalysis: MatchupAnalysis | null
  isLoading: boolean
  selectPlayer: (playerId: string) => void
  selectTeam: (teamId: string) => void
  selectOpponent: (teamId: string) => void
  generatePredictions: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [players] = useState<Player[]>(samplePlayers)
  const [teams] = useState<Team[]>(sampleTeams)
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [selectedOpponent, setSelectedOpponent] = useState<Team | null>(null)
  const [playerPrediction, setPlayerPrediction] = useState<Prediction | null>(null)
  const [teamPrediction, setTeamPrediction] = useState<Prediction | null>(null)
  const [matchupAnalysis, setMatchupAnalysis] = useState<MatchupAnalysis | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const selectPlayer = (playerId: string) => {
    const player = players.find(p => p.id === playerId) || null
    setSelectedPlayer(player)
    
    // Reset prediction when player changes
    setPlayerPrediction(null)
  }

  const selectTeam = (teamId: string) => {
    const team = teams.find(t => t.id === teamId) || null
    setSelectedTeam(team)
    
    // Reset prediction when team changes
    setTeamPrediction(null)
    setMatchupAnalysis(null)
  }

  const selectOpponent = (teamId: string) => {
    const team = teams.find(t => t.id === teamId) || null
    setSelectedOpponent(team)
    
    // Reset matchup analysis when opponent changes
    setMatchupAnalysis(null)
  }

  const generatePredictions = async () => {
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    if (selectedPlayer) {
      const prediction = generatePlayerPrediction(selectedPlayer, selectedOpponent)
      setPlayerPrediction(prediction)
    }
    
    if (selectedTeam && selectedOpponent) {
      const prediction = generateTeamPrediction(selectedTeam, selectedOpponent)
      setTeamPrediction(prediction)
      
      const analysis = analyzeMatchup(selectedTeam, selectedOpponent)
      setMatchupAnalysis(analysis)
    }
    
    setIsLoading(false)
  }

  // Pre-select the first player and team on initial load
  useEffect(() => {
    if (players.length > 0 && !selectedPlayer) {
      selectPlayer(players[0].id)
    }
    
    if (teams.length > 0 && !selectedTeam) {
      selectTeam(teams[0].id)
    }
    
    if (teams.length > 1 && !selectedOpponent) {
      selectOpponent(teams[1].id)
    }
  }, [players, teams])

  const value = {
    players,
    teams,
    selectedPlayer,
    selectedTeam,
    selectedOpponent,
    playerPrediction,
    teamPrediction,
    matchupAnalysis,
    isLoading,
    selectPlayer,
    selectTeam,
    selectOpponent,
    generatePredictions
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}