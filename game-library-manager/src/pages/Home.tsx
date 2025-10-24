import { useQuery } from "@tanstack/react-query";
import fetchGames from "../api/rawgAPI";
import { useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
import { allGamesAtom, filteredGamesAtom } from "../utils/storage";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import NavBar from "../components/NavBar";

const Home = () => {
  const [allGames, setAllGames] = useAtom(allGamesAtom);
  const [filteredGames, setFilteredGames] = useAtom(filteredGamesAtom);
  const gameQuery = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    refetchOnWindowFocus: false,
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
      <SearchBar />
      <FilterSelect />
      <GameGrid listOfGames={filteredGames} />
    </>
  );
};

export default Home;
