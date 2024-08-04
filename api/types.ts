// types.ts
export interface Player {
  player_id: string;
  player_name: string;
  player_image: string;
  player_type: string;
  player_age: string;
}

export interface Team {
  team_key: string;
  team_name: string;
  team_country: string;
  team_founded: string;
  team_badge: string;
  players: Player[];
}

export interface NewTeam {
  id: number;
  name: string;
  players: Player[];
}
