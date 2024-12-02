import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movies";
import PlayIcon from "../Icons/PlayIcon";

import RelatedMovies from "./RelatedMovies";
import { NavBar } from "./NavBar";
import Clips from "./Clips";
import Cast from "./Cast";

import styles from './css/MovieDetails.module.css'

interface MovieDetailsProps {
  adult: boolean,
  backdrop_path: string,
  budget: number,
  genres: [
    {
      id: number,
      name: string
    }
  ],
  id: number,
  imdb_id: number,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: [
    {
      id: number,
      logo_path: string,
      name: string,
      origin_country: string
    }
  ],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: [
    {
      english_name: string,
      iso_639_1: string,
      name: string
    }
  ],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export default function PageMovieDetails() {
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  const { id } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    setMovie(null)
    if (id) {
      getMovieDetails(id).then(res => setMovie(res))
    }
    window.scrollTo(0, 0)
  }, [id, pathname])

  return (
    <>
      {
        movie && 
        <>
          <header>
            <NavBar />
            <article className={styles["article-header"]}>
              <section className={styles["background-container"]}>
                <picture>
                  <source 
                    srcSet={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    media="(max-width: 768px)" 
                  />
                  <img 
                    className={styles["background-image"]}
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                    alt={movie.title}
                  />
                </picture>
              </section>              
              <section className={styles["content"]}>
                <article className={styles["movie-information"]}>
                  <header className={styles['movie-information-header']}>
                    <img 
                      className={styles.poster}
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <section className={styles["info"]}>
                      <span>
                        {
                          new Date(movie.release_date).toLocaleDateString('en-US', {
                            year:"numeric", 
                            month:"short"
                          })
                        }
                      </span>

                      <span>Duration: {movie.runtime} min</span>
                    </section>
                  </header>

                  <footer className={styles['movie-information-footer']}>
                    <section className={styles.metadata}> 
                      {
                        movie.genres?.map(genre => (
                          <span 
                            key={genre.name + movie.id} 
                            className={`caption ${styles.genres}`}
                          >
                            { genre.name }
                          </span>
                        ))
                      }
                    </section>
                    <button className={`button ${styles['button-cta']} ${styles['watch']}`}>
                      <PlayIcon className={styles['play-icon']} />
                      Watch-In
                    </button>
                  </footer>
                </article>
                
                <section className={styles["movie-details"]}>
                  <h1 className={styles.title}>
                    {movie.title}
                  </h1>
                  <h2 className={styles.tagline}>
                    {movie.tagline}
                  </h2>
                  <section className={styles["overview-container"]}>
                    <p className={styles.overview}>
                      {movie.overview}
                    </p>
                  </section>
                </section>
              </section>
            </article>
          </header>
          <main>
            {
              id && (
                <>
                  <Clips id={id}/>
                  <Cast id={id}/>
                  <RelatedMovies movie_id={id}/>
                </>

              )
            }
          </main>
        </>
      }
    </>
  )
}