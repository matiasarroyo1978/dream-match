import React, { useState, useEffect } from 'react';
import { getPlayers } from '../../api/data';
import { Player } from '../../api/types'; 

const TeamCreate = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers();
        // Verifica que data sea un arreglo antes de establecer el estado
        if (Array.isArray(data)) {
          setPlayers(data);
        } else {
          console.error('La respuesta de getPlayers no es un arreglo:', data);
        }
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  const handlePlayerSelect = (playerId: string) => {
    setSelectedPlayers((prevSelected) =>
      prevSelected.includes(playerId)
        ? prevSelected.filter((id) => id !== playerId)
        : [...prevSelected, playerId]
    );
  };

  return (
    <div>
      <h2>Create Team</h2>
      <label>
        Select Players:
        <ul>
          {players.map((player) => (
            <li key={player.player_id}>
              <input
                type="checkbox"
                value={player.player_id}
                checked={selectedPlayers.includes(player.player_id)}
                onChange={() => handlePlayerSelect(player.player_id)}
              />
              {player.player_name}
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default TeamCreate;
