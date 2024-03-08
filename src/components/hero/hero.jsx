import React from 'react'
import './hero.scss'
import ServiceMovie from '../services/service-movie'
import Spinner from '../spinner/spinner'
import Error from '../error/error'

class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
          movie: {},
          loading: true,
          error: false
        }
        this.ServiceMovie = new ServiceMovie()
        this.getMovie()
    }

    getMovie = () => {
      this.ServiceMovie.getRandomMovie()
      .then(res => this.setState({movie: res}))
      .catch(() => this.setState({error: true}))
      .finally(() => this.setState({loading: false}))
    }

  render () {
    const {movie, loading, error} = this.state

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
                <button  className='btn btn-primary'>details</button>
            </div>
    
            <div className="hero__movie">
                 {errorContent}
                 {loadingContent}
                 {content}
            </div>
        </div>
      )
  }
}

export default Hero

const Content = ({movie}) => {
  return(
      <>
        <img src={movie.backdrop_path} alt="img" />
  
        <div className="hero__movie-descr">
            <h2>{movie.name}</h2>
            <p>{movie.description && movie.description.length > 250 
             ? `${movie.description.slice(0, 250)}... `
             : movie.description}</p>

          <div>
             <button className='btn btn-secondary'>Random movie</button>
             <button className='btn btn-primary'>Details</button>
           </div>
       </div>
      </>
  )
}