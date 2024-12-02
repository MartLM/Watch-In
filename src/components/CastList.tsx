import { Link } from "react-router-dom"

import styles from './css/CastList.module.css' 

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

  return (
    cast && cast.map(({ name, character, profile_path}) => (
      <li key={profile_path} className={styles['li-cast']} >
        <Link to={profile_path ? `https://image.tmdb.org/t/p/w154${profile_path}` : '/Unknown.webp'} target="_blank">
          <picture>
            <source srcSet={profile_path ? `https://image.tmdb.org/t/p/w154${profile_path}` : '/Unknown.webp'} media="(max-width: 768px)" />
            <img
              loading="lazy"
              className={`element-selector ${styles['member-image']}`}
              src={profile_path ? `https://image.tmdb.org/t/p/w154${profile_path}` : '/Unknown.webp'}
              onError={(e)=>{e.currentTarget.src='/Unknown.webp'}}
            />            
          </picture>
          <div className={styles.div}>
            <h3 className='title-4' >{name}</h3>
            <h4 className='title-5' >{character}</h4>
          </div>
        </Link>
      </li>
    ))
  )
}
