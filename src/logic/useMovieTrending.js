import { useContext } from 'react'
import {Context} from '../Context'

function useMovieTrending() {
    const {movieTrending, posterPath}  = useContext(Context)
    

    const movieTrendingTile = movieTrending.map(movie => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster"/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {movieTrendingTile}
}



export default useMovieTrending