import React from 'react'
import { StatPrediction } from '../../types'

interface StatPredictionCardProps {
  title: string
  prediction?: StatPrediction
  icon: string
  primaryStat?: boolean
  lowerIsBetter?: boolean
  isPercentage?: boolean
}

const StatPredictionCard: React.FC<StatPredictionCardProps> = ({
  title,
  prediction,
  icon,
  primaryStat = false,
  lowerIsBetter = false,
  isPercentage = false
}) => {
  if (!prediction) return null

  // Format the values
  const formatValue = (value: number) => {
    return isPercentage ? `${value.toFixed(1)}%` : value.toFixed(1)
  }

  const confidenceLevel = prediction.confidence >= 80 
    ? 'High' 
    : prediction.confidence >= 60 
      ? 'Medium' 
      : 'Low'

  const confidenceColor = prediction.confidence >= 80 
    ? 'text-green-600' 
    : prediction.confidence >= 60 
      ? 'text-yellow-600' 
      : 'text-red-600'

  return (
    <div className={`bg-white border rounded-lg shadow-sm p-4 ${primaryStat ? 'border-primary' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </h4>
        <div className={`text-xs font-medium px-2 py-1 rounded-full ${confidenceColor} bg-opacity-10`}>
          {confidenceLevel} confidence
        </div>
      </div>
      
      <div className="text-3xl font-bold mb-2">
        {formatValue(prediction.average)}
      </div>
      
      <div className="text-sm text-gray-600">
        <div className="flex justify-between mb-1">
          <span>Range:</span>
          <span className="font-medium">
            {formatValue(prediction.low)} - {formatValue(prediction.high)}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${prediction.confidence}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default StatPredictionCard