import { useContext } from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useTvPopular() {
    const {posterPath, popularTv, setItemPageOpen, setTvId, fetchTvDetails, setMediaType, fetchTvCredits, setTvCredits, fetchTvSimilar, fetchTvRecommend}  = useContext(Context)

    function handlePopularTvClick(e) {
        let selection = popularTv[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setTvCredits([])
        fetchTvCredits(selection)
        fetchTvSimilar(selection)
        fetchTvRecommend(selection)
        setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }
    

    const popularTvTile = popularTv.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handlePopularTvClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {popularTvTile}
}



export default useTvPopular