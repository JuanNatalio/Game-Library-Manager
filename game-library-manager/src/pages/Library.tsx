import { useAtom } from "jotai";
import GameGrid from "../components/GameGrid";
import { favoritedGamesAtom } from "../utils/storage";
import NavBar from "../components/NavBar";

const Library = () => {
  const [favoritedGames] = useAtom(favoritedGamesAtom);
  return (
    <>
      <NavBar />
      <GameGrid listOfGames={favoritedGames} />
    </>
  );
};

export default Library;
