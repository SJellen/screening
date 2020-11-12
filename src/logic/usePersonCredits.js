import React, {useContext} from 'react'
import {Context} from '../Context'
import usePersonCast from './usePersonCast';
import '../style/Person.css'

function usePersonCredits() {

    const {personDetails, personCredits, getYear, setMediaType, setMovieId, fetchMovieDetails, setTvId, fetchTvDetails, fetchMovieCredits, fetchTvCredits, setMovieCredits, setTvCredits}  = useContext(Context)
    const {sortedCastTvArr, sortedCastMovieArr}  = usePersonCast()
    const {crew, cast} = personCredits

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
    
    
    
    
    const personCredit = (
          <div className="person-filmography-container">
           <div className="person-filmography-header">
               <span className="person-filmography">Filmography</span>
               {personCast}
           </div>
          <div> 
          <span className="person-filmography-section-title">Movies</span>
          {partMovieTile}
          </div>

          <div>
          <span className="person-filmography-section-title">Tv</span>
          {partTvTile}
          </div>
   
        </div>)
       
    
       
    
    return {personCredit}
}

export default usePersonCredits