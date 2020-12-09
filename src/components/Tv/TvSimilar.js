import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function TvSimilar() {

    const {posterPath, handleTvClick, tvSimilarArr, handleRibbonTv, watchListTv, ratingTruncate}  = useContext(Context)


    const tvSimilarTile = tvSimilarArr && tvSimilarArr.map((show, index) => 
        
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, tvSimilarArr)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, tvSimilarArr)} style={{color: ""}}></i>
       }
        </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, tvSimilarArr)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title" >{show.name}</span>
    </div>
    )

    return {tvSimilarTile}


    
}

export default TvSimilar