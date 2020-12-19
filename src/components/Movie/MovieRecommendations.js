import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function MovieRecommendations() {

    const {posterPath, handleMovieClick, movieRecommendationArr, ratingTruncate}  = useContext(Context)

    const movieRecommendTile = movieRecommendationArr && movieRecommendationArr.map((movie, index) => 
        
    <div className="slider-card" key={movie.id}>
    <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, movieRecommendationArr, prevState => prevState)}/></Link>
    {ratingTruncate(movie)}
    <span className="slider-title" >{movie.title}</span>
    </div>
    )

    return {movieRecommendTile}
}

export default MovieRecommendations