import { useContext } from 'react'
import {Context} from '../Context'

function useMoviePopular() {
    const {posterPath, popularMovies, setItemBoxOpen, setMovieId, setTvId, setPersonId}  = useContext(Context)


    function handleMoviePopularClick(e) {
        let selection = popularMovies[e].id
        let mediaType = "movie"
        console.log(selection, mediaType)
        setItemBoxOpen(prevState => !prevState)
    }

    const popularMoviesTile = popularMovies.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster" onClick={() => handleMoviePopularClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {popularMoviesTile}
}



export default useMoviePopular