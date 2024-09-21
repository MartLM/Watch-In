import { useEffect, useState } from "react"
import { getImages } from "../services/movies"
import { DataImages } from "../intefraces/Inrefaces"
import { useSliderMoviesList } from "../hooks/useSliderMoviesList"
import ButtonsGroup from "./ButtonsGroup"

import styles from './css/Clips.module.css'
import ImagesList from "./ImagesList"

interface ClipsProps {
  id: string
  normalTitle: string
  styledTitle: string
}

export default function ClipsList({ id, normalTitle, styledTitle }: ClipsProps) {

  const [images, setImages] = useState<DataImages[] | null>(null)
  const [loading, setLoading] = useState(true)
  const { elementRef, scrollLeft, scrollRight } = useSliderMoviesList()

  useEffect(() => {
    setLoading(true)
    getImages(id)
      .then(res => setImages(res.backdrops))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <article>
      <header className={styles['header-clips']}>
        <section>
          <h2 className='title-2'>{normalTitle} <span className="secondary-color">{styledTitle}</span></h2>
        </section>
        <ButtonsGroup right={scrollRight} left={scrollLeft}/>
      </header>
      <section aria-label='list of clips'>
        {
          loading
            ? <p>Loading...</p>
            : images && <ImagesList data={images} elementRef={elementRef}/>
        }
      </section>
    </article>
  )
}