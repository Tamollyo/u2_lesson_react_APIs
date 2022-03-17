import { POSTER_PATH } from '../globals'
import MovieDetails from './MovieDetails'

const MovieList = ({movies, selectMovie}) => {
  let overview
  return(
    <div className='grid'>
      {
        movies.map((movie) =>(
          <div key={movie.id} className='card'>
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt='poster'/>
            <h3>{movie.title}</h3>
            <button onClick={()=>selectMovie(movie.id)}>View Details</button>
          </div>
        ))
      }
    </div>
  )
}
export default MovieList
