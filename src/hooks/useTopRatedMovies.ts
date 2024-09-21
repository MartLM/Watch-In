import { useEffect, useState } from "react"
import { Movie } from "../intefraces/Inrefaces"

const API_KEY = 'd975b4e03178613c00ee0003e1f27a21'


export function useTopRatedMovies() { 
  const [topRated, settopRated] = useState<Movie[] | null>(null)

  useEffect(() => {
    const fecthMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      const data = await response.json()
      settopRated(data.results)
    }

    fecthMovies()
  },[])

  return { topRated }
}