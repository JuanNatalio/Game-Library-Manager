import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  allGamesAtom,
  favoritedGamesAtom,
  filteredGamesAtom,
  searchTextAtom,
  selectFilterValueAtom,
} from "../utils/storage";
import type { genreSelectType } from "../types/game.types";
import { useEffect } from "react";

const useGameLibrary = () => {
  const [allGames, setAllGames] = useAtom(allGamesAtom);
  const setFavoritedGames = useSetAtom(favoritedGamesAtom);
  const setFilteredGames = useSetAtom(filteredGamesAtom);
  const setFilterValue = useSetAtom(selectFilterValueAtom);
  const setSearchText = useSetAtom(searchTextAtom);
  const currentGenre = useAtomValue(selectFilterValueAtom);
  const currentSearch = useAtomValue(searchTextAtom);

  const applyFilters = (search: string, genre: genreSelectType | "All") => {
    const userSearch = (search || "").trim().toLowerCase();

    const result = allGames.filter((game) => {
      const genreMatches =
        genre === "All" ||
        (Array.isArray(game.genres) &&
          game.genres.some(
            (g) => g.name.toLowerCase() === genre.toLowerCase()
          ));

      const searchMatches =
        userSearch === "" ||
        (game.name?.toLowerCase()?.includes(userSearch) ?? false);

      return genreMatches && searchMatches;
    });

    setFilteredGames(result);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    setSearchText(typedValue);
  };

  const handleFilterChange = (genre: genreSelectType | "All") => {
    setFilterValue(genre);
  };

  const handleFavoriteGame = (gameName: string) => {
    const favoritedGame = allGames.find((game) => game.name === gameName);
    if (!favoritedGame) return;
    favoritedGame.favorited = !favoritedGame.favorited;
    if (favoritedGame.favorited) {
      setFavoritedGames((prev) => [...prev, favoritedGame]);
    } else {
      setFavoritedGames((prev) => {
        return prev.filter((game) => game.name !== favoritedGame.name);
      });
    }
    setAllGames([...allGames]);
  };

  useEffect(() => {
    applyFilters(currentSearch, currentGenre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSearch, currentGenre]);

  return { handleSearchChange, handleFilterChange, handleFavoriteGame };
};

export default useGameLibrary;
