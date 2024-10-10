import { useEffect, useState } from "react"
import { getImages } from "../services/movies"
import { DataImages } from "../intefraces/Inrefaces"
import ImagesList from "./ClipsList.tsx"
import MediaContainer from "./MediaContainer"

interface ClipsProps {
  id: string
}

export default function Clips({ id }: ClipsProps) {

  const [images, setImages] = useState<DataImages[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    getImages(id)
      .then(res => setImages(res.backdrops))
      .finally(() => setLoaded(true))
  }, [id])

  return (
    images && images.length > 0 && (
      <MediaContainer title={'Selected clips'} loaded={loaded} variant={'media'}>
        <ImagesList data={images}/>
      </MediaContainer>
    )
  )
}