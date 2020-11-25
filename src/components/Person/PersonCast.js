import React, {useContext} from 'react'
import {Context} from '../../Context'
import usePersonCast from '../../logic/Person/usePersonCast'
import {Link} from 'react-router-dom'


function PersonCast() {

    const {sortedCastTvArr, sortedCastMovieArr}  = usePersonCast()

    const {getYear,personDetails, personCredits, handleMovieClick, handleTvClick} = useContext(Context)
    
    const {cast} = personCredits


   

    const partMovieTile = sortedCastMovieArr && sortedCastMovieArr.map((item, index) => 

    <Link to={`/moviePage/${item.id}`} style={{ textDecoration: 'none', color: "white"}}>
<div className="person-part-tile" key={item.credit_id} onClick={() => handleMovieClick(index, sortedCastMovieArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
        <span className="person-part-character" >{item.character && item.character}</span>
    </div>
    
    <span className="person-part-year">{sortedCastMovieArr[index].release_date === '' || sortedCastMovieArr[index].release_date === null || sortedCastMovieArr[index].release_date === undefined ? '' : parseInt(getYear(sortedCastMovieArr[index].release_date))}</span>
    </div>
    </Link>
    )



    const partTvTile = sortedCastTvArr && sortedCastTvArr.map((item, index) => 
    <Link to={`/tvPage/${item.id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleTvClick(index, sortedCastTvArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character">{item.character && item.character}</span>
    </div>
    <span className="person-part-year">{sortedCastTvArr[index].first_air_date === '' || sortedCastTvArr[index].first_air_date === null || sortedCastTvArr[index].first_air_date === undefined ? '' : parseInt(getYear(sortedCastTvArr[index].first_air_date))}</span>
    </div>
    </Link>
    
    )

    
        
    
    const personCastCount = (
        <div >
          <span className="person-gender-credit">{personDetails.gender === 2 ? "Actor" : "Actress"} ({cast && cast.length} credits)</span>
         </div>)






    return {partMovieTile, partTvTile, personCastCount, sortedCastMovieArr, sortedCastTvArr}
}

export default PersonCast

