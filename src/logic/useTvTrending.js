import { useContext } from 'react'
import {Context} from '../Context'

function useTvTrending() {
    const {tvTrending, posterPath, setItemBoxOpen, setTvId, fetchTvDetails, setMediaType}  = useContext(Context)

    function handleTvTrendingClick(e) {
        let selection = tvTrending[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setItemBoxOpen(prevState => !prevState)
    }
 
    const tvTrendingTile = tvTrending.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster" onClick={() => handleTvTrendingClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {tvTrendingTile}
}


export default useTvTrending