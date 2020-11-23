import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useSearchResultsMovie() {
    const {handleMovieClick, posterPath, searchResultsMovie}  = useContext(Context)



    const searchResultsMovieTile = searchResultsMovie.map((movie, index) => 
       
        <div className="slider-card" key={movie.id}> 
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" className="slider-poster" onClick={() => handleMovieClick(index, searchResultsMovie, true)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        
        )

        return {searchResultsMovieTile}
}



export default useSearchResultsMovie