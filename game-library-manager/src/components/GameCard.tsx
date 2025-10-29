import type { FC } from "react";
import useGameLibrary from "../hooks/useGameLibrary";
import useNavBar from "../hooks/useNavBar";

interface GameCardProps {
  id: number;
  name: string;
  released: string;
  rating: number;
  background_image: string;
  favorited: boolean;
}

const GameCard: FC<GameCardProps> = ({
  id,
  name,
  released,
  rating,
  background_image,
  favorited,
}) => {
  const { handleFavoriteGame } = useGameLibrary();
  const { navToGameDetails } = useNavBar();

  return (
    <div className="rounded-lg border solid border-black shadow-lg font-sans w-64 h-48flex-col">
      <img src={background_image} alt={name} />
      <h2>{name}</h2>
      <p>Released: {released}</p>
      <p>Rating: {rating}</p>
      <button
        onClick={() => {
          handleFavoriteGame(name);
        }}
      >
        {favorited ? "Remove from Library" : "Add to Library"}
      </button>
      <button onClick={() => navToGameDetails(id)}>View Game Details</button>
    </div>
  );
};

export default GameCard;
