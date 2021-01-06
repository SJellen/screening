import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'


function TvSimilar() {
    const {posterPath, handleTvClick, tvSimilarArr, ratingTruncate, truncateTitle}  = useContext(Context)

    const tvSimilarTile = tvSimilarArr && tvSimilarArr.map((show, index) =>  
        <div className="slider-card" key={show.id}> 
            <Link to={`/tvPage/${show.id}`}>
                <img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, tvSimilarArr)} className="slider-card-image"/>
            </Link>
                {ratingTruncate(show)}
                <span className="slider-title" >{truncateTitle(show.name)}</span>
        </div>
    )
    return {tvSimilarTile} 
}

export default TvSimilar