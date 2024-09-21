import { useFetchPopularMovies } from "../hooks/useFetchPopularMovies.ts"
import MoviesSectionSlider from "./MoviesSectionSlider.tsx"


export function TrendMovies ( ) {

  const { trendMovies: listMovies } = useFetchPopularMovies()

  return (
    <MoviesSectionSlider
      title='Trend movies'
      movies={listMovies}
      isTrend={true}
    />
  )
}