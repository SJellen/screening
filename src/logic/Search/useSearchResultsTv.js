import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useSearchResultsTv() {
    const {posterPath, setItemPageOpen, setTvId, fetchTvDetails, setMediaType, searchResultsTv, fetchTvCredits, setTvCredits, fetchTvReviews, fetchTvRecommend, fetchTvSimilar, fetchTvVideos}  = useContext(Context)


    function handleSearchTvClick(e) {
        let selection = searchResultsTv[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setTvCredits([])
        fetchTvSimilar(selection)
        fetchTvRecommend(selection)
        fetchTvCredits(selection)
        fetchTvReviews(selection)
        fetchTvVideos(selection)
        setItemPageOpen(true)
        window.scrollTo(0, 0)
    }

    const searchResultsTvTile = searchResultsTv.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <Link to={`/itemPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleSearchTvClick(index)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {searchResultsTvTile}
}



export default useSearchResultsTv