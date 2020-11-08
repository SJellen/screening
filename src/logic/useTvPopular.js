import { useContext } from 'react'
import {Context} from '../Context'

function useTvPopular() {
    const {posterPath, popularTv, setItemPageOpen, setTvId, fetchTvDetails, setMediaType}  = useContext(Context)

    function handlePopularTvClick(e) {
        let selection = popularTv[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setItemPageOpen(prevState => !prevState)
    }
    

    const popularTvTile = popularTv.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster" onClick={() => handlePopularTvClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {popularTvTile}
}



export default useTvPopular