import { useContext, useEffect, useState } from 'react'
import { getMoviesByGenre } from "../services/movies.ts"
import { Movie } from '../intefraces/Inrefaces.ts'
import { GenresContext } from '../context/GenresContext.tsx'
import MoviesSectionSlider from './MoviesSectionSlider.tsx'


export function MoviesByGenre ({ genre }: { genre: string }) {
  const [listMovies, setListMovies] = useState<Movie[]>([])
  const { genres } = useContext(GenresContext)

  useEffect(() => {
    if (genres.length > 0) {
      const id_genre = genres?.find(( g ) => g.name.toLocaleLowerCase() === genre)?.id.toString() as string
      getMoviesByGenre(id_genre).then((movies) => {
        setListMovies(movies);
      });
    }
  }, [genres, genre]); 
  
  return (
    <MoviesSectionSlider
    title={genre}
    movies={listMovies}
  />
  )
} 

