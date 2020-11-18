import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'



function MovieSimilar() {

    const {posterPath, setMovieId, fetchMovieDetails, setMediaType, fetchMovieCredits, setMovieCredits, fetchMovieRecommend, movieSimilarArr, fetchMovieSimilar, fetchMovieReviews, fetchMovieVideos}  = useContext(Context)

    function handleMovieSimilarClick(e) {
        let selection = movieSimilarArr[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        fetchMovieRecommend(selection)
        fetchMovieReviews(selection)
        fetchMovieSimilar(selection)
        fetchMovieVideos(selection)
        window.scrollTo(0, 0)
        // setItemPageOpen(true)
    
    }
 

    const movieSimilarTile = movieSimilarArr.map((movie, index) => 
        
    <div className="slider-card" key={movie.id}> 
    <img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieSimilarClick(index)}/>
    <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
    <span className="slider-title" >{movie.title}</span>
    </div>
    )

    return {movieSimilarTile}


    
}

export default MovieSimilar