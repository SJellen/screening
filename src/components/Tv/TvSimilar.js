import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'



function TvSimilar() {

    const {posterPath, handleTvClick, tvSimilarArr}  = useContext(Context)


    const tvSimilarTile = tvSimilarArr.map((show, index) => 
        
    <div className="slider-card" key={show.id}> 
    <Link to={`/itemPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, tvSimilarArr, prevState => prevState)}/></Link>
    <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
    <span className="slider-title" >{show.name}</span>
    </div>
    )

    return {tvSimilarTile}


    
}

export default TvSimilar