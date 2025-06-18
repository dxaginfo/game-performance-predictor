import React from 'react'
import { Team } from '../../types'

interface TeamSelectorProps {
  teams: Team[]
  selectedTeamId: string
  onTeamSelect: (teamId: string) => void
  excludeTeamId?: string
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ 
  teams, 
  selectedTeamId, 
  onTeamSelect,
  excludeTeamId
}) => {
  // Filter out the excluded team if provided
  const filteredTeams = excludeTeamId 
    ? teams.filter(team => team.id !== excludeTeamId)
    : teams

  return (
    <div className="relative">
      <select
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-white py-2 pl-3 pr-10 text-sm"
        value={selectedTeamId}
        onChange={(e) => onTeamSelect(e.target.value)}
      >
        <option value="" disabled>Select a team</option>
        {filteredTeams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name} ({team.record.wins}-{team.record.losses})
          </option>
        ))}
      </select>
    </div>
  )
}

export default TeamSelector