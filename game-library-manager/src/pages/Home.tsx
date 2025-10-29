import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../api/rawgAPI";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { allGamesAtom, filteredGamesAtom } from "../utils/storage";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import NavBar from "../components/NavBar";
import useGameLibrary from "../hooks/useGameLibrary";

const Home = () => {
  const { handleSearchChangeForAllGames } = useGameLibrary();

  const [allGames, setAllGames] = useAtom(allGamesAtom);
  const [filteredGames, setFilteredGames] = useAtom(filteredGamesAtom);

  const gameQuery = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    refetchOnMount: false, // don't refetch when component remounts
  });

  const { data, error, isLoading } = gameQuery;

  useEffect(() => {
    if (data) {
      setAllGames(data);
      setFilteredGames(allGames);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setAllGames, setFilteredGames]);

  return (
    <>
      <NavBar />
      <SearchBar handleSearchChange={handleSearchChangeForAllGames} />
      <FilterSelect />
      <GameGrid listOfGames={filteredGames} />
    </>
  );
};

export default Home;
