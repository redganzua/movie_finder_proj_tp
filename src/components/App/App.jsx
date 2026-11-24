import { useEffect, useState } from 'react'
import MovieFan from '../MovieFan/MovieFan'
import Search from '../Search/Search'
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import MovieList from '../MovieList/MovieList'
import { useDebounce } from '../../hooks/useDebounce'
import { getMovies, getTrendingMovies } from '../../utils/movieApi'
import {
  DEBOUNCE_DELAY,
  MOVIES_ERROR_MESSAGE,
  TRENDING_LIMIT,
} from '../../utils/constants'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY)

  useEffect(() => {
    let isCancelled = false

    setIsLoading(true)
    setErrorMessage('')

    getMovies(debouncedSearchTerm)
      .then((data) => {
        if (isCancelled) return
        setMovies(data.results)
        setIsLoading(false)
      })
      .catch(() => {
        if (isCancelled) return
        setMovies([])
        setErrorMessage(MOVIES_ERROR_MESSAGE)
        setIsLoading(false)
      })

    return () => {
      isCancelled = true
    }
  }, [debouncedSearchTerm])

  useEffect(() => {
    let isCancelled = false

    getTrendingMovies()
      .then((data) => {
        if (isCancelled) return
        setTrendingMovies(data.results.slice(0, TRENDING_LIMIT))
      })
      .catch(() => {
        // Sección opcional por si falla no se muestra
        if (isCancelled) return
        setTrendingMovies([])
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <main className="page">
      <div className="page__pattern" />

      <div className="page__wrapper">
        <header className="header">
          <MovieFan />
          <h1 className="header__title">
            Encuentra tus <span className="header__title-accent">películas favoritas</span> sin complicarte
          </h1>
          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && <TrendingMovies movies={trendingMovies} />}

        <MovieList
          movies={movies}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </main>
  )
}

export default App
