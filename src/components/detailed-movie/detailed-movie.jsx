import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../error/error'
import Spinner from '../spinner/spinner'
import './detailed-movie.scss'
import useServiceMovie from '../services/service-movie.js'

const DetailedMovie = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)
    const {getDetailedMovie, error, loading} = useServiceMovie()
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
    <>
      {errorContent},
      {loadingContent},
      {content}
      {/* <Content movie={movie}/> */}
    </>

  )
}

export default DetailedMovie

const Content = ({movie}) => {
    return (
    <div className='detailedmovie'>
        <div className="detailedmovie__image">
            <img src={movie.poster_path} alt={movie.name} />
        </div>
        <div className="detailedmovie__descr">
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <div className="detailedmovie__descr-info">
                <img src="/public/date.svg" alt="" />
               <p>{movie.release_date}</p>
               <div className="dot"/>
               <p>{movie.vote_average.toFixed(1)}</p>
               <img src="/public/star.svg" alt="" />
            </div>
        </div>
    </div>
    )
}