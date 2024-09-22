import { useContext, useEffect, useState } from 'react'
import { getMoviesByGenre } from "../services/movies.ts"
import { Movie } from '../intefraces/Inrefaces.ts'
import { GenresContext } from '../context/GenresContext.tsx'
import MediaContainer from './MediaContainer.tsx'
import { MoviesList } from './MoviesList.tsx'


export function MoviesByGenre ({ genre }: { genre: string }) {
  const [listMovies, setListMovies] = useState<Movie[]>([])
  const [loaded, setLoaded] = useState(false)
  const { genres } = useContext(GenresContext)

  useEffect(() => {
    setLoaded(false)
    if (genres.length > 0) {
      const id_genre = genres?.find(( g ) => g.name.toLocaleLowerCase() === genre)?.id.toString() as string
      getMoviesByGenre(id_genre).then((movies) => {
        setListMovies(movies);
        setLoaded(true)
      });
    }
  }, [genres, genre]); 
  
  return (
    <MediaContainer title={genre} loaded={loaded} variant={'movies'}>
      <MoviesList movies={listMovies}/>
    </MediaContainer>
  )
} 

