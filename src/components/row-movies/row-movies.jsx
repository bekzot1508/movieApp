import React from 'react'
import "./row-movies.scss"
import RowMoviesItem from '../row-movies-item/row-movies-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';
import ServiceMovie from "../services/service-movie";

class RowMovies extends React.Component {
    state = {
            open: false,
            movies: [],
            movieId: null
        }
        ServiceMovie = new ServiceMovie()

    componentDidMount() {
        this.getTrandingMovies()
    }

    // onToggleOpen = () => {
    //     this.setState(({open}) => ({open: !open}))
    // }

    onClose = () => this.setState({open: false})
    onOpen = (id) => this.setState({open: true, movieId: id})

    getTrandingMovies = () => {
        this.ServiceMovie.getTrandingMovies()
        .then(res => {
            this.setState({movies: res})
        })
    }

    render() {
        const {open, movies, movieId} = this.state
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
        
                <div className="rowmovies__lists">
                    {movies.map((movie) => (
                        <RowMoviesItem 
                          key={movie.id} 
                          movie={movie} 
                          onOpen={this.onOpen}
                        />
                    ))}
                </div>
        
                <Modal open={open} onClose={this.onClose}>
                    <MovieInfo movieId={movieId}/>
                </Modal>
            </div>
          )
    }
}

export default RowMovies