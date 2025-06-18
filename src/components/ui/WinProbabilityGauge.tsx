import React from 'react'

interface WinProbabilityGaugeProps {
  winProbability: number
  teamName: string
  opponentName: string
}

const WinProbabilityGauge: React.FC<WinProbabilityGaugeProps> = ({
  winProbability,
  teamName,
  opponentName
}) => {
  // Convert to percentage for display
  const winPercentage = Math.round(winProbability * 100)
  
  // Determine the colors based on the probability
  const getGaugeColor = () => {
    if (winPercentage >= 65) return 'bg-green-500'
    if (winPercentage >= 50) return 'bg-green-400'
    if (winPercentage >= 35) return 'bg-yellow-500'
    return 'bg-red-500'
  }
  
  // Determine the message based on the probability
  const getMessage = () => {
    if (winPercentage >= 75) return 'Strong favorite'
    if (winPercentage >= 60) return 'Favored to win'
    if (winPercentage >= 50) return 'Slight edge'
    if (winPercentage >= 40) return 'Slight underdog'
    if (winPercentage >= 25) return 'Underdog'
    return 'Heavy underdog'
  }
  
  return (
    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
      <h4 className="text-lg font-semibold mb-4 text-center">Win Probability</h4>
      
      <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className={`absolute top-0 left-0 h-full ${getGaugeColor()} rounded-l-full transition-all duration-500 ease-out`} 
          style={{ width: `${winPercentage}%` }}
        ></div>
        
        <div className="absolute top-0 left-1/2 h-full border-l-2 border-gray-400 border-dashed transform -translate-x-1/2"></div>
        
        <div 
          className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-sm font-bold text-white drop-shadow-md"
        >
          {winPercentage}%
        </div>
      </div>
      
      <div className="flex justify-between text-sm font-medium mb-1">
        <div>{teamName}</div>
        <div>{opponentName}</div>
      </div>
      
      <div className="text-center mt-4">
        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
          {getMessage()}
        </span>
      </div>
    </div>
  )
}

export default WinProbabilityGauge