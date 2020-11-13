import React, {useContext} from 'react'
import {Context} from '../Context'
import usePersonCast from '../logic/usePersonCast'


function PersonCast() {

    const {sortedCastTvArr, sortedCastMovieArr, handleMovieTileClick, handleTvTileClick}  = usePersonCast()

    const {getYear,personDetails, personCredits} = useContext(Context)
    
    const {cast} = personCredits

    const partMovieTile = sortedCastMovieArr && sortedCastMovieArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleMovieTileClick(index)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
        <span className="person-part-character" >{item.character && item.character}</span>
    </div>
    
    <span className="person-part-year">{sortedCastMovieArr[index].release_date === '' ? '' : parseInt(getYear(sortedCastMovieArr[index].release_date))}</span>
    </div>)



    const partTvTile = sortedCastTvArr && sortedCastTvArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleTvTileClick(index)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character">{item.character && item.character}</span>
    </div>
    <span className="person-part-year">{sortedCastTvArr[index].first_air_date === '' ? '' : parseInt(getYear(sortedCastTvArr[index].first_air_date))}</span>
    </div>)

    
        
    
    const personCastCount = (
        <div >
          <span className="person-gender-credit">{personDetails.gender === 2 ? "Actor" : "Actress"} ({cast && cast.length} credits)</span>
         </div>)






    return {partMovieTile, partTvTile, personCastCount, sortedCastMovieArr, sortedCastTvArr}
}

export default PersonCast

