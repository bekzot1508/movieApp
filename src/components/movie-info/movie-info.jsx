import {useState, useEffect} from 'react'
import "./movie-info.scss"
import ServiceMovie from '../services/service-movie'
import Error from '../error/error'
import Spinner from '../spinner/spinner'
import useServiceMovie from '../services/service-movie'

const MovieInfo = ({movieId}) => {
  const [movie, setMovie] = useState(null)
 
  const {getDetailedMovie} = useServiceMovie()

  useEffect(() => {
    upDateMovies()
  }, [movieId])

  const upDateMovies = () => {
    if(!movieId) {
     return
    }

    getDetailedMovie(movieId).then(res => setMovie(res))
  }

    const errorContent = error ? <Error/> : null
    const loadingContent = loading ? <Spinner/> : null
    const content = !(error || loading) ? <Content movie={movie}/> : null

    return (
      <div className='movieinfo'>
         {errorContent}
         {loadingContent}
         {content}
         {/* <Content movie={movie}/> */}
      </div>
    )
}

export default MovieInfo

const Content = ({movie}) => {
  return(
      <>
        <img src={movie.backdrop_path} alt="img" />
  
        <div className="hero__movie-descr">
            <h2>{movie.name}</h2>
            <p>{movie.description}</p>

            {/* <div className="movieitem__descr">
                <p>{movie.release_date}</p>
                <div className="dot"/>
                <p>{movie.vote_average}</p>
              </div> */}
       </div>
      </>
  )
}