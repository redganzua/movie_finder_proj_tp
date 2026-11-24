import searchIcon from '../../images/search.svg'
import './Search.css'

const Search = ({ searchTerm, onSearchChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    onSearchChange(event.target.value)
  }

  return (
    <form className="search" role="search" onSubmit={handleSubmit}>
      <img className="search__icon" src={searchIcon} alt="Search icon" />
      <label className="search__label" htmlFor="movie-search">
        Search for a movie
      </label>
      <input
        className="search__input"
        id="movie-search"
        type="search"
        placeholder="Busca una peli..."
        value={searchTerm}
        onChange={handleChange}
        required
      />
    </form>
  )
}

export default Search
