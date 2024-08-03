import React from 'react';
import { useTeams } from '../contexts/TeamContext';

interface Player {
  player_id: string;
  player_name: string;
}

interface TeamDetailProps {
  team: {
    id: number;
    name: string;
    players: Player[];
  };
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team }) => {
  const { removeTeam, addPlayerToTeam, removePlayerFromTeam } = useTeams();

  const handleRemoveTeam = () => {
    removeTeam(team.id);
  };

  const handleAddPlayer = (player: Player) => {
    addPlayerToTeam(team.id, player);
  };

  const handleRemovePlayer = (playerId: string) => {
    removePlayerFromTeam(team.id, playerId);
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
      <ul className="mb-2">
        {team.players.map(player => (
          <li key={player.player_id} className="flex justify-between items-center">
            {player.player_name}
            <button onClick={() => handleRemovePlayer(player.player_id)} className="text-red-500 ml-2">Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleRemoveTeam} className="bg-red-600 text-white p-2 rounded w-full">Eliminar Equipo</button>
      {/* Aquí puedes agregar la lógica para asignar jugadores */}
    </div>
  );
};

export default TeamDetail;
