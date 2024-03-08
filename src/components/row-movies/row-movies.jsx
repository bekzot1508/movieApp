import React from 'react'
import "./row-movies.scss"
import {movies} from "../../constants/index"
import RowMoviesItem from '../row-movies-item/row-movies-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';

class RowMovies extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    onToggleOpen = () => {
        this.setState(({open}) => ({open: !open}))
    }
    render() {
        const {open} = this.state
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
                    {movies.map((movie, idx) => (
                        <RowMoviesItem 
                          key={idx} 
                          movie={{...movie, index: idx}} 
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