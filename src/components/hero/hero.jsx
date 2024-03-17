import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './hero.scss'
import Spinner from '../spinner/spinner'
import Error from '../error/error'
import useServiceMovie from '../services/service-movie.js'

function Hero () {
  const [movie, setMovie] = useState(null);

  const {getRandomMovie, loading, error} = useServiceMovie()

  useEffect (() => {
    getUpdateMovie()
  }, [])

   const getUpdateMovie = () => {
    // setLoading(true)

    getRandomMovie().then(res => setMovie(res))

    }

    const errorContent = error ? <Error/> : null
    const loadingContent = loading ? <Spinner/> : null
    const content = !(error || loading) ? <Content movie={movie}/> : null

    return (
        <div className='hero'>
            <div className="hero__info">
                <h2>FIND MOVIES</h2>
                <h1>TV shows and more</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis esse magni saepe laboriosam, cupiditate corrupti quod repellat inventore officia at aliquid velit, eaque impedit consequuntur maiores in reiciendis! Dignissimos minus, odio illo cum nihil dolore reiciendis quo ut recusandae placeat doloribus tempora atque ipsam sapiente esse sint culpa eligendi!
                </p>
                <div>
                   <button  className='btn btn-primary'>details</button>
                   <button className='btn btn-secondary' onClick={getUpdateMovie}>Random movie</button>
                </div>
            </div>
    
            <div className="hero__movie">
                 {errorContent}
                 {loadingContent}
                 {content}
            </div>
        </div>
      )
}

export default Hero

const Content = ({movie}) => {
  const navigate = useNavigate()
  return(
      <>
        <img src={movie.backdrop_path} alt="img" />
  
        <div className="hero__movie-descr">
            <h2>{movie.name}</h2>
            <p>{movie.description && movie.description.length > 250 
             ? `${movie.description.slice(0, 250)}... `
             : movie.description}</p>

          
             <button 
               className='btn btn-primary'
               onClick={() => navigate(`/movie/${movie.id}`)}
              >
                Details
              </button>
          
       </div>
      </>
  )
}