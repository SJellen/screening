import React, {useContext} from 'react'
import {Context} from '../Context'

function usePersonCrew() {

    const {personDetails, personCredits, getYear, setMediaType, setMovieId, fetchMovieDetails, setTvId, fetchTvDetails, fetchMovieCredits, fetchTvCredits, setMovieCredits, setTvCredits}  = useContext(Context)

    const {crew} = personCredits

    function handleMovieTileClick(e, arr) {
        let selection = arr[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        window.scrollTo(0, 0)
      }
  
      function handleTvTileClick(e, arr) {
          let selection = arr[e].id
          setMediaType('tv')
          setTvId(selection)
          fetchTvDetails(selection)
          setTvCredits([])
          fetchTvCredits(selection)
          window.scrollTo(0, 0)
      }


    

    
    
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

    const tvDirector = directorArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieDirector = directorArr.filter((x) => {
        return x.media_type === "movie"
    })

    const tvWriting = writingArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieWriting = writingArr.filter((x) => {
        return x.media_type === "movie"
    })

    const tvProduction = productionArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieProduction = productionArr.filter((x) => {
        return x.media_type === "movie"
    })

    const tvMisc = otherJobArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieMisc = otherJobArr.filter((x) => {
        return x.media_type === "movie"
    })


    const sortedMovieDirectorArr = movieDirector && movieDirector.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvDirectorArr = tvDirector && tvDirector.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedMovieWritingArr = movieWriting && movieWriting.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvWritingArr = tvWriting && tvWriting.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedMovieProductionArr = movieProduction && movieProduction.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvProductionArr = tvProduction && tvProduction.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedMovieMiscArr = movieMisc && movieMisc.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvMiscArr = tvMisc && tvMisc.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

   
    const directorMovieTile = sortedMovieDirectorArr && sortedMovieDirectorArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleMovieTileClick(index, sortedMovieDirectorArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
    </div>
    <span className="person-part-year">{sortedMovieDirectorArr[index].release_date === '' ? '' : parseInt(getYear(sortedMovieDirectorArr[index].release_date))}</span>
    </div>)



    const directorTvTile = sortedTvDirectorArr && sortedTvDirectorArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleTvTileClick(index, sortedTvDirectorArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character">{item.character && item.character}</span>
    </div>
    <span className="person-part-year">{sortedTvDirectorArr[index].first_air_date === '' ? '' : parseInt(getYear(sortedTvDirectorArr[index].first_air_date))}</span>
    </div>)

    const writingMovieTile = sortedMovieWritingArr && sortedMovieWritingArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleMovieTileClick(index, sortedMovieWritingArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
    </div>
    <span className="person-part-year">{sortedMovieWritingArr[index].release_date === '' ? '' : parseInt(getYear(sortedMovieWritingArr[index].release_date))}</span>
    </div>)



    const writingTvTile = sortedTvWritingArr && sortedTvWritingArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleTvTileClick(index, sortedTvWritingArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character">{item.character && item.character}</span>
    </div>
    <span className="person-part-year">{sortedTvWritingArr[index].first_air_date === '' ? '' : parseInt(getYear(sortedTvWritingArr[index].first_air_date))}</span>
    </div>)
       
    const productionMovieTile = sortedMovieProductionArr && sortedMovieProductionArr.map((item, index) => 

       <div className="person-part-tile" key={(index)} onClick={() => handleMovieTileClick(index, sortedMovieProductionArr)}>
       <div className="person-part-tile-left">
           <span className="person-part-title">{item.title}</span>
       </div>
       <span className="person-part-year">{sortedMovieProductionArr[index].release_date === '' ? '' : parseInt(getYear(sortedMovieProductionArr[index].release_date))}</span>
       </div>)
   
   
   
    const productionTvTile = sortedTvProductionArr && sortedTvProductionArr.map((item, index) => 
   
       <div className="person-part-tile" key={(index)} onClick={() => handleTvTileClick(index, sortedTvProductionArr)}>
       <div className="person-part-tile-left">
           <span className="person-part-title">{item.name}</span>
           <span className="person-part-character">{item.character && item.character}</span>
       </div>
       <span className="person-part-year">{sortedTvProductionArr[index].first_air_date === '' ? '' : parseInt(getYear(sortedTvProductionArr[index].first_air_date))}</span>
       </div>)

    const miscMovieTile = sortedMovieMiscArr && sortedMovieMiscArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleMovieTileClick(index, sortedMovieMiscArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
    </div>
    <span className="person-part-year">{sortedMovieMiscArr[index].release_date === '' ? '' : parseInt(getYear(sortedMovieMiscArr[index].release_date))}</span>
    </div>)



    const miscTvTile = sortedTvMiscArr && sortedTvMiscArr.map((item, index) => 

    <div className="person-part-tile" key={(index)} onClick={() => handleTvTileClick(index, sortedTvMiscArr)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character">{item.character && item.character}</span>
    </div>
    <span className="person-part-year">{sortedTvMiscArr[index].first_air_date === '' ? '' : parseInt(getYear(sortedTvMiscArr[index].first_air_date))}</span>
    </div>)   

        
    

   


    

   

   


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



    

  

    
    
    return {personDirectorCrew, personWritingCrew, personProductionCrew, personOtherCrew, directorMovieTile, directorTvTile, writingMovieTile, writingTvTile, productionMovieTile, productionTvTile, miscMovieTile, miscTvTile}
}

export default usePersonCrew