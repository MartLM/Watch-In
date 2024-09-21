import { useEffect, useState } from "react"
import { getRelatedMovies } from "../services/movies"
import { Movie } from "../intefraces/Inrefaces"
import MoviesSection from "./MoviesSectionSlider"


export default function RelatedMovies({ movie_id }: {movie_id: string}) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getRelatedMovies(movie_id).then(res => setMovies(res))
  }, [movie_id])

  return (
    <MoviesSection
      title='Related movies'
      movies={movies}
    />
  )
}
