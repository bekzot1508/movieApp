import React from 'react'
import "./row-movies.scss"
import RowMoviesItem from '../row-movies-item/row-movies-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';
import ServiceMovie from "../services/service-movie";

class RowMovies extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false,
            movies: []
        }
        this.ServiceMovie = new ServiceMovie()
    }

    componentDidMount() {
        this.getTrandingMovies()
    }

    onToggleOpen = () => {
        this.setState(({open}) => ({open: !open}))
    }

    getTrandingMovies = () => {
        this.ServiceMovie.getTrandingMovies()
        .then(res => {
            this.setState({movies: res})
        })
    }

    render() {
        const {open, movies} = this.state
        console.log(movies);
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
                          onToggleOpen={this.onToggleOpen}
                        />
                    ))}
                </div>
        
                <Modal open={open} onClose={this.onToggleOpen}>
                    <MovieInfo/>
                </Modal>
            </div>
          )
    }
}

export default RowMovies