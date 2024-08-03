import axios from 'axios';
import { Player, Team } from './types';  // Asegúrate de ajustar la ruta según tu estructura de carpetas

interface GetPlayers {
  (): Promise<Player[]>;
}

interface GetTeams {
  (): Promise<Team[]>;
}

const apiUrl = 'https://apiv3.apifootball.com/';
const apiToken = 'f50eeec1a82e1fa661c03ac07d770d028253266c5ddd122cf4270bb8ff954441';

// Función para obtener jugadores
const getPlayers: GetPlayers = async (): Promise<Player[]> => {
  try {
    const response = await axios.get(`${apiUrl}`, {
      params: {
        action: 'get_players',
        league_id: '302', // Ajusta este valor según sea necesario
        APIkey: apiToken,
      },
    });

    // Verifica si la respuesta es un arreglo y devuelve solo los jugadores
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('La respuesta no es un arreglo:', response.data);
      return [];
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      console.error('Error response:', error.response);
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};

// Función para obtener equipos
const getTeams: GetTeams = async (): Promise<Team[]> => {
  try {
    const response = await axios.get(`${apiUrl}`, {
      params: {
        action: 'get_teams',
        league_id: '302', // Ajusta este valor según sea necesario
        APIkey: apiToken,
      },
    });

    // Verifica si la respuesta es un arreglo y devuelve solo los equipos
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('La respuesta no es un arreglo:', response.data);
      return [];
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      console.error('Error response:', error.response);
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};

export { getPlayers, getTeams };
