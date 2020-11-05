import { useContext } from 'react'
import {Context} from '../Context'


function useMovieTrending() {
    const {movieTrending, posterPath, setItemBoxOpen}  = useContext(Context)

    function handleMovieTrendingClick(e) {
        let selection = movieTrending[e].id
        let mediaType = movieTrending[e].media_type
        console.log(selection, mediaType)
        setItemBoxOpen(prevState => !prevState)
    }
    

    const movieTrendingTile = movieTrending.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster" onClick={() => handleMovieTrendingClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        </div>
        )

        return {movieTrendingTile}
}



export default useMovieTrending