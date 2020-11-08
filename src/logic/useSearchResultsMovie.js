import { useContext } from 'react'
import {Context} from '../Context'

function useSearchResultsMovie() {
    const {posterPath, setItemBoxOpen, setMovieId, fetchMovieDetails, setMediaType, searchResultsMovie}  = useContext(Context)


    function handleSearchMovieClick(e) {
        let selection = searchResultsMovie[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setItemBoxOpen(true)
        
    }

    const searchResultsMovieTile = searchResultsMovie.map((movie, index) => 
       
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster" onClick={() => handleSearchMovieClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        
        )

        return {searchResultsMovieTile}
}



export default useSearchResultsMovie