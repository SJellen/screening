import { useContext } from 'react'
import {Context} from '../Context'

function useMovieTrending() {
    const {movieTrending, posterPath}  = useContext(Context)
    

    const movieTrendingTile = movieTrending.map(movie => 
        
        <div className="trending-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster"/>
        <span className="trending-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="trending-title">{movie.title}</span>
        </div>
        )

        return {movieTrendingTile}
}



export default useMovieTrending