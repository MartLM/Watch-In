export interface Movie {
  id: number,
  adult: boolean,
  genre_ids: number[],
  original_title: string,
  overview: string,
  release_date: string,
  poster_path: string,
  backdrop_path: string,
  original_language: string,
  popularity: number,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface DataImages {
  aspect_ratio: number,
  height: number,
  iso_639_1: string,
  file_path: string,
  vote_average: number,
  vote_count: number,
  width: number
}

export interface ImagesProps {
  backdrops: DataImages[] | [],
  id: number,
  logos: DataImages[] | [],
  posters: DataImages[] | []
}

export interface MovieSlider extends Movie, ImagesProps {}

export interface Genre {
  id: number,
  name: string
}

export interface Images{
  backdrops: [
    {
      file_path: string,
      height: number,
      width: number
    }
  ],
  id: number,
  logos: string[],
  posters: [{
    file_path: string
  }],
  primeros: number
}

export interface FetchPopularMovies {
  sliderMovies: MovieSlider[] | null;
  trendMovies: Movie[] | null;
  images: string[] | []
}

export interface PopularProps{
  movies: Movie[],
  elementRef: React.RefObject<HTMLUListElement>
}

export interface SliderProps {
  autoplay?: boolean,
  images: string[]
}