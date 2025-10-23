import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  allGamesAtom,
  filteredGamesAtom,
  searchTextAtom,
  selectFilterValueAtom,
} from "../utils/storage";
import type { genreSelectType } from "../types/game.types";
import { useEffect } from "react";

const useGameLibrary = () => {
  const [allGames] = useAtom(allGamesAtom);
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
        (game.name && game.name.toLowerCase().includes(userSearch));

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

  useEffect(() => {
    applyFilters(currentSearch, currentGenre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSearch, currentGenre]);

  return { handleSearchChange, handleFilterChange };
};

export default useGameLibrary;
