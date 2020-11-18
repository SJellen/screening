import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'

function useSearchResultsMovie() {
    const {posterPath, setItemPageOpen, setMovieId, fetchMovieDetails, setMediaType, searchResultsMovie, fetchMovieCredits, setMovieCredits, fetchMovieReviews, fetchMovieSimilar, fetchMovieRecommend, fetchMovieVideos}  = useContext(Context)


    function handleSearchMovieClick(e) {
        let selection = searchResultsMovie[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        fetchMovieReviews(selection)
        setMovieCredits([])
        fetchMovieRecommend(selection)
        fetchMovieSimilar(selection)
        fetchMovieReviews(selection)
        fetchMovieCredits(selection)
        fetchMovieVideos(selection)
        setItemPageOpen(true)
        
    }

    const searchResultsMovieTile = searchResultsMovie.map((movie, index) => 
       
        <div className="slider-card" key={movie.id}> 
        <img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" className="slider-poster" onClick={() => handleSearchMovieClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        
        )

        return {searchResultsMovieTile}
}



export default useSearchResultsMovie