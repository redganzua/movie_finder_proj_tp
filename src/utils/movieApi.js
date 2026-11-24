import { API_BASE_URL, API_OPTIONS } from './constants'

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(new Error(`Error: ${response.status}`))
}

export const getMovies = (searchTerm = '') => {
  const endpoint = searchTerm
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

  return fetch(endpoint, API_OPTIONS).then(checkResponse)
}

export const getTrendingMovies = () =>
  fetch(`${API_BASE_URL}/trending/movie/week`, API_OPTIONS).then(checkResponse)
