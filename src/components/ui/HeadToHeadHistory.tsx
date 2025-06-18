import React from 'react'
import { HeadToHead } from '../../types'

interface HeadToHeadHistoryProps {
  history: HeadToHead
  team1Name: string
  team2Name: string
}

const HeadToHeadHistory: React.FC<HeadToHeadHistoryProps> = ({
  history,
  team1Name,
  team2Name
}) => {
  const { lastFiveGames, overall } = history
  
  // Calculate win percentages
  const team1WinPercentage = (overall.team1Wins / (overall.team1Wins + overall.team2Wins)) * 100
  const team2WinPercentage = (overall.team2Wins / (overall.team1Wins + overall.team2Wins)) * 100
  
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="text-lg font-semibold mb-3">All-Time Record</h4>
        
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1 text-sm font-medium">
              <span className="text-blue-600">{team1Name}</span>
              <span className="text-red-600">{team2Name}</span>
            </div>
            
            <div className="flex h-6 overflow-hidden rounded-md">
              <div 
                className="bg-blue-500 h-full"
                style={{ width: `${team1WinPercentage}%` }}
              >
                <span className="px-2 text-xs text-white font-medium flex items-center h-full">
                  {overall.team1Wins}
                </span>
              </div>
              <div 
                className="bg-red-500 h-full"
                style={{ width: `${team2WinPercentage}%` }}
              >
                <span className="px-2 text-xs text-white font-medium flex items-center h-full justify-end w-full">
                  {overall.team2Wins}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-3">Recent Matchups</h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {team1Name}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {team2Name}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Winner
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {lastFiveGames.map((game, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {game.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {game.score.team1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {game.score.team2}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        game.winner === team1Name
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {game.winner}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HeadToHeadHistory