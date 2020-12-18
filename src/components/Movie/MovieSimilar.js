import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function MovieSimilar() {

    const {posterPath, handleMovieClick,movieSimilarArr, watchListMovie, ratingTruncate, watchListMovieIds, setWatchListMovie}  = useContext(Context)

    function handleRibbonMovieSimilar(e,arr) {
        let selection = arr[e].id
        let selectionInfo = arr[e]
        if (watchListMovieIds.includes(selection)) {
            setWatchListMovie([...watchListMovie.filter(item => item.id !== selection)])
        } else {
            setWatchListMovie([...watchListMovie, selectionInfo])
        } 
    } 

    const movieSimilarTile = movieSimilarArr.map((movie, index) => 
        
    <div className="slider-card" key={movie.id}>
    <span className="watchlist-ribbon">
    { watchListMovieIds && watchListMovieIds.includes(movie.id) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovieSimilar(index, movieSimilarArr)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovieSimilar(index, movieSimilarArr)} style={{color: ""}}></i>
       }
        </span> 
    <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, movieSimilarArr, prevState => prevState)}/></Link>
    {ratingTruncate(movie)}
    <span className="slider-title" >{movie.title}</span>
    </div>
    )

    return {movieSimilarTile}


    
}

export default MovieSimilar