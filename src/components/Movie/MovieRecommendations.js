import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function MovieRecommendations() {

    const {posterPath, handleMovieClick, movieRecommendationArr, handleRibbonMovie, watchListMovie, ratingTruncate, watchListMovieIds, setWatchListMovie}  = useContext(Context)

    function handleRibbonMovieRecommendations(e,arr) {
        let selection = arr[e].id
        let selectionInfo = arr[e]
        if (watchListMovieIds.includes(selection)) {
            setWatchListMovie([...watchListMovie.filter(item => item.id !== selection)])
        } else {
            setWatchListMovie([...watchListMovie, selectionInfo])
        } 
    } 

    const movieRecommendTile = movieRecommendationArr && movieRecommendationArr.map((movie, index) => 
        
    <div className="slider-card" key={movie.id}>
    <span className="watchlist-ribbon">
    {  watchListMovieIds && watchListMovieIds.includes(movie.id) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovieRecommendations(index, movieRecommendationArr)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovieRecommendations(index, movieRecommendationArr)} style={{color: ""}}></i>
       }
        </span> 
    <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, movieRecommendationArr, prevState => prevState)}/></Link>
    {ratingTruncate(movie)}
    <span className="slider-title" >{movie.title}</span>
    </div>
    )

    return {movieRecommendTile}


    
}

export default MovieRecommendations