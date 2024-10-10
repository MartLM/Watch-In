import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import styles from './css/CastList.module.css'
import CastLoader from "./loaders/CastLoader"

interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

interface CastListProps {
  cast: Cast[],
  loaded?: boolean
}

export default function CastList({ cast }: CastListProps) {

  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  useEffect(()=>{
    setLoadedImages({})
  },[cast])

  const handleImageLoad = (id: number) => {
    setLoadedImages((prevState) => ({ ...prevState, [id]: true }));
  };

  return (
    cast && cast.map(({id, name, character, profile_path}) => (
      <li key={profile_path} className={styles['li-cast']} >
          {
            !loadedImages[id] && <CastLoader />
          }
        <Link to={`https://image.tmdb.org/t/p/original${profile_path}`} target="_blank">
          <picture>
            <source srcSet={`https://image.tmdb.org/t/p/w154${profile_path}`} media="(max-width: 768px)" />
            <img
              loading="lazy"
              className={`element-selector ${styles['member-image']}`}
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              onError={(e)=>{e.currentTarget.src='/Unknown.webp'}}
              onLoad={() => handleImageLoad(id)}
              style={{ opacity: loadedImages[id] ? 1 : 0, transition: 'opacity 2s' }}
            />            
          </picture>
          <div className={styles.div}>
            <h3 className='title-4' style={{ display: loadedImages[id] ? 'block' : 'none' }}>{name}</h3>
            <h4 className='title-5' style={{ display: loadedImages[id] ? 'block' : 'none' }}>{character}</h4>
          </div>
        </Link>
      </li>
    ))
  )
}
