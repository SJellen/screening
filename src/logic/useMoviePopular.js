import { useContext } from 'react'
import {Context} from '../Context'

function useMoviePopular() {
    const {posterPath, popularMovies}  = useContext(Context)

    const popularMoviesTile = popularMovies.map(movie => 
        
        <div className="popular-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster"/>
        <span className="popular-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="popular-title">{movie.title}</span>
        </div>
        )

        return {popularMoviesTile}
}



export default useMoviePopular