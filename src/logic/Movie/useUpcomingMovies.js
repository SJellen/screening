import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useUpcomingMovies() {
    const {posterPath, upcomingMovies, handleMovieClick, handleRibbonMovie, watchListMovie, ratingTruncate}  = useContext(Context)


    const upcomingMoviesTile = upcomingMovies.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
        { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, upcomingMovies)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, upcomingMovies)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, upcomingMovies)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {upcomingMoviesTile}
}



export default useUpcomingMovies