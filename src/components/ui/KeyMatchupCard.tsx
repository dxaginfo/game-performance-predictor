import React from 'react'
import { KeyPlayerMatchup } from '../../types'

interface KeyMatchupCardProps {
  matchup: KeyPlayerMatchup
  team1Name: string
  team2Name: string
}

const KeyMatchupCard: React.FC<KeyMatchupCardProps> = ({
  matchup,
  team1Name,
  team2Name
}) => {
  const { player1, player2, advantage } = matchup
  
  // Determine color based on advantage size
  const getAdvantageColor = () => {
    switch (advantage.size) {
      case 'significant':
        return 'bg-green-100 text-green-800'
      case 'moderate':
        return 'bg-blue-100 text-blue-800'
      case 'slight':
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-lg mr-3">
            {player1.name.charAt(0)}
          </div>
          <div>
            <h5 className="font-semibold">{player1.name}</h5>
            <div className="text-xs text-gray-500">{team1Name}</div>
          </div>
        </div>
        
        <div className="font-bold text-gray-400">VS</div>
        
        <div className="flex items-center">
          <div className="text-right mr-3">
            <h5 className="font-semibold">{player2.name}</h5>
            <div className="text-xs text-gray-500">{team2Name}</div>
          </div>
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-lg">
            {player2.name.charAt(0)}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
        <div>
          <div className="font-bold">{player1.stats.points.toFixed(1)}</div>
          <div className="text-xs text-gray-500">PPG</div>
        </div>
        <div>
          <div className="font-bold">{player1.stats.rebounds.toFixed(1)}</div>
          <div className="text-xs text-gray-500">RPG</div>
        </div>
        <div>
          <div className="font-bold">{player1.stats.assists.toFixed(1)}</div>
          <div className="text-xs text-gray-500">APG</div>
        </div>
        
        <div>
          <div className="font-bold">{player2.stats.points.toFixed(1)}</div>
          <div className="text-xs text-gray-500">PPG</div>
        </div>
        <div>
          <div className="font-bold">{player2.stats.rebounds.toFixed(1)}</div>
          <div className="text-xs text-gray-500">RPG</div>
        </div>
        <div>
          <div className="font-bold">{player2.stats.assists.toFixed(1)}</div>
          <div className="text-xs text-gray-500">APG</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-700">
          <span className="font-medium">Advantage:</span> {advantage.player}
        </div>
        
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getAdvantageColor()}`}>
          {advantage.size.charAt(0).toUpperCase() + advantage.size.slice(1)}
        </div>
      </div>
      
      <div className="mt-2 text-sm text-gray-600">
        {advantage.description}
      </div>
    </div>
  )
}

export default KeyMatchupCard