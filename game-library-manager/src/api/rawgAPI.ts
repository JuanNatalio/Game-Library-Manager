import axios from "axios";
import type { gameType } from "../types/game.types";

const API_URL_GAMES = "https://api.rawg.io/api/games";
const API_KEY = import.meta.env.VITE_API_KEY as string | undefined;

const fetchGames = async () => {
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

export default fetchGames;
