import { useEffect } from "react";
import { useSliderMoviesList } from "../hooks/useSliderMoviesList";
import ButtonsGroup from "./ButtonsGroup";

import styles from './css/MediaContainer.module.css'
import { MediaContainerHeaders } from "./MediaContainerHeaders";

interface MediaContainerProps {
  title: string;
  variant: 'movies' | 'media' | 'trend';
  loaded?: boolean
  children?: JSX.Element

}

export default function MediaContainer({ variant, children, loaded, title }: MediaContainerProps) {
  const { elementRef, scrollLeft, scrollRight } = useSliderMoviesList()
  const isTrend = variant === 'trend'

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollLeft = 0
    }
  })
  return (
    <article className={isTrend ? styles['article-trend'] : ''}>
      <header className={styles[isTrend ? 'header-trend' : 'header-media']}>
        <section>
          {/* <h2 className='title-2-media'>{normalTitle} <span className="secondary-color">{styledTitle}</span></h2> */}
          <MediaContainerHeaders variant={variant} title={title}/>
        </section>
        <ButtonsGroup right={scrollRight} left={scrollLeft}/>
      </header>
      <section className={!loaded ? styles.loading : ''} aria-label='list of clips'>
        {
          loaded &&
          <ul className={styles['ul-container']} ref={elementRef}>
            {children}
          </ul>
        }
      </section>
    </article>
  )
}
