import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'


function MovieSimilar() {

    const {posterPath, handleMovieClick,movieSimilarArr, ratingTruncate, truncateTitle}  = useContext(Context)

    const movieSimilarTile = movieSimilarArr.map((movie, index) =>    
    <div className="slider-card" key={movie.id}>
    <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, movieSimilarArr, prevState => prevState)} className="slider-card-image" /></Link>
    {ratingTruncate(movie)}
    <span className="slider-title" >{truncateTitle(movie.title)}</span>
    </div>
    )
    return {movieSimilarTile}
}

export default MovieSimilar