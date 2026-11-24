import bleachPoster from '../images/bleach.jpg'
import interstellarPoster from '../images/interstellar.jpg'
import jjkPoster from '../images/jjk.jpg'

export const API_BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
export const DEBOUNCE_DELAY = 500
export const TRENDING_LIMIT = 5
export const MOVIES_ERROR_MESSAGE =
  'No pudimos cargar películas :c inténtalo más tarde.'

// El orden importa: la tarjeta central va al final para quedar encima.
export const FAN_POSTERS = [
  { id: 1, image: bleachPoster, title: 'Bleach', position: 'left' },
  { id: 2, image: jjkPoster, title: 'Jujutsu Kaisen', position: 'right' },
  { id: 3, image: interstellarPoster, title: 'Interstellar', position: 'center' },
]
