import { FAN_POSTERS } from '../../utils/constants'
import './MovieFan.css'

const MovieFan = () => (
  <ul className="movie-fan">
    {FAN_POSTERS.map(({ id, image, title, position }) => {
      const isCenter = position === 'center'

      return (
        <li
          key={id}
          className={`movie-fan__item movie-fan__item_position_${position}`}
        >
          <img
            className={`movie-fan__image ${isCenter ? '' : 'movie-fan__image_dimmed'}`}
            src={image}
            alt={title}
          />
        </li>
      )
    })}
  </ul>
)

export default MovieFan
