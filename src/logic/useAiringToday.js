import { useContext } from 'react'
import {Context} from '../Context'

function useAiringToday() {
    const {posterPath, airingToday, setItemBoxOpen, setMovieId, setTvId, setPersonId}  = useContext(Context)

    function handleAiringTodayClick(e) {
        let selection = airingToday[e].id
        let mediaType = "tv"
        console.log(selection, mediaType)
        setItemBoxOpen(prevState => !prevState)
    }

    const airingTodayTile = airingToday.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster" onClick={() => handleAiringTodayClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {airingTodayTile}
}



export default useAiringToday