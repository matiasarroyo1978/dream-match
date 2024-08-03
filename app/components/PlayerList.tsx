import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Player {
  player_id: string;
  player_name: string;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await axios.get('https://apifootball.com/api/?action=get_players&APIkey=YOUR_API_KEY');
      setPlayers(response.data);
    };

    fetchPlayers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Jugadores Disponibles</h2>
      <ul className="grid grid-cols-1 gap-4">
        {players.map((player) => (
          <li key={player.player_id} className="border p-2 rounded">
            {player.player_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;

