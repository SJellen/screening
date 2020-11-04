import { useContext } from 'react'
import {Context} from '../Context'

function useAiringToday() {
    const {posterPath, airingToday}  = useContext(Context)

    const airingTodayTile = airingToday.map(show => 
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster"/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {airingTodayTile}
}



export default useAiringToday