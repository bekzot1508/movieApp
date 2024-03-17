import React from 'react'
import Hero from '../hero/hero'
import Navbar from '../navbar/navbar'
import "../../styles/variables.scss"
import RowMovies from '../row-movies/row-movies'

import ErrorBoundary from '../error-boundary/error-boundary'
import useServiceMovie from '../services/service-movie.js'
import {Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home-page'
import Popular from '../pages/popular-page'
import DetailedPage from '../pages/detailed-page'
import NotFoundPage from '../pages/not-found-page'
import TrandingPage from '../pages/tranding-page'
 

function App() {

  const serviceMovie = useServiceMovie() // classlardan foydalanish uchun doim "new" constrotoridan foydalanamiz
 
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/tranding' element={<TrandingPage/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie/:movieId' element={<DetailedPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

    </div>
  )
}

export default App