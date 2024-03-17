import {lazy, Suspense} from 'react'
import Navbar from '../navbar/navbar'
import "../../styles/variables.scss"
import ErrorBoundary from '../error-boundary/error-boundary'
import useServiceMovie from '../services/service-movie.js'
import {Route, Routes } from 'react-router-dom'
import Spinner from '../spinner/spinner'
 
const NotFoundPage = lazy(()=> import('../pages/not-found-page'))
const HomePage = lazy(() => import('../pages/home-page'))
const TrandingPage = lazy(() => import('../pages/tranding-page'))
const Popular = lazy(() => import('../pages/popular-page'))
const DetailedPage = lazy(() => import('../pages/detailed-page'))

function App() {

  const serviceMovie = useServiceMovie() // classlardan foydalanish uchun doim "new" constrotoridan foydalanamiz
 
  return (
    <div className='app'>
      <Navbar/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/tranding' element={<TrandingPage/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/movie/:movieId' element={<DetailedPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>

    </div>
  )
}

export default App