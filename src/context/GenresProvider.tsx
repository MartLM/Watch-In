import { useEffect, useState } from "react";
import { GenresContext } from "./GenresContext";
import { getGenres } from "../services/movies";
import { Genre } from "../intefraces/Inrefaces";

interface GenresProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function GenresProvider({ children }: GenresProviderProps ) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres().then(list => setGenres(list))
  }, []);

  return (
    <GenresContext.Provider value={{ genres }}>
      { children }
    </GenresContext.Provider>
  );
}