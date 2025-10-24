import { atom } from "jotai";
import type { genreSelectType, gameType } from "../types/game.types";

export const allGamesAtom = atom<Array<gameType>>([]);
export const filteredGamesAtom = atom<Array<gameType>>([]);
export const selectFilterValueAtom = atom<genreSelectType | "All">("All");
export const searchTextAtom = atom<string>("");
export const favoritedGamesAtom = atom<Array<gameType>>([]);
