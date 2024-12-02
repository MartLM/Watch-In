
import { Link } from 'react-router-dom'
import { DataImages } from '../intefraces/Inrefaces'
import styles from './css/ClipsList.module.css'

interface ImagesListListProps {
  data: DataImages[]
}

export default function ClipsList ({ data }: ImagesListListProps) {
  return (
    data.map(image => (
      <li className={styles['li-image']} >
        <Link to={`https://image.tmdb.org/t/p/original${image.file_path}`} target="_blank">
          <picture>
            <source
              srcSet={`https://image.tmdb.org/t/p/w780${image.file_path}`}
              media="(min-width: 768px)"
            />
            <img 
              className={`${styles['image-poster']} element-selector`} 
              src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
            />
          </picture>
        </Link>
      </li>
    ))
  )
}
