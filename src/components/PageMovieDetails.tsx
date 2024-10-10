import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movies";
import { Link } from "react-router-dom";
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
            <article className={styles["content-header"]}>
              <section className={styles["backdrop-container"]}>
                <img 
                  className={styles["backdrop-image"]}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                  alt={movie.title}
                />
              </section>
              <section className={styles["slider-content"]}>
                <section className={styles["details-movie"]}>
                  <img 
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <section className='metadata'>
                    {
                      movie.genres?.map(genre => (
                        <span 
                          key={genre.name + movie.id} 
                          className='caption'
                        >
                          { genre.name }
                        </span>
                      ))
                    }
                  </section>
                  <p className="overview">{movie.title}: {movie.overview}</p>
                  <section className='buttons-container'>
                    <Link className='button-slider-cta watch' to={`/movie/${id}`}>
                      <PlayIcon/>Watch-In
                    </Link>
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
