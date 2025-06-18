import React from 'react'
import { useAppContext } from '../../context/AppContext'
import PlayerSelector from '../selectors/PlayerSelector'
import TeamSelector from '../selectors/TeamSelector'
import StatPredictionCard from '../ui/StatPredictionCard'
import FactorsList from '../ui/FactorsList'

const PlayerPrediction: React.FC = () => {
  const {
    players,
    teams,
    selectedPlayer,
    selectedOpponent,
    playerPrediction,
    selectPlayer,
    selectOpponent,
    generatePredictions
  } = useAppContext()

  if (!players.length) {
    return <div className="text-center py-8">No player data available</div>
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Player Performance Prediction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Player</label>
            <PlayerSelector 
              players={players}
              selectedPlayerId={selectedPlayer?.id || ''}
              onPlayerSelect={selectPlayer}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Opponent Team</label>
            <TeamSelector 
              teams={teams}
              selectedTeamId={selectedOpponent?.id || ''}
              onTeamSelect={selectOpponent}
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            className="btn btn-primary"
            onClick={generatePredictions}
          >
            Generate Prediction
          </button>
        </div>
      </div>
      
      {selectedPlayer && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold">
                {selectedPlayer.name.charAt(0)}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold">{selectedPlayer.name}</h3>
              <div className="text-gray-600">
                {selectedPlayer.position} | {selectedPlayer.team} | #{selectedPlayer.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {selectedPlayer.height}, {selectedPlayer.weight} lbs | {selectedPlayer.age} years | {selectedPlayer.experience} yrs exp
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Season PPG</div>
              <div className="text-2xl font-bold">{selectedPlayer.stats.points.toFixed(1)}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Season RPG</div>
              <div className="text-2xl font-bold">{selectedPlayer.stats.rebounds.toFixed(1)}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Season APG</div>
              <div className="text-2xl font-bold">{selectedPlayer.stats.assists.toFixed(1)}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">FG%</div>
              <div className="text-2xl font-bold">{selectedPlayer.stats.fieldGoalPercentage.toFixed(1)}%</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">3P%</div>
              <div className="text-2xl font-bold">{selectedPlayer.stats.threePointPercentage.toFixed(1)}%</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">FT%</div>
              <div className="text-2xl font-bold">{selectedPlayer.stats.freeThrowPercentage.toFixed(1)}%</div>
            </div>
          </div>
        </div>
      )}
      
      {playerPrediction && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Performance Prediction</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <StatPredictionCard 
              title="Points"
              prediction={playerPrediction.player?.points}
              icon="🏀"
              primaryStat
            />
            
            <StatPredictionCard 
              title="Rebounds"
              prediction={playerPrediction.player?.rebounds}
              icon="🔄"
            />
            
            <StatPredictionCard 
              title="Assists"
              prediction={playerPrediction.player?.assists}
              icon="👐"
            />
            
            <StatPredictionCard 
              title="FG%"
              prediction={playerPrediction.player?.fieldGoalPercentage}
              icon="🎯"
              isPercentage
            />
            
            <StatPredictionCard 
              title="3P%"
              prediction={playerPrediction.player?.threePointPercentage}
              icon="🔥"
              isPercentage
            />
            
            <StatPredictionCard 
              title="Minutes"
              prediction={playerPrediction.player?.minutes}
              icon="⏱️"
            />
          </div>
          
          <FactorsList 
            title="Factors Considered"
            factors={playerPrediction.factorsConsidered}
          />
          
          <div className="text-xs text-gray-500 mt-4">
            Prediction generated at: {new Date(playerPrediction.timestamp).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  )
}

export default PlayerPrediction