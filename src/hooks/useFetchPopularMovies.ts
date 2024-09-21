import { useEffect, useState } from 'react'
import { Movie , MovieSlider, ImagesProps} from '../intefraces/Inrefaces.ts'
import { getSliderMovies, getImagesArray } from '../services/movies.ts'

interface FetchData {
  sliderMovies: MovieSlider[];
  trendMovies: Movie[];
  images: string[];
  isLoading: boolean;
}

export function useFetchPopularMovies() : FetchData {
  
  const [data, setData] = useState<FetchData>({
    sliderMovies: [],
    trendMovies: [],
    images: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchMovies = async () =>{

      const response = await getSliderMovies()
      
      const slider = response?.slice(0, 6)

      const trend = response?.slice(6)

      const slider_ids = slider.map((movie: Movie) => movie.id)
      const images_slider = await getImagesArray(slider_ids)
      
      const newSlider: MovieSlider[] = slider.map((movie: Movie) => {
        const image = images_slider.find(image => image.id === movie.id) as ImagesProps;
        return {
          ...movie,
          ...image
        }
      })
      if (newSlider.length > 0) {
        setData({
          sliderMovies: newSlider,
          trendMovies: trend,
          images: slider.map((movie: Movie) => movie.backdrop_path),
          isLoading: false,
        })
      }
    }

    fetchMovies()
  },[])

  return data
}