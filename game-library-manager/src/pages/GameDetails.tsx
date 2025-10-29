import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { fetchGameDetails } from "../api/rawgAPI";
import { useEffect, useState } from "react";
import type { gameDetailsType } from "../types/game.types";
import { descriptionParser } from "../helpers/descriptionParser";

const GameDetails = () => {
  const { id } = useParams();

  const [gameDetailsToDisplay, setGameDetailsToDisplay] =
    useState<gameDetailsType | null>(null);

  const gameDetailsQuery = useQuery({
    queryKey: ["gameDetails", id],
    queryFn: () => fetchGameDetails(id!),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const { data, error, isLoading } = gameDetailsQuery;

  useEffect(() => {
    if (data) {
      setGameDetailsToDisplay(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading game details.</div>;

  return (
    <>
      <NavBar />
      {gameDetailsToDisplay && (
        <div>
          <img
            src={gameDetailsToDisplay.background_image}
            alt={gameDetailsToDisplay.name}
          />
          <h2>{gameDetailsToDisplay.name}</h2>
          <p>Released: {gameDetailsToDisplay.released}</p>
          <p>Rating: {gameDetailsToDisplay.rating}</p>
          <p>
            Description: {descriptionParser(gameDetailsToDisplay.description)}
          </p>
        </div>
      )}
    </>
  );
};

export default GameDetails;
