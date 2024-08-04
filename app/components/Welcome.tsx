// app/components/Welcome.tsx
import React from 'react';
import { useTeams } from '../contexts/TeamContext';
import TeamCreate from './TeamCreate';
import TeamList from './TeamList';

const Welcome: React.FC = () => {
  const { teams, addTeam } = useTeams();

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Bienvenido a ATC Dream Match</h1>
      <p className="mt-4 text-lg">¡Crea el partido de tus sueños con tus jugadores favoritos!</p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-blue-600 text-white p-2 rounded"
          onClick={() => addTeam('Equipo 1')}
        >
          Crear Equipo 1
        </button>
        <button
          className="bg-green-600 text-white p-2 rounded"
          onClick={() => addTeam('Equipo 2')}
        >
          Crear Equipo 2
        </button>
      </div>
      {teams.length > 0 && (
        <>
          <TeamCreate />
          <TeamList />
        </>
      )}
    </div>
  );
};

export default Welcome;
