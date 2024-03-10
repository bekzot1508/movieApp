import React from 'react'
import "./row-movies.scss"
import RowMoviesItem from '../row-movies-item/row-movies-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';
import ServiceMovie from "../services/service-movie";
import Error from '../error/error';
import Spinner from '../spinner/spinner';

class RowMovies extends React.Component {
    state = {
            loading: true,
            error: false,
            open: false,
            movies: [],
            movieId: null,
            page: 2,
            newItemLoading: false,
        }
        ServiceMovie = new ServiceMovie()

    componentDidMount() {
        this.getTrandingMovies()
    }

    onClose = () => this.setState({open: false})
    onOpen = (id) => this.setState({open: true, movieId: id})

    getTrandingMovies = (page) => {
        this.ServiceMovie.getTrandingMovies(page)
        .then(res => this.setState(({movies}) => ({movies: [...movies, ...res]})))
        .catch(() => this.setState({error: true}))
        .finally(() => this.setState({loading: false, newItemLoading: false }))
    }

    getMoreMovies = () => {
        this.setState(({page}) => ({page: page+1, newItemLoading: true }))
        console.log(this.state.page);
        this.getTrandingMovies(this.state.page)
    }

    render() {
        const {open, movies, movieId, error, loading, newItemLoading} = this.state

        const errorContent = error ? <Error/> : null
        const loadingContent = loading ? <Spinner/> : null
        const content = !(error || loading) ? <Content movies={movies} onOpen={this.onOpen}/> : null

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
                      onClick={this.getMoreMovies}
                    //   disabled={!newItemLoading}
                      >
                        Load More
                    </button>
                </div>
        
        
                <Modal open={open} onClose={this.onClose}>
                    <MovieInfo movieId={movieId}/>
                </Modal>
            </div>
          )
    }
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