import { useQuery } from "@tanstack/react-query";
import fetchGames from "../api/rawgAPI";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { allGamesAtom, filteredGamesAtom } from "../utils/storage";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";

const Home = () => {
  const [allGames, setAllGames] = useAtom(allGamesAtom);
  const [filteredGames, setFilteredGames] = useAtom(filteredGamesAtom);
  const gameQuery = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  const { data, error, isLoading } = gameQuery;

  useEffect(() => {
    if (data) {
      console.log(data);
      setAllGames(data);
      setFilteredGames(allGames);
      console.log(filteredGames);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, allGames, setAllGames, setFilteredGames]);

  return (
    <>
      <SearchBar />
      <FilterSelect />
      <GameGrid />
    </>
  );
};

export default Home;
