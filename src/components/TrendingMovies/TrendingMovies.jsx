import noMovieImage from '../../images/no-movie.png'
import { IMAGE_BASE_URL } from '../../utils/constants'
import './TrendingMovies.css'

const TrendingMovies = ({ movies }) => (
  <section className="trending">
    <h2 className="trending__title">En tendencia</h2>

    <ul className="trending__list">
      {movies.map(({ id, title, poster_path: posterPath }) => (
        <li key={id} className="trending__item">
          <img
            className="trending__poster"
            src={posterPath ? `${IMAGE_BASE_URL}${posterPath}` : noMovieImage}
            alt={title}
          />
          <h3 className="trending__movie-title">{title}</h3>
        </li>
      ))}
    </ul>
  </section>
)

export default TrendingMovies
