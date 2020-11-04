import { useContext } from 'react'
import {Context} from '../Context'

function useUpcomingMovies() {
    const {posterPath, upcomingMovies}  = useContext(Context)

    function handleUpcomingMoviesClick(e) {
        let selection = upcomingMovies[e].id
        console.log(selection)
    }

    const upcomingMoviesTile = upcomingMovies.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster" onClick={() => handleUpcomingMoviesClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {upcomingMoviesTile}
}



export default useUpcomingMovies