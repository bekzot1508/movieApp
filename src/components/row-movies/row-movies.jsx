import {useState, useEffect} from 'react'
import "./row-movies.scss"
import RowMoviesItem from '../row-movies-item/row-movies-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';
import ServiceMovie from "../services/service-movie";
import Error from '../error/error';
import Spinner from '../spinner/spinner';

const RowMovies = () => {
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const [open, setOpen] = useState(false)
const [movies, setMovies] = useState([])
const [movieId, setMovieId] = useState(null)
const [page, setPage] = useState(2)
const [newItemLoading, setNewItemLoading] = useState(false)

//  const ServiceMovie = new ServiceMovie()

    useEffect(() => {
        getTrandingMovies()
    }, [])

    const onClose = () => setOpen(false)
    const onOpen = (id) => {
        setMovieId(id)
        setOpen(true)
    }

    const getTrandingMovies = (page) => {

    new ServiceMovie().getTrandingMovies(page)
        .then(res => setMovies(movies => [...movies, ...res]))
        .catch(() => setError(true))
        .finally(() => {
            setLoading(false)
            setNewItemLoading(false)
        })
    }


    const getMoreMovies = () => {
        setPage(page => page + 1)
        setNewItemLoading(true)
        getTrandingMovies(page) 
    }


        const errorContent = error ? <Error/> : null
        const loadingContent = loading ? <Spinner/> : null
        const content = !(error || loading) ? <Content movies={movies} onOpen={onOpen}/> : null

        return (
            <div className='rowmovies'>
                <div className="rowmovies__top">
                    <div className="rowmovies__top-title">
                        <img src="/public/tranding.svg" alt="trend" />
                        <h1>trending</h1>
                    </div>
                    <div className="hr"/>
                    <a href="#">See More</a>
                </div>
              
                {errorContent}
                {loadingContent}
                {content}

                <div className="rowmovies__loadmore">
                    <button 
                      className='btn btn-secondary' 
                      onClick={getMoreMovies}
                    //   disabled={!newItemLoading}
                      >
                        Load More
                    </button>
                </div>
        
        
                <Modal open={open} onClose={onClose}>
                    <MovieInfo movieId={movieId}/>
                </Modal>
            </div>
          )
}

export default RowMovies

const Content = ({movies, onOpen}) => {
    return (
        <div className="rowmovies__lists">
        {movies.map((movie) => (
            <RowMoviesItem 
              key={movie.id} 
              movie={movie} 
              onOpen={onOpen}
            />
        ))}
    </div>
    )
}