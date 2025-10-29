import { useAtom } from "jotai";
import GameGrid from "../components/GameGrid";
import { filteredFavoritedGamesAtom } from "../utils/storage";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import useGameLibrary from "../hooks/useGameLibrary";

const Library = () => {
  const { handleSearchChangeForFavoritedGames } = useGameLibrary();

  const [filteredFavoritedGames] = useAtom(filteredFavoritedGamesAtom);

  return (
    <>
      <NavBar />
      <SearchBar handleSearchChange={handleSearchChangeForFavoritedGames} />
      <GameGrid listOfGames={filteredFavoritedGames} />
    </>
  );
};

export default Library;
