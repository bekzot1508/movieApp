import {useState, useEffect} from 'react'
import "./row-movies.scss"
import RowMoviesItem from '../row-movies-item/row-movies-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';
import Error from '../error/error';
import Spinner from '../spinner/spinner';
import useServiceMovie from '../services/service-movie';

const RowMovies = () => {
const [open, setOpen] = useState(false)
const [movies, setMovies] = useState([])
const [movieId, setMovieId] = useState(null)
const [page, setPage] = useState(2)
const [newItemLoading, setNewItemLoading] = useState(false)

 const {getTrandingMovies, error, loading} = useServiceMovie()

    useEffect(() => {
        getMovies()
    }, [])

    const onClose = () => setOpen(false)

    const onOpen = (id) => {
        setMovieId(id)
        setOpen(true)
    }

    const getMovies = (page) => {
        getTrandingMovies(page)
        .then(res => setMovies(movies => [...movies, ...res]))
        .finally(() => setNewItemLoading(false))
    }


    const getMoreMovies = () => {
        setPage(page => page + 1)
        setNewItemLoading(true)
        getMovies(page) 
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
                <Content movies={movies} onOpen={onOpen}/>3

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