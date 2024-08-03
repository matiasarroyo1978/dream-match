import React, { useState } from 'react';
import axios from 'axios';
import { getPlayers } from '../../api/data';

const TeamCreate = () => {
  const [teamName, setTeamName] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[] | []>([]);

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  const handlePlayerSelection = (player:any) => {
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    // Create a new team with the selected players
    // ...
  };

  React.useEffect(() => {
    const fetchPlayers = async () => {
      const players = await getPlayers();
      setPlayers(players);
    };
    fetchPlayers();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Team Name:
        <input type="text" value={teamName} onChange={handleTeamNameChange} />
      </label>
      <ul>
        {players.map((player) => (
          <li key={player.player_id}>
            <input
              type="checkbox"
              checked={selectedPlayers.includes(player.player_id)}
              onChange={() => handlePlayerSelection(player)}
            />
            {player.player_name}
          </li>
        ))}
      </ul>
      <button type="submit">Create Team</button>
    </form>
  );
};

export default TeamCreate;