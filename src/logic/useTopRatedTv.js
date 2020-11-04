import { useContext } from 'react'
import {Context} from '../Context'

function useTopRatedTv() {
    const {topRatedTv, posterPath}  = useContext(Context)
 
    const topRatedTvTile = topRatedTv.map(show => 
        
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster"/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {topRatedTvTile}
}


export default useTopRatedTv