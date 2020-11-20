import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function TvRecommendations() {

    const {posterPath, setTvId, fetchTvDetails, setMediaType, fetchTvCredits, setTvCredits, fetchTvRecommend, tvRecommendationArr, fetchTvVideos}  = useContext(Context)

    function handleTvRecommendClick(e) {
        let selection = tvRecommendationArr[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setTvCredits([])
        fetchTvCredits(selection)
        fetchTvRecommend(selection)
        fetchTvVideos(selection)
        window.scrollTo(0, 0)
        // setItemPageOpen(Tv
    
    }
 

    const tvRecommendTile = tvRecommendationArr.map((show, index) => 
        
    <div className="slider-card" key={show.id}> 
    <Link to={`/itemPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvRecommendClick(index)}/></Link>
    <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
    <span className="slider-title" >{show.name}</span>
    </div>
    )

    return {tvRecommendTile}


    
}

export default TvRecommendations