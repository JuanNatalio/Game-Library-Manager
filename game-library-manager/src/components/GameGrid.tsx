import GameCard from "./GameCard";
import type { gameType } from "../types/game.types";
import type { FC } from "react";

interface GameGridProps {
  listOfGames: Array<gameType>;
}

const GameGrid: FC<GameGridProps> = ({ listOfGames }) => {
  return (
    <div className="flex flex-wrap">
      {listOfGames.map((game) => (
        <GameCard
          id={game.id}
          key={game.id}
          name={game.name}
          released={game.released}
          rating={game.rating}
          background_image={game.background_image}
          favorited={game.favorited}
        />
      ))}
    </div>
  );
};
export default GameGrid;
