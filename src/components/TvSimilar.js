import React, {useContext} from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'



function TvSimilar() {

    const {posterPath, setTvId, fetchTvDetails, setMediaType, fetchTvCredits, setTvCredits, fetchTvRecommend, tvSimilarArr, fetchTvSimilar, fetchTvVideos}  = useContext(Context)

    function handleTvSimilarClick(e) {
        let selection = tvSimilarArr[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setTvCredits([])
        fetchTvCredits(selection)
        fetchTvRecommend(selection)
        fetchTvSimilar(selection)
        fetchTvVideos(selection)
        window.scrollTo(0, 0)
        // setItemPageOpen(true)
    
    }
 

    const tvSimilarTile = tvSimilarArr.map((show, index) => 
        
    <div className="slider-card" key={show.id}> 
    <img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvSimilarClick(index)}/>
    <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
    <span className="slider-title" >{show.name}</span>
    </div>
    )

    return {tvSimilarTile}


    
}

export default TvSimilar