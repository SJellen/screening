import { useContext } from 'react'
import {Context} from '../Context'

function useTvTrending() {
    const {tvTrending, posterPath}  = useContext(Context)
 
    const tvTrendingTile = tvTrending.map(show => 
        
        <div className="trending-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster"/>
        <span className="trending-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="trending-title">{show.name}</span>
        </div>
        )

        return {tvTrendingTile}
}


export default useTvTrending