import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useTvTrending() {
    const {tvTrending, posterPath, handleTvClick}  = useContext(Context)

    
 
    const tvTrendingTile = tvTrending.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <Link to={`/tvPage/${show.id}`} ><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, tvTrending)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {tvTrendingTile}
}


export default useTvTrending