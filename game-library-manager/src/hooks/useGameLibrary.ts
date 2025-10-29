import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  allGamesAtom,
  favoritedGamesAtom,
  filteredFavoritedGamesAtom,
  filteredGamesAtom,
  searchTextAtom,
  selectFilterValueAtom,
} from "../utils/storage";
import type { genreSelectType } from "../types/game.types";
import { useEffect } from "react";

const useGameLibrary = () => {
  const [allGames, setAllGames] = useAtom(allGamesAtom);
  const setFilteredGames = useSetAtom(filteredGamesAtom);
  const [favoritedGames, setFavoritedGames] = useAtom(favoritedGamesAtom);
  const setFilteredFavoritedGames = useSetAtom(filteredFavoritedGamesAtom);
  const setFilterValue = useSetAtom(selectFilterValueAtom);
  const setSearchText = useSetAtom(searchTextAtom);
  const selectFilterValue = useAtomValue(selectFilterValueAtom);
  const searchText = useAtomValue(searchTextAtom);

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

  const handleSearchChangeForAllGames = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const handleSearchChangeForFavoritedGames = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const typedValue = event.target.value.toLowerCase();
    const filteredFavoritedGames = favoritedGames.filter((game) =>
      game.name.toLowerCase().includes(typedValue)
    );
    setFilteredFavoritedGames(filteredFavoritedGames);
  };

  useEffect(() => {
    applyFilters(searchText, selectFilterValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, selectFilterValue, allGames]);

  useEffect(() => {
    setFilteredFavoritedGames(favoritedGames);
  }, [favoritedGames, setFilteredFavoritedGames]);

  return {
    handleSearchChangeForAllGames,
    handleFilterChange,
    handleFavoriteGame,
    handleSearchChangeForFavoritedGames,
  };
};

export default useGameLibrary;
