import axios from 'axios'
import {useEffect,useState} from 'react'
import { BASE_URL, API_KEY, POSTER_PATH } from '../globals'

const MovieDetails = (props) => {
  const [details, setDetails] = useState(null)
  useEffect(()=>{
    async function getDetails(){
      const response = await axios.get(`${BASE_URL}/movie/${props.id}?api_key=${API_KEY}`)
      setDetails(response.data)
    }
    getDetails()
  }, [props.id])
  return(
  <div className = 'detail'>{details ? (
    <div>
      <h1>{details.title}</h1>
      <h3>Release Date: {details.release_date}</h3>
      <h3>Details: {details.overview}</h3>
      <img className = 'detailImg' src={`${POSTER_PATH}${details.backdrop_path}`} alt='poster'/>
    </div>
  ) : 'loading...'}</div>

)
}
export default MovieDetails