
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
          <img 
            className={`${styles['image-poster']} element-selector`} 
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
          />
        </Link>
      </li>
    ))
  )
}
