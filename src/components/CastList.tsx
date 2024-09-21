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
    setLoadedImages(prevState => ({ ...prevState, [id]: true }));
  };

  return (
    cast && cast.map(castMember => (
      <li key={castMember.profile_path} className={styles['li-cast']} >
          {
            !loadedImages[castMember.id] && <CastLoader />
          }
        <Link to={`https://image.tmdb.org/t/p/original${castMember.profile_path}`} target="_blank">
          <img
            className={`element-selector ${styles['member-image']}`}
            src={` ${castMember.profile_path ? `https://image.tmdb.org/t/p/w200${castMember.profile_path}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}`}
            onLoad={() => handleImageLoad(castMember.id)}
            style={{ opacity: loadedImages[castMember.id] ? 1 : 0, transition: 'opacity 2s' }}
          />
          <h3 className='title-cast' style={{ display: loadedImages[castMember.id] ? 'block' : 'none' }}>{castMember.name}</h3>
          <h4 className='title-4' style={{ display: loadedImages[castMember.id] ? 'block' : 'none' }}>{castMember.character}</h4>
        </Link>
      </li>
    ))
  )
}
