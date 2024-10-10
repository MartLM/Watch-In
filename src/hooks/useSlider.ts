import { useEffect, useState } from "react"
import { SliderProps } from "../intefraces/Inrefaces"

export function useSlider({ images,  autoplay = false } : SliderProps ) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0])
    }
  }, [images])

  useEffect(()=>{
    if (autoplay){
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 10000)
      return () => clearInterval(interval)
    }
  })
  
  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false)
    setTimeout(()=>{
      const condition = next ? index < images.length -1 : index > 0
      const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : images.length -1)
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex) 
    }, 700)
  }
  
  const selectImage = (index: number) => {
    if(index === selectedIndex) return
    setLoaded(false)
    setTimeout(()=>{ 
      setSelectedImage(images[index])
      setSelectedIndex(index) 
    }, 700)
  }

  const previousImage = () => {
    selectNewImage(selectedIndex, images, false)
  }
  
  const nextImage = () => {
    selectNewImage(selectedIndex, images)
  }


  return ({
    previousImage,
    nextImage,
    selectImage,
    setLoaded,
    selectedImage,
    selectedIndex,
    loaded
  })

}