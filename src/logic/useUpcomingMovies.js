import { useContext } from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useUpcomingMovies() {
    const {posterPath, upcomingMovies, setItemPageOpen, setMovieId, fetchMovieDetails, setMediaType, fetchMovieCredits}  = useContext(Context)

    function handleUpcomingMoviesClick(e) {
        let selection = upcomingMovies[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        fetchMovieCredits(selection)
        setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
        
    }

    const upcomingMoviesTile = upcomingMovies.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleUpcomingMoviesClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {upcomingMoviesTile}
}



export default useUpcomingMovies