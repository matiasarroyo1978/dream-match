// app/components/TeamCreate.tsx
import React, { useState } from 'react';
import { useTeams } from '../contexts/TeamContext';
import { Player } from '../../api/types';

const TeamCreate: React.FC = () => {
  const { teams, addPlayerToTeam } = useTeams();
  const [playerName, setPlayerName] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const handleAddPlayer = () => {
    if (selectedTeamId !== null && playerName.trim() !== '') {
      const newPlayer: Player = {
        player_id: Date.now().toString(),
        player_name: playerName,
        player_image: '',
        player_type: '',
        player_age: ''
      };
      addPlayerToTeam(selectedTeamId, newPlayer);
      setPlayerName('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Agregar Jugadores</h2>
      <div className="mb-4">
        <select
          value={selectedTeamId ?? ''}
          onChange={(e) => setSelectedTeamId(Number(e.target.value))}
          className="p-2 border rounded"
        >
          <option value="" disabled>Seleccione un equipo</option>
          {teams.map(team => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Nombre del jugador"
          className="p-2 border rounded w-full"
        />
      </div>
      <button
        className="bg-blue-600 text-white p-2 rounded"
        onClick={handleAddPlayer}
      >
        Agregar Jugador
      </button>
    </div>
  );
};

export default TeamCreate;
