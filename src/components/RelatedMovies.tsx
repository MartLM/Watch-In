import { useEffect, useState } from "react"
import { getRelatedMovies } from "../services/movies"
import { Movie } from "../intefraces/Inrefaces"
import MediaContainer from "./MediaContainer"
import { MoviesList } from "./MoviesList"


export default function RelatedMovies({ movie_id }: {movie_id: string}) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getRelatedMovies(movie_id).then(res => setMovies(res))
  }, [movie_id])

  return (
    <MediaContainer title={'Related movies'} loaded={true} variant="movies">
      <MoviesList movies={movies}/>
  </MediaContainer>
  )
}
