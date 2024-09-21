
import { useContext } from 'react'
import { MovieSlider } from '../../intefraces/Inrefaces.ts'
import { GenresContext } from '../../context/GenresContext.tsx'
import PlayIcon from '../../Icons/PlayIcon.tsx'
import InfoIcon from '../../Icons/InfoIcon.tsx'
import { ArrowLeftIcon , ArrowRightIcon } from '../../Icons/ArrowIcon.tsx'
import { useSlider } from './useSlider.ts'
import { useFetchPopularMovies } from '../../hooks/useFetchPopularMovies.ts'
import { Link } from 'react-router-dom'

import styles from '../css/SliderHeader.module.css'

export default function SliderHeader() {
  const { genres } = useContext(GenresContext)
  const { sliderMovies: movies, images, isLoading } = useFetchPopularMovies();
  
  const { previousImage, nextImage, selectImage, selectedImage, selectedIndex, loaded, setLoaded } = useSlider({ images, autoplay: true })
  if (isLoading) return <div>Loading...</div>;
  const { title, overview, release_date, genre_ids, logos, id } = movies ? movies[selectedIndex] : {} as MovieSlider;

  return (
    <article className={styles.slider}>
      <section className={styles['image-container']}>
        <img
          className={`${styles['slider-image']} ${ loaded ? styles.loaded : '' }`}
          src={`https://image.tmdb.org/t/p/original${selectedImage}`}
          alt={'Imagen de portada de la película: '+ title}
          onLoad={()=>setLoaded(true)}
        />
      </section>
      <div className={styles['slider-content']}>
        <section className={styles['details-movie']}>
          <header className={styles['details-movie-header']}>
            <img
              className={styles['logo-movie']}
              src={logos[0].file_path}
              alt={'Logo de la película: ' + title }
            />
            
            <section className={styles.metadata}>
              <span className={`${styles.caption} caption`}>{ release_date.split('-')[0] }</span>
              {
                genre_ids.map(genre_id => (
                  <span key={genre_id} className={`${styles.caption} caption`}>
                      {
                        genres.filter(item => item.id === genre_id)[0].name
                      }
                  </span>
                ))
              }
            </section>
          </header>

          <div className={styles['div-overview']}>
            <p className={'overview'}><b>{title + ': '}</b>{overview}</p>
          </div>

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
      </div>
      
      <nav className={styles['slider-navigation-buttons']}>
        <button className={styles['button-slider-scroll']} onClick={previousImage}>
          <ArrowLeftIcon className={styles['arrow-icon']}/>
          </button>
        <button className={styles['button-slider-scroll']} onClick={nextImage}>
          <ArrowRightIcon className={styles['arrow-icon']}/>
        </button>

      </nav>
    </article>
  )
} 



