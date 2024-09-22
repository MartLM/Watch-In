import { useEffect, useState } from "react"
import { getCredits } from "../services/movies"
import MediaContainer from "./MediaContainer"
import CastList from "./CastList"

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

interface CastProps {
  id: string
}


export default function Cast({ id }: CastProps) {
  const [cast, setCast] = useState<Cast[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false)
    setCast([])
    getCredits(id)
      .then(res => setCast(res.cast))
      .finally(() => setLoaded(true))
  }, [id])

  return (
    <MediaContainer title={'Top casts'} loaded={loaded} variant={'media'}>
      <CastList cast={cast} />
    </MediaContainer>
  )
}