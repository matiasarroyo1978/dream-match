import axios from 'axios';

interface Team {
  id: number;
  name: string;
  players: string[];
}

interface GetPlayers {
  (): Promise<Team[]>;
}

interface GetTeams {
  (id: number): Promise<Team>;
}

const apiUrl = 'https://api.apifootball.com/v3/players?league=eng.1';
const apiToken = 'f50eeec1a82e1fa661c03ac07d770d028253266c5ddd122cf4270bb8ff954441';

const getPlayers: GetPlayers = async (): Promise<Team[]> => {
  const response = await axios.get(apiUrl, {
    headers: {
      'X-RapidAPI-Key': apiToken
    }
  });
  return response.data;
};

const getTeams: GetTeams = async (id: number): Promise<Team> => {
  const response = await axios.get(`${apiUrl}/${id}`, {
    headers: {
      'X-RapidAPI-Key': apiToken
    }
  });
  return response.data;
};

export { getPlayers, getTeams };