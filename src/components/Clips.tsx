import { useEffect, useState } from "react"
import { getImages } from "../services/movies"
import { DataImages } from "../intefraces/Inrefaces"
import ImagesList from "./ImagesList"
import MediaContainer from "./MediaContainer"

interface ClipsProps {
  id: string
}

export default function ClipsList({ id }: ClipsProps) {

  const [images, setImages] = useState<DataImages[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    getImages(id)
      .then(res => setImages(res.backdrops))
      .finally(() => setLoaded(true))
  }, [id])

  return (
    <MediaContainer title={'Selected clips'} loaded={loaded} variant={'media'}>
      <ImagesList data={images}/>
    </MediaContainer>
  )
}