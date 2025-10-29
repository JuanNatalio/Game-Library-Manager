export type gameType = {
  id: number;
  slug: string;
  name: string;
  released: string;
  rating: number;
  background_image: string;
  genres: Array<genre>;
  favorited: boolean;
};

export type gameDetailsType = {
  id: number;
  slug: string;
  name: string;
  description: string;
  released: string;
  rating: number;
  background_image: string;
};

export type genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type genreSelectType =
  | "All"
  | "Action"
  | "Shooter"
  | "Simulation"
  | "Educational"
  | "Indie"
  | "Puzzle"
  | "RPG"
  | "Strategy"
  | "Adventure"
  | "Massively Multiplayer"
  | "Sports"
  | "Racing";
