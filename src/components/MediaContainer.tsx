import { useSliderMoviesList } from "../hooks/useSliderMoviesList";
import ButtonsGroup from "./ButtonsGroup";

import styles from './css/MediaContainer.module.css'

interface MediaContainerProps {
  normalTitle: string;
  styledTitle: string;
  loaded?: boolean
  children?: JSX.Element

}

export default function MediaContainer({normalTitle, styledTitle, children, loaded }: MediaContainerProps) {
  const { elementRef, scrollLeft, scrollRight } = useSliderMoviesList()
  return (
    <article>
      <header className={styles['header-media']}>
        <section>
          <h2 className='title-2-media'>{normalTitle} <span className="secondary-color">{styledTitle}</span></h2>
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
