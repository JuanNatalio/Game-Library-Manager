import type { FC } from "react";

interface GameCardProps {
  name: string;
  released: string;
  rating: number;
  background_image: string;
}

const GameCard: FC<GameCardProps> = ({
  name,
  released,
  rating,
  background_image,
}) => {
  return (
    <div className="rounded-lg border solid border-black shadow-lg font-sans w-64 h-48flex-col">
      <img src={background_image} alt={name} />
      <h2>{name}</h2>
      <p>Released: {released}</p>
      <p>Rating: {rating}</p>
      <button>Add to Library</button>
    </div>
  );
};

export default GameCard;
