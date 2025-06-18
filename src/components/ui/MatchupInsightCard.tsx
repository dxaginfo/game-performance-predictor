import React from 'react'

interface MatchupInsightCardProps {
  title: string
  value: string
  icon: string
  textOnly?: boolean
}

const MatchupInsightCard: React.FC<MatchupInsightCardProps> = ({
  title,
  value,
  icon,
  textOnly = false
}) => {
  // Get the color for the value
  const getValueColor = () => {
    if (textOnly) return ''
    
    if (title === 'Game Pace') {
      switch (value.toLowerCase()) {
        case 'fast':
          return 'bg-red-100 text-red-800'
        case 'slow':
          return 'bg-blue-100 text-blue-800'
        case 'moderate':
        default:
          return 'bg-yellow-100 text-yellow-800'
      }
    }
    
    if (title === 'Scoring Potential') {
      switch (value.toLowerCase()) {
        case 'high':
          return 'bg-green-100 text-green-800'
        case 'low':
          return 'bg-gray-100 text-gray-800'
        case 'average':
        default:
          return 'bg-yellow-100 text-yellow-800'
      }
    }
    
    return 'bg-gray-100 text-gray-800'
  }
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <span className="text-xl mr-2">{icon}</span>
        <h5 className="font-semibold">{title}</h5>
      </div>
      
      {textOnly ? (
        <p className="text-sm text-gray-700">{value}</p>
      ) : (
        <div className="flex justify-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getValueColor()}`}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        </div>
      )}
    </div>
  )
}

export default MatchupInsightCard