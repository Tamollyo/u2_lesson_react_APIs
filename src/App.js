import './styles/App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './globals'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one
  const selectMovie = (id) => {
    setSelectedMovie(id)
  }
  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}`
      )
      setMovies(response.data.results)
    }
    getMovies()
  }, [])
  console.log(movies)
  return (
    <div>
      {selectedMovie ? (
        <MovieDetails id={selectedMovie} />
      ) : (
        <MovieList movies={movies} selectMovie={selectMovie} />
      )}
    </div>
  )
}
export default App
