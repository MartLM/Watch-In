import { useSliderMoviesList } from "../hooks/useSliderMoviesList";
import { Movie } from "../intefraces/Inrefaces";
import ButtonsGroup from "./ButtonsGroup";
import { MoviesList } from "./MoviesList";

import styles from './css/MoviesArticle.module.css'

interface MoviesSectionSliderProps {
  title: string;
  movies: Movie[];
  isTrend?: boolean;
}

export default function MoviesSectionSlider({ isTrend = false, title, movies }: MoviesSectionSliderProps) {

  const {elementRef, scrollLeft, scrollRight } = useSliderMoviesList()

  return (
    <article className={isTrend ? styles['article-trend'] : '' }>
      <header className={styles[isTrend ? 'header-trend' : 'header-genres']}>
        <section>
          <span className='title-2-s'>Watch</span>
          <h2 className={isTrend ? 'title-2-xl' : 'title-2' }>{title}</h2>
        </section>
        <ButtonsGroup right={scrollRight} left={scrollLeft}/>
      </header>
      <section aria-label={isTrend ? `list of ${title} genre movies`: `list of ${title}`}>
        <MoviesList movies={movies} isTrend={isTrend} elementRef={elementRef}/>
      </section>
    </article>
  )
}
