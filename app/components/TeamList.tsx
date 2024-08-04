// app/components/TeamList.tsx
import React from 'react';
import { useTeams } from '../contexts/TeamContext';
import TeamDetail from './TeamDetail';

const TeamList: React.FC = () => {
  const { teams } = useTeams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Equipos Creados</h2>
      <div className="grid grid-cols-1 gap-4">
        {teams.map(team => (
          <TeamDetail key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
