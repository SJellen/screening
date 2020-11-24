import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function TvRecommendations() {


    const {posterPath, handleTvClick, tvRecommendationArr, handleRibbon, ribbonToggle}  = useContext(Context)
 

    const tvRecommendTile = tvRecommendationArr.map((show, index) => 
        
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { ribbonToggle === show.id ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbon(index, tvRecommendationArr)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbon(index, tvRecommendationArr)} style={{color: ""}}></i>
       }
        </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, tvRecommendationArr, prevState => prevState)}/></Link>
    <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
    <span className="slider-title" >{show.name}</span>
    </div>
    )

    return {tvRecommendTile}


    
}

export default TvRecommendations