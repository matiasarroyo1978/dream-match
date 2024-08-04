import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Player } from '../../api/types'; 

interface Team {
  id: number;
  name: string;
  players: Player[];
}

interface TeamContextType {
  teams: Team[];
  addTeam: (name: string) => void;
  removeTeam: (id: number) => void;
  addPlayerToTeam: (teamId: number, player: Player) => void;
  removePlayerFromTeam: (teamId: number, playerId: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const useTeams = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeams must be used within a TeamProvider');
  }
  return context;
};

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  const addTeam = (name: string) => {
    if (teams.length < 2) {
      const newTeam: Team = {
        id: Date.now(),  // Genera una clave única
        name,
        players: []
      };
      setTeams([...teams, newTeam]);
    }
  };

  const removeTeam = (id: number) => {
    setTeams(teams.filter(team => team.id !== id));
  };

  const addPlayerToTeam = (teamId: number, player: Player) => {
    setTeams(teams.map(team => {
      if (team.id === teamId && team.players.length < 5) {
        return { ...team, players: [...team.players, player] };
      }
      return team;
    }));
  };

  const removePlayerFromTeam = (teamId: number, playerId: string) => {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        return { ...team, players: team.players.filter(player => player.player_id !== playerId) };
      }
      return team;
    }));
  };

  return (
    <TeamContext.Provider value={{ teams, addTeam, removeTeam, addPlayerToTeam, removePlayerFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
};
