import { useEffect, useState } from "react"
import { useFetchPopularMovies } from "../hooks/useFetchPopularMovies.ts"
import MediaContainer from "./MediaContainer.tsx"
import { MoviesList } from "./MoviesList.tsx"


export function TrendMovies ( ) {

  const { trendMovies: listMovies } = useFetchPopularMovies()
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)
    if ( listMovies ) {
      setLoaded(true)
    }
  },[listMovies])

  return (
    <MediaContainer title={'Trend movies'} loaded={loaded} variant={'trend'}>
      <MoviesList movies={listMovies} isTrend={true}/>
    </MediaContainer>
  )
}