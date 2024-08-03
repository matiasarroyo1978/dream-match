"use client"
import React, { useState } from 'react';

const TeamForm: React.FC = () => {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para crear el equipo
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Nombre del equipo"
        className="border p-2 rounded w-full mb-4"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Crear Equipo
      </button>
    </form>
  );
};

export default TeamForm;
