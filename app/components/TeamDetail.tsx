// app/components/TeamDetail.tsx
import React from 'react';

interface Player {
  player_id: string;
  player_name: string;
  player_image: string;
  player_type: string;
}

interface Team {
  id: number;
  name: string;
  players: Player[];
}

interface TeamDetailProps {
  team: Team;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-bold mb-2">{team.name}</h3>
      <h4 className="text-md font-semibold mt-4">Jugadores:</h4>
      <ul>
        {team.players.map(player => (
          <li key={player.player_id}>
            {player.player_name} - {player.player_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetail;
