
import { useContext, useEffect, useState } from 'react'
import { MovieSlider } from '../intefraces/Inrefaces.ts'
import { GenresContext } from '../context/GenresContext.tsx'
import PlayIcon from '../Icons/PlayIcon.tsx'
import InfoIcon from '../Icons/InfoIcon.tsx'
import { ArrowLeftIcon , ArrowRightIcon } from '../Icons/ArrowIcon.tsx'
import { useSlider } from '../hooks/useSlider.ts'
import { useFetchPopularMovies } from '../hooks/useFetchPopularMovies.ts'
import { Link } from 'react-router-dom'

import styles from './css/SliderHeader.module.css'

export default function SliderHeader() {
  const { genres } = useContext(GenresContext)

  const [ areMoviesLoaded, setAreMoviesLoaded ] = useState(false)
  const { sliderMovies: movies, images, isLoading } = useFetchPopularMovies();
  
  useEffect(() => {
    if (movies.length > 0) {
      setAreMoviesLoaded(true)
    }
  }, [movies, isLoading])

  const { 
    previousImage,
    nextImage,
    selectImage,
    selectedImage,
    selectedIndex,
    loaded,
    setLoaded 
  } = useSlider({ images, autoplay: true })

  const { 
    title,
    overview,
    release_date,
    genre_ids,
    logos,
    id 
  } = areMoviesLoaded ? movies[selectedIndex] : {} as MovieSlider;

  return (
    <article className={styles.slider}>
      {
        areMoviesLoaded && 
        <>
          <section className={styles['image-container']}>
            <img
              className={`${styles['slider-image']} ${ loaded ? styles.loaded : '' }`}
              src={`https://image.tmdb.org/t/p/original${selectedImage}`}
              alt={'Imagen de portada de la película: '+ title}
              onLoad={()=>setLoaded(true)}
            />
          </section>

          <section className={styles['slider-content']}>
            <section className={styles['details-movie']}>
              <header className={styles['details-movie-header']}>
                {
                  (logos && logos.length > 0) && 
                  <picture>
                    <source
                      media='(min-width: 768px)'
                      srcSet={`https://image.tmdb.org/t/p/w500${logos[0].file_path}`}
                      type="image/webp"
                    />
                    <img
                      className={styles['logo-movie']}
                      src={`https://image.tmdb.org/t/p/w200${logos[0].file_path}`}
                      alt={'Logo de la película: ' + title }
                      onError={(e)=>{e.currentTarget.src=''}}
                    />
                  </picture>
                }
                <section aria-label='metadata'>
                  <ul className={styles.metadata}>
                    <li className={`${styles.caption} caption`}>{ release_date.split('-')[0] }</li>
                    {genre_ids.map(genre_id => (
                        <li key={genre_id} className={`${styles.caption} caption`}>
                            {
                              genres.filter(item => item.id === genre_id)[0].name
                            }
                        </li>
                      ))
                    }
                  </ul>
                </section>
              </header>

              <section className={styles['overview-container']}>
                <p className={'overview'}>
                  <b>{title + ': '}</b>{overview}
                </p>
              </section>

              <section className={styles['buttons-container']}>
                <Link className={`button ${styles['button-cta']} ${styles['watch']}`} to={`/movie/${id}`}>
                  <PlayIcon className={styles['play-icon']} />
                  Watch-In
                </Link>

                <Link className={`button ${styles['button-cta']} ${styles['more-information']}`} to={`/movie/${id}`}>
                  <InfoIcon  className={styles['info-icon']} />
                  More info
                </Link>
              </section>
            </section>

            <section className={styles['slider-indicators']}>
                {
                  images.map((_, index) => 
                    <span 
                      key={index}
                      className={`${styles['slider-indicator']} ${index === selectedIndex ? styles['indicator-selected'] : ''}`}
                      onClick={() => selectImage(index)}></span>
                  )
                }
            </section>

            <nav className={styles['slider-nav']}>
              <button 
                className={`${styles['button-slider-scroll']}`}
                onClick={ nextImage }
              >
                <ArrowRightIcon className={styles['arrow-icon']}/>
              </button>
              <button 
                className={`${styles['button-slider-scroll']} ${styles['button-left']}`}
                onClick={previousImage}
              >
                <ArrowLeftIcon className={styles['arrow-icon']}/>
              </button>
            </nav>
          </section>
        </>
      }
    </article>
  )
} 



