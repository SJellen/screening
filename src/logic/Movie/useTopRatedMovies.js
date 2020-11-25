import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useTopRatedMovies() {
    const {topRatedMovies, posterPath, handleMovieClick, handleRibbonMovie, watchListMovie}  = useContext(Context)

 
    const topRatedMoviesTile = topRatedMovies.map((movie, index) => 

        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
        { watchListMovie.includes(movie.id) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, topRatedMovies)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, topRatedMovies)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, topRatedMovies)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {topRatedMoviesTile}
}


export default useTopRatedMovies