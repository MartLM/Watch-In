const API_KEY = import.meta.env.VITE_API_KEY


export function getMoviesByGenre(id_genre: string) {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id_genre}&certification_country=MX&certification.lte=A`)
    .then(data => data.json())
    .then(res => res.results)
}

export async function getGenres() {
  const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`)
  const res = await data.json()
  return res.genres
}

export function getSliderMovies() {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(data => data.json())
    .then(res => res.results)
}

export function getImagesArray(movie_id: number[]) {
  const images = movie_id.map(
    id => {
      return fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&include_image_language=en%2Cnull`)
      .then(data => data.json())
      .then(res => res)
    }
  )
  return Promise.all(images)
}

export function getImages( movie_id: string | number) {
  return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${API_KEY}&include_image_language=null`)
    .then(data => data.json())
    .then(res => res)
}

export function getMovieDetails(id: string) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(data => data.json())
    .then(res => res)
}

export function getRelatedMovies(movie_id: string) {
  return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}&certification_country=MX&certification.lte=A`)
  .then(data => data.json())
  .then(res => res.results)
}

export function getCredits(movie_id: string) {
  return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`)
    .then(data => data.json())
    .then(res => res)
}