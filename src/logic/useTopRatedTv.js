import { useContext } from 'react'
import {Context} from '../Context'

function useTopRatedTv() {
    const {topRatedTv, posterPath, setItemBoxOpen, setTvId, fetchTvDetails, setMediaType}  = useContext(Context)

    function handlePopularTvClick(e) {
        let selection = topRatedTv[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setItemBoxOpen(prevState => !prevState)
    }
 
    const topRatedTvTile = topRatedTv.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster" onClick={() => handlePopularTvClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {topRatedTvTile}
}


export default useTopRatedTv