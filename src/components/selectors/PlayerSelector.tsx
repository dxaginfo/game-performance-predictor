import React from 'react'
import { Player } from '../../types'

interface PlayerSelectorProps {
  players: Player[]
  selectedPlayerId: string
  onPlayerSelect: (playerId: string) => void
}

const PlayerSelector: React.FC<PlayerSelectorProps> = ({ 
  players, 
  selectedPlayerId, 
  onPlayerSelect 
}) => {
  return (
    <div className="relative">
      <select
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-white py-2 pl-3 pr-10 text-sm"
        value={selectedPlayerId}
        onChange={(e) => onPlayerSelect(e.target.value)}
      >
        <option value="" disabled>Select a player</option>
        {players.map((player) => (
          <option key={player.id} value={player.id}>
            {player.name} ({player.team} - {player.position})
          </option>
        ))}
      </select>
    </div>
  )
}

export default PlayerSelector