import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'



function MovieRecommendations() {

    const {posterPath, setMovieId, fetchMovieDetails, setMediaType, fetchMovieCredits, setMovieCredits, fetchMovieRecommend, movieRecommendationArr, fetchMovieReviews, fetchMovieVideos}  = useContext(Context)

    function handleMovieRecommendClick(e) {
        let selection = movieRecommendationArr[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        fetchMovieRecommend(selection)
        fetchMovieReviews(selection)
        fetchMovieVideos(selection)
        window.scrollTo(0, 0)
        // setItemPageOpen(true)
    
    }
 

    const movieRecommendTile = movieRecommendationArr.map((movie, index) => 
        
    <div className="slider-card" key={movie.id}> 
    <img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieRecommendClick(index)}/>
    <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
    <span className="slider-title" >{movie.title}</span>
    </div>
    )

    return {movieRecommendTile}


    
}

export default MovieRecommendations