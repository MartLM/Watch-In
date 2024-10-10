import { useRef } from "react";


export function useSliderMoviesList(){
  const elementRef = useRef<HTMLUListElement>(null)

  const scrollSlider = (right : boolean = true) => {
    const element = elementRef.current
    if ( element ) {
      element.scrollBy(
        right
          ? { left: element.offsetWidth, behavior: 'smooth' }
          : { left: -element.offsetWidth, behavior: 'smooth' }
      )
    }
  }

  const scrollRight = () => {
    console.log('right');
    scrollSlider()
  }

  const scrollLeft = () => {
    console.log('left');
    scrollSlider(false)
  }
  
  return { scrollLeft, scrollRight, elementRef }
}
