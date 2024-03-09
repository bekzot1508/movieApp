import React from 'react'
import "./row-movies-item.scss"

const RowMoviesItem = ({movie, onOpen}) => {
  return (
    <div className='movieitem' onClick={() => onOpen(movie.id)}>
        <img src={movie.poster_path} alt={movie.name} />
        <h2>{movie.name && movie.name.length > 20 ? `${movie.name.slice(0, 15)}...` : movie.name}</h2>
        <div className="movieitem__descr">
            <p>{movie.release_date}</p>
            <div className="dot"/>
            <p>{movie.vote_average}</p>
        </div>
    </div>
  )
}

export default RowMoviesItem