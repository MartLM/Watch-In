import { MoviesByGenre } from "./MoviesByGenre";
import { NavBar } from "./NavBar";
import SliderHeader from "./SliderHeader";
import { TrendMovies } from "./TrendMovies";


export default function PageHome() {

  return (
    <>
      <header>
        <NavBar/>
        <SliderHeader/>
      </header>
      <main>
        <TrendMovies/>
        <MoviesByGenre genre='action'/>
        <MoviesByGenre genre='comedy'/>
        <MoviesByGenre genre='drama'/>
        <MoviesByGenre genre='science fiction'/>
        <MoviesByGenre genre='animation'/>
      </main>
    </>
  )
}