import { useQuery } from "@tanstack/react-query";
import fetchGames from "../api/rawgAPI";
import { useEffect } from "react";

const Home = () => {
  const gameQuery = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });
  const { data, error, isLoading } = gameQuery;
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <div>Home page</div>;
};

export default Home;
