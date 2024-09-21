
import { Link } from 'react-router-dom'
import { DataImages } from '../intefraces/Inrefaces'
import styles from './css/ImagesList.module.css'

interface ImagesListListProps {
  data: DataImages[],
  isCast?: boolean,
  elementRef: React.RefObject<HTMLUListElement>
}

export default function ImagesList({ data, isCast = false, elementRef }: ImagesListListProps) {
  return (
    <ul className={styles.container} ref={elementRef}>
      {
        data.map(image => (
          <li key={image.file_path} className={styles['li-image']} >
            <Link  to={`${image.file_path}`} target="_blank">
              <img className={`${styles['image-poster']} element-selector`} src={image.file_path}/>
              { isCast && <h3 className='title-3'>{image.vote_average}</h3>}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
