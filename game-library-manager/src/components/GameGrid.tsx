import { useAtom } from "jotai";
import { filteredGamesAtom } from "../utils/storage";
import GameCard from "./GameCard";

const GameGrid = () => {
  const [filteredGames] = useAtom(filteredGamesAtom);
  return (
    <div>
      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          released={game.released}
          rating={game.rating}
          background_image={game.background_image}
        />
      ))}
    </div>
  );
};
export default GameGrid;
