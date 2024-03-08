import React from 'react'
import "./movie-info.scss"

const MovieInfo = () => {
  return (
    <div className='movieinfo'>
        <img src="/public/image1.svg" alt="movie" />

        <div className="movieinfo__descr">
            <h1>Movie title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, expedita.</p>
        </div>
    </div>
  )
}

export default MovieInfo