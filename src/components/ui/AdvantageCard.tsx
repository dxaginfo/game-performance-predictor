import React from 'react'
import { MatchupAdvantage } from '../../types'

interface AdvantageCardProps {
  advantage: MatchupAdvantage
  team1Name: string
  team2Name: string
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  advantage,
  team1Name,
  team2Name
}) => {
  // Determine if the advantage belongs to team1 or team2
  const isTeam1Advantage = advantage.team === team1Name
  
  // Determine the size of the advantage
  const getAdvantageSize = () => {
    if (advantage.difference >= 10) return 'Significant'
    if (advantage.difference >= 5) return 'Notable'
    return 'Slight'
  }
  
  // Determine the bar color
  const getBarColor = () => {
    return isTeam1Advantage ? 'bg-blue-500' : 'bg-red-500'
  }
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-semibold text-gray-900">{advantage.category}</h5>
        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
          {getAdvantageSize()}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{advantage.description}</p>
      
      <div className="flex items-center justify-between text-xs font-medium mb-1">
        <span className={isTeam1Advantage ? 'text-blue-600' : 'text-gray-500'}>
          {team1Name}
        </span>
        <span className={!isTeam1Advantage ? 'text-red-600' : 'text-gray-500'}>
          {team2Name}
        </span>
      </div>
      
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        {isTeam1Advantage ? (
          <div 
            className="h-full bg-blue-500 rounded-l-full" 
            style={{ width: `${Math.min(advantage.difference * 5, 90)}%` }}
          ></div>
        ) : (
          <div className="flex justify-end w-full h-full">
            <div 
              className="h-full bg-red-500 rounded-r-full" 
              style={{ width: `${Math.min(advantage.difference * 5, 90)}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdvantageCard