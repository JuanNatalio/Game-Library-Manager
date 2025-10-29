import axios from "axios";
import type { gameType } from "../types/game.types";

const API_URL_GAMES = "https://api.rawg.io/api/games";
const API_URL_GAME_DETAILS = "https://api.rawg.io/api/games/";
const API_KEY = import.meta.env.VITE_API_KEY as string | undefined;

export const fetchGames = async () => {
  let allGames: Array<gameType> = [];
  let nextPage = `${API_URL_GAMES}?key=${API_KEY}&page=1`;

  for (let i = 0; i < 10; i++) {
    try {
      const response = await axios.get(nextPage);
      allGames = [...allGames, ...response.data.results];
      nextPage = response.data.next;
    } catch (error) {
      console.error("Error fetching games:", error);
      throw error;
    }
  }
  return allGames;
};

export const fetchGameDetails = async (id: string) => {
  try {
    const response = await axios.get(
      `${API_URL_GAME_DETAILS}${id}?key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Could not fetch game details:", error);
  }
};
