
import { Link } from 'react-router-dom'
import { DataImages } from '../intefraces/Inrefaces'
import styles from './css/ImagesList.module.css'

interface ImagesListListProps {
  data: DataImages[]
}

export default function ImagesList({ data }: ImagesListListProps) {
  return (
    data.map(image => (
      <li key={image.file_path} className={styles['li-image']} >
        <Link  to={`${image.file_path}`} target="_blank">
          <img className={`${styles['image-poster']} element-selector`} src={image.file_path}/>
        </Link>
      </li>
    ))
  )
}
