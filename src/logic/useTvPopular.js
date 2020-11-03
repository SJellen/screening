import { useContext } from 'react'
import {Context} from '../Context'

function useTvPopular() {
    const {posterPath, popularTv}  = useContext(Context)
    

    const popularTvTile = popularTv.map(show => 
        
        <div className="popular-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster"/>
        <span className="popular-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="popular-title">{show.name}</span>
        </div>
        )

        return {popularTvTile}
}



export default useTvPopular