import { useEffect } from "react";
import { Link } from "react-router-dom"
import { Movie } from "../intefraces/Inrefaces";

import styles from './css/MoviesList.module.css'

interface MoviesListProps {
  movies: Movie[],
  isTrend?: boolean,
}

export const MoviesList = ({ movies, isTrend = false }: MoviesListProps) => {
  // if (!movies || movies.length === 0) {
  //   return <p>No movies available.</p>; // Asegurarse de que los datos están disponibles
  // } 
  useEffect(()=>{

  }, [])
 

  return (
    movies?.map(movie => (
      <li key={movie.id} className={`${styles['li-movie']} ${styles[(isTrend ? 'li-trend' : '')]}`}>
        <Link to={`/movie/${movie.id}`}>
        <picture>
          <source 
            srcSet={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
            media="(max-width: 768px)"
          />
          <img
            loading="lazy" 
            className={`element-selector ${styles['movie-poster']}`} 
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
            alt={'Poster of movie: ' + movie.title}
          />
        </picture>
          <h3 className='title-3'>{movie.title}</h3>
        </Link>
      </li>
    ))
  )
}
