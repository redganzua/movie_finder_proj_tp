import noMovieImage from '../../images/no-movie.png'
import starIcon from '../../images/star.svg'
import { IMAGE_BASE_URL } from '../../utils/constants'
import './MovieCard.css'

const MovieCard = ({
  movie: {
    title,
    vote_average: voteAverage,
    poster_path: posterPath,
    release_date: releaseDate,
    original_language: originalLanguage,
  },
}) => {
  const posterUrl = posterPath ? `${IMAGE_BASE_URL}${posterPath}` : noMovieImage
  // Se toma el año del texto para evitar errores de zona horaria con Date
  const releaseYear = releaseDate ? releaseDate.split('-')[0] : 'N/A'

  return (
    <li className="movie-card">
      <img className="movie-card__poster" src={posterUrl} alt={title} />

      <h3 className="movie-card__title">{title}</h3>

      <div className="movie-card__info">
        <p className="movie-card__rating">
          <img className="movie-card__rating-icon" src={starIcon} alt="Star icon" />
          {voteAverage ? voteAverage.toFixed(1) : 'N/A'}
        </p>
        <p className="movie-card__language">
          {originalLanguage ? originalLanguage.toUpperCase() : 'N/A'}
        </p>
        <p className="movie-card__year">{releaseYear}</p>
      </div>
    </li>
  )
}

export default MovieCard
