import { createContext } from "react";
import { Genre } from "../intefraces/Inrefaces";

interface GenresContextProps {
  genres: Genre[];
}

export const GenresContext = createContext<GenresContextProps>({} as GenresContextProps);
