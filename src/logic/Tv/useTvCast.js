import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useTvCast() {
    const {tvCredits,  posterPath,  handlePersonClick}  = useContext(Context)
    const {cast} = tvCredits
  
    const castTvTile = cast && cast.map((person, index) => 
        <div className="slider-card" key={person.credit_id}> 
            <Link to={`/personPage/${person.id}`}>
                <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, cast, prevState => prevState)} className="slider-card-image" /> 
            </Link>
            <span className="slider-name">{person.name}</span>
            <span className="slider-character">{person.character}</span>
       </div> 
        )

    return {castTvTile}
}

export default useTvCast