import React from 'react'
import { useAppContext } from '../../context/AppContext'
import TeamSelector from '../selectors/TeamSelector'
import AdvantageCard from '../ui/AdvantageCard'
import HeadToHeadHistory from '../ui/HeadToHeadHistory'
import KeyMatchupCard from '../ui/KeyMatchupCard'
import MatchupInsightCard from '../ui/MatchupInsightCard'

const MatchupAnalysis: React.FC = () => {
  const {
    teams,
    selectedTeam,
    selectedOpponent,
    matchupAnalysis,
    selectTeam,
    selectOpponent,
    generatePredictions
  } = useAppContext()

  if (!teams.length) {
    return <div className="text-center py-8">No team data available</div>
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Matchup Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Team 1</label>
            <TeamSelector 
              teams={teams}
              selectedTeamId={selectedTeam?.id || ''}
              onTeamSelect={selectTeam}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Team 2</label>
            <TeamSelector 
              teams={teams}
              selectedTeamId={selectedOpponent?.id || ''}
              onTeamSelect={selectOpponent}
              excludeTeamId={selectedTeam?.id}
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            className="btn btn-primary"
            onClick={generatePredictions}
            disabled={!selectedTeam || !selectedOpponent || selectedTeam.id === selectedOpponent.id}
          >
            Analyze Matchup
          </button>
        </div>
      </div>
      
      {selectedTeam && selectedOpponent && matchupAnalysis && (
        <>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 mb-6">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  {selectedTeam.abbreviation}
                </div>
                <h3 className="text-lg font-semibold">{selectedTeam.name}</h3>
                <div className="text-sm text-gray-600">{selectedTeam.record.wins}-{selectedTeam.record.losses}</div>
              </div>
              
              <div className="text-3xl font-bold text-gray-400 mb-4 md:mb-0">VS</div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  {selectedOpponent.abbreviation}
                </div>
                <h3 className="text-lg font-semibold">{selectedOpponent.name}</h3>
                <div className="text-sm text-gray-600">{selectedOpponent.record.wins}-{selectedOpponent.record.losses}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MatchupInsightCard 
                title="Game Pace"
                value={matchupAnalysis.pace}
                icon="⏱️"
              />
              
              <MatchupInsightCard 
                title="Scoring Potential"
                value={matchupAnalysis.scoringPotential}
                icon="🔥"
              />
              
              <MatchupInsightCard 
                title="Injury Impact"
                value={matchupAnalysis.injuryImpact}
                icon="🚑"
                textOnly
              />
            </div>
          </div>
          
          {matchupAnalysis.advantages.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Team Advantages</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchupAnalysis.advantages.map((advantage, index) => (
                  <AdvantageCard 
                    key={index}
                    advantage={advantage}
                    team1Name={selectedTeam.name}
                    team2Name={selectedOpponent.name}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Head-to-Head History</h3>
            
            <HeadToHeadHistory 
              history={matchupAnalysis.headToHead}
              team1Name={selectedTeam.name}
              team2Name={selectedOpponent.name}
            />
          </div>
          
          {matchupAnalysis.keyMatchups.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Key Player Matchups</h3>
              
              <div className="space-y-4">
                {matchupAnalysis.keyMatchups.map((matchup, index) => (
                  <KeyMatchupCard 
                    key={index}
                    matchup={matchup}
                    team1Name={selectedTeam.name}
                    team2Name={selectedOpponent.name}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MatchupAnalysis