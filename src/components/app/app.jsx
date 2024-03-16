import React from 'react'
import Hero from '../hero/hero'
import Navbar from '../navbar/navbar'
import "../../styles/variables.scss"
import RowMovies from '../row-movies/row-movies'

import ErrorBoundary from '../error-boundary/error-boundary'
import useServiceMovie from '../services/service-movie.js'
 

function App() {

  const serviceMovie = useServiceMovie() // classlardan foydalanish uchun doim "new" constrotoridan foydalanamiz
 
  return (
    <div className='app'>
      <Navbar/>
      
      
        <Hero/>
      

      
        <RowMovies/>
     
      
    </div>
  )
}

export default App