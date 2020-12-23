import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'


function TvRecommendations() {
    const {posterPath, handleTvClick, tvRecommendationArr, ratingTruncate}  = useContext(Context)

    const tvRecommendTile = tvRecommendationArr && tvRecommendationArr.map((show, index) => 
        <div className="slider-card" key={show.id}> 
            <Link to={`/tvPage/${show.id}`}>
                <img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, tvRecommendationArr)} className="slider-card-image" />
            </Link>
                {ratingTruncate(show)}
                <span className="slider-title" >{show.name}</span>
        </div>
    )
    return {tvRecommendTile}
}

export default TvRecommendations