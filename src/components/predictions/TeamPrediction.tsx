import React from 'react'
import { useAppContext } from '../../context/AppContext'
import TeamSelector from '../selectors/TeamSelector'
import StatPredictionCard from '../ui/StatPredictionCard'
import FactorsList from '../ui/FactorsList'
import WinProbabilityGauge from '../ui/WinProbabilityGauge'

const TeamPrediction: React.FC = () => {
  const {
    teams,
    selectedTeam,
    selectedOpponent,
    teamPrediction,
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
        <h2 className="text-2xl font-bold mb-4">Team Performance Prediction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Team</label>
            <TeamSelector 
              teams={teams}
              selectedTeamId={selectedTeam?.id || ''}
              onTeamSelect={selectTeam}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Opponent</label>
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
            Generate Prediction
          </button>
        </div>
      </div>
      
      {selectedTeam && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                {selectedTeam.abbreviation}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold">{selectedTeam.name}</h3>
              <div className="text-gray-600">
                {selectedTeam.conference} Conference | {selectedTeam.division} Division
              </div>
              <div className="mt-1 flex items-center">
                <span className="font-semibold">{selectedTeam.record.wins}-{selectedTeam.record.losses}</span>
                <span className="mx-2">|</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedTeam.history.streak.type === 'win' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {selectedTeam.history.streak.type === 'win' ? 'W' : 'L'}{selectedTeam.history.streak.count}
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">PPG</div>
              <div className="text-2xl font-bold">{selectedTeam.stats.points.toFixed(1)}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">FG%</div>
              <div className="text-2xl font-bold">{selectedTeam.stats.fieldGoalPercentage.toFixed(1)}%</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Assists</div>
              <div className="text-2xl font-bold">{selectedTeam.stats.assists.toFixed(1)}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Rebounds</div>
              <div className="text-2xl font-bold">{selectedTeam.stats.rebounds.toFixed(1)}</div>
            </div>
          </div>
        </div>
      )}
      
      {teamPrediction && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Performance Prediction</h3>
          
          {teamPrediction.winProbability !== undefined && (
            <div className="mb-6">
              <WinProbabilityGauge 
                winProbability={teamPrediction.winProbability}
                teamName={selectedTeam?.name || ''}
                opponentName={selectedOpponent?.name || ''}
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <StatPredictionCard 
              title="Points"
              prediction={teamPrediction.team?.points}
              icon="🏀"
              primaryStat
            />
            
            <StatPredictionCard 
              title="FG%"
              prediction={teamPrediction.team?.fieldGoalPercentage}
              icon="🎯"
              isPercentage
            />
            
            <StatPredictionCard 
              title="3P%"
              prediction={teamPrediction.team?.threePointPercentage}
              icon="🔥"
              isPercentage
            />
            
            <StatPredictionCard 
              title="Assists"
              prediction={teamPrediction.team?.assists}
              icon="👐"
            />
            
            <StatPredictionCard 
              title="Rebounds"
              prediction={teamPrediction.team?.rebounds}
              icon="🔄"
            />
            
            <StatPredictionCard 
              title="Turnovers"
              prediction={teamPrediction.team?.turnovers}
              icon="❌"
              lowerIsBetter
            />
          </div>
          
          <FactorsList 
            title="Factors Considered"
            factors={teamPrediction.factorsConsidered}
          />
          
          <div className="text-xs text-gray-500 mt-4">
            Prediction generated at: {new Date(teamPrediction.timestamp).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamPrediction