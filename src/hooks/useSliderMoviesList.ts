import { useRef } from "react";


export function useSliderMoviesList(){
  const elementRef = useRef<HTMLUListElement>(null)

  const scrollSlider = (right : boolean = true) => {
    const element = elementRef.current
    if ( element ) {
      const movie = element.querySelector('.element-selector') as HTMLLIElement;
      if ( movie ) {
        const scrollDistance = (movie.offsetWidth + 24) * 3 ;
        element.scrollBy(
          right 
            ? { left: scrollDistance, behavior: 'smooth' } 
            : { left: -scrollDistance, behavior: 'smooth' }
        );
      }
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
