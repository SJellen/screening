import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function MovieSimilar() {

    const {posterPath, handleMovieClick,movieSimilarArr}  = useContext(Context)

    const movieSimilarTile = movieSimilarArr.map((movie, index) => 
        
    <div className="slider-card" key={movie.id}> 
    <Link to={`/itemPage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, movieSimilarArr, prevState => prevState)}/></Link>
    <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
    <span className="slider-title" >{movie.title}</span>
    </div>
    )

    return {movieSimilarTile}


    
}

export default MovieSimilar