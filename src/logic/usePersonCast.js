import React, {useContext} from 'react'
import {Context} from '../Context'

function usePersonCast() {

    const {personDetails, setMediaType, setMovieId, fetchMovieCredits, fetchMovieDetails, setMovieCredits, setTvId, personCredits, getYear, fetchTvDetails, setTvCredits, fetchTvCredits}  = useContext(Context)

    const {cast} = personCredits

    function handleMovieTileClick(e) {
        let selection = sortedCastMovieArr[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        window.scrollTo(0, 0)
      }
  
      function handleTvTileClick(e) {
          let selection = sortedCastTvArr[e].id
          setMediaType('tv')
          setTvId(selection)
          fetchTvDetails(selection)
          setTvCredits([])
          fetchTvCredits(selection)
          window.scrollTo(0, 0)
      }



    let castTvArr = [], castMovieArr = [], otherArr = []
    if (cast !== undefined) {
       for (let i =0; i < cast.length; i++) {
        if (cast[i].media_type === "movie") {
            castMovieArr.push(cast[i])
        } else if (cast[i].media_type === "tv") {
            castTvArr.push(cast[i])
        } else {
            otherArr.push(cast[i])
        }
    } 
    }

    

    const sortedCastTvArr = castTvArr && castTvArr.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedCastMovieArr = castMovieArr && castMovieArr.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

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

    
        
    
    const personCast = (
        <div >
          <span className="person-gender-credit">{personDetails.gender === 2 ? "Actor" : "Actress"} ({cast && cast.length} credits)</span>
         </div>)



    
    
    return {sortedCastTvArr, sortedCastMovieArr, partMovieTile, partTvTile, personCast}
}

export default usePersonCast