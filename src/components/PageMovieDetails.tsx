import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movies";
import { Link } from "react-router-dom";
import PlayIcon from "../Icons/PlayIcon";

import './MovieDetails.css'
import RelatedMovies from "./RelatedMovies";
import { NavBar } from "./NavBar";
import Clips from "./Clips";
import Cast from "./Cast";

interface MovieDetailsProps {
  adult: boolean,
  backdrop_path: string,
  // belongs_to_collection: {
  //   id: 14890,
  //   name: "Bad Boys Collection",
  //   poster_path: "/iB59poJBofg1ciKlu6LzZakf11m.jpg",
  //   backdrop_path: "/k9hhSHg5GS4UgWQC6MHBOZrarji.jpg"
  // },
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
            <article className="content-header">
              <section className="backdrop-container">
                <img className="backdrop-image" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
              </section>
              <section className="details-movie">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <section className='metadata'>
                  {
                    movie.genres?.map(genre => (
                      <span key={genre.name + movie.id} className='caption'>
                          {
                            genre.name
                          }
                      </span>
                    ))
                  }
                </section>
                <h1>{}</h1>
                <p className="overview">{movie.title}: {movie.overview}</p>
                <section className='buttons-container'>
                  <Link className='button-slider-cta watch' to={`/movie/${id}`}><PlayIcon />Watch-In</Link>
                </section>
              </section>
            </article>
          </header>
          <main>
            <article>Cast</article>
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
