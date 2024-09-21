import { useEffect } from "react";
import { Link } from "react-router-dom"
import { Movie } from "../intefraces/Inrefaces";

import styles from './css/MoviesList.module.css'

interface MoviesListProps {
  movies: Movie[],
  isTrend: boolean,
  elementRef: React.RefObject<HTMLUListElement>
}

export const MoviesList = ({ movies, elementRef, isTrend }: MoviesListProps) => {
  // if (!movies || movies.length === 0) {
  //   return <p>No movies available.</p>; // Asegurarse de que los datos están disponibles
  // } 
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollLeft = 0
    }
  })

  return (
    <ul className={`${styles.container} ${styles[isTrend ? 'container-trend' : '']}` } ref={elementRef}>
      {
        movies?.map(movie => (
        <li key={movie.id} className={`${styles['li-movie']} ${styles[(isTrend ? 'li-trend' : '')]}`}>
            <Link to={`/movie/${movie.id}`}>
              <img 
                className={`element-selector ${styles['movie-poster']}`} 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                alt={'Poster of movie: ' + movie.title}
              />
              <h3 className='title-3'>{movie.title}</h3>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
