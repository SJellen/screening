import React, {useContext} from 'react'
import {Context} from '../Context'

function usePersonCrew() {

    const {personDetails, personCredits, getYear, setMediaType, setMovieId, fetchMovieDetails, setTvId, fetchTvDetails, fetchMovieCredits, fetchTvCredits, setMovieCredits, setTvCredits}  = useContext(Context)

    const {crew, cast} = personCredits

    // function handleMovieTileClick(e) {
    //     let selection = sortedCastMovieArr[e].id
    //     setMediaType('movie')
    //     setMovieId(selection)
    //     fetchMovieDetails(selection)
    //     setMovieCredits([])
    //     fetchMovieCredits(selection)
    //     window.scrollTo(0, 0)
    //   }
  
    //   function handleTvTileClick(e) {
    //       let selection = sortedCastTvArr[e].id
    //       setMediaType('tv')
    //       setTvId(selection)
    //       fetchTvDetails(selection)
    //       setTvCredits([])
    //       fetchTvCredits(selection)
    //       window.scrollTo(0, 0)
    //   }


    

    
    
    let directorArr = [], writingArr = [], productionArr = [], otherJobArr = []  

    function crewSorter() {
      if (crew !== undefined) {
        for (let i = 0; i < crew.length; i++) {
            // console.log(crew[i].department)
            if (crew[i].department === "Directing") {
                directorArr.push(crew[i])
                
            } else if (crew[i].department === "Writing") {
                writingArr.push(crew[i])
            } else if (crew[i].department === "Production") {
                productionArr.push(crew[i])
            } else {
                otherJobArr.push(crew[i])
            }
    }
    }  
    }
    
    crewSorter()


    let sortedMovieDirectorArr = directorArr && directorArr.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    let sortedTvDirectorArr = directorArr && directorArr.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    console.log(sortedMovieDirectorArr)

    // const directorMovieTile = sortedMovieDirectorArr && sortedMovieDirectorArr.map((item, index) => 

    // <div className="person-part-tile" key={(item.id)} onClick={() => handleMovieTileClick(index)}>
    // <div className="person-part-tile-left">
    //     <span className="person-part-title">{item.title}</span>
    //     <span className="person-part-character" >{item.character && item.character}</span>
    // </div>
    
    // <span className="person-part-year">{sortedMovieDirectorArr[index].release_date === '' ? '' : parseInt(getYear(sortedMovieDirectorArr[index].release_date))}</span>
    // </div>)

    // const directorTvTile = sortedTvDirectorArr && sortedTvDirectorArr.map((item, index) => 

    // <div className="person-part-tile" key={(index)} onClick={() => handleTvTileClick(index)}>
    // <div className="person-part-tile-left">
    //     <span className="person-part-title">{item.name}</span>
    //     <span className="person-part-character">{item.character && item.character}</span>
    // </div>
    // <span className="person-part-year">{sortedTvDirectorArr[index].first_air_date === '' ? '' : parseInt(getYear(sortedTvDirectorArr[index].first_air_date))}</span>
    // </div>)


    const personDirectorCrew =   (<div >
    <span className="person-gender-credit">Director ({directorArr && directorArr.length} credits)</span>
   </div>)  
   
   const personWritingCrew =   (<div >
    <span className="person-gender-credit">Writer ({writingArr && writingArr.length} credits)</span>
   </div>)

    const personProductionCrew =   (<div >
    <span className="person-gender-credit">Producer ({productionArr && productionArr.length} credits)</span>
   </div>)

    const personOtherCrew =   (<div >
    <span className="person-gender-credit">Misc. ({otherJobArr && otherJobArr.length} credits)</span>
   </div>)



    

  

    
    
    return {personDirectorCrew, personWritingCrew, personProductionCrew, personOtherCrew}
}

export default usePersonCrew