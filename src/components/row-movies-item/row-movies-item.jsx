import React from 'react'
import "./row-movies-item.scss"

const RowMoviesItem = ({movie, onToggleOpen}) => {
  return (
    <div className='movieitem' onClick={onToggleOpen}>
        <MovieContent movie={movie}/>
    </div>
  )
}

export default RowMoviesItem

  const MovieContent = ({movie}) => {
  return (
    <>
       <img src={movie.poster_path} alt={movie.name} />
        <h2>{movie.name && movie.name.length > 18 ? `${movie.name.slice(0, 18)}...`: movie.name}</h2>
        <div className="movieitem__descr">
          <img src="/date.svg" alt="" />
            <p>{movie.release_date}</p>
            <div className="dot"/>
            <p>{movie.vote_average.toFixed(1)}</p>
            <img src="/star.svg" alt="" />
        </div>
    </>
  )
}