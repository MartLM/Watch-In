import styles from '../css/CastLoader.module.css'
import ImageLoaderIcon from '../../Icons/ImageLoaderIcon'

export default function CastLoader() {
  return (
    <div className={styles['cast-skeleton-container']}>
        <span className={`${styles['image-sketelon']} ${styles.loader}`}>
          <ImageLoaderIcon />
        </span>
      <div className={styles['text-sketelon-container']}>
        <span className={`${styles['text-sketelon']} ${styles.loader}`}></span>
        <span className={`${styles['text-sketelon']} ${styles.loader}`}></span>
      </div>
    </div>
  )
}
