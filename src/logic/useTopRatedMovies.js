import { useContext } from 'react'
import {Context} from '../Context'

function useTopRatedMovies() {
    const {topRatedMovies, posterPath,setItemBoxOpen, setMovieId}  = useContext(Context)

    function handleMovieTopRatedClick(e) {
        let selection = topRatedMovies[e].id
        setMovieId(selection)
        setItemBoxOpen(prevState => !prevState)
    }
 
    const topRatedMoviesTile = topRatedMovies.map((movie, index) => 
        
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster" onClick={() => handleMovieTopRatedClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {topRatedMoviesTile}
}


export default useTopRatedMovies