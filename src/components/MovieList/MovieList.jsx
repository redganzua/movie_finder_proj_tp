import MovieCard from '../MovieCard/MovieCard'
import Spinner from '../Spinner/Spinner'
import './MovieList.css'

const MovieList = ({ movies, isLoading, errorMessage }) => {
  const renderContent = () => {
    if (isLoading) {
      return <Spinner />
    }

    if (errorMessage) {
      return (
        <p className="movie-list__message movie-list__message_type_error" role="alert">
          {errorMessage}
        </p>
      )
    }

    if (movies.length === 0) {
      return <p className="movie-list__message">No se encontraron películas.</p>
    }

    return (
      <ul className="movie-list__items">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    )
  }

  return (
    <section className="movie-list">
      <h2 className="movie-list__title">Todas las películas</h2>
      {renderContent()}
    </section>
  )
}

export default MovieList
