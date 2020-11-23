import React, {useContext} from 'react'
import {Context} from '../../Context'
import usePersonCrew from '../../logic/Person/usePersonCrew'
import {Link} from 'react-router-dom'


function PersonCrew() {

    const {sortedMovieDirectorArr,  getYear, sortedTvDirectorArr, sortedMovieWritingArr, sortedTvWritingArr, sortedMovieProductionArr, sortedTvProductionArr, sortedMovieMiscArr, sortedTvMiscArr, directorArr, writingArr, productionArr, otherJobArr} = usePersonCrew()

    const {handleMovieClick, handleTvClick} = useContext(Context)



    const directorMovieTile = sortedMovieDirectorArr && sortedMovieDirectorArr.map((item, index) => 
    <Link to={`/moviePage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}> 
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleMovieClick(index, sortedMovieDirectorArr, prevState => prevState)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
        <span className="person-part-character" >{item.job && item.job}</span>
    </div>
    <span className="person-part-year">{sortedMovieDirectorArr[index].release_date === '' || sortedMovieDirectorArr[index].release_date === null || sortedMovieDirectorArr[index].release_date === undefined ? '' : parseInt(getYear(sortedMovieDirectorArr[index].release_date))}</span>
    </div>
    </Link>
    
    )



    const directorTvTile = sortedTvDirectorArr && sortedTvDirectorArr.map((item, index) => 
    <Link to={`/tvPage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleTvClick(index, sortedTvDirectorArr, prevState => prevState)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character" >{item.job && item.job}</span>
    </div>
    <span className="person-part-year">{sortedTvDirectorArr[index].first_air_date === '' || sortedTvDirectorArr[index].first_air_date === null || sortedTvDirectorArr[index].first_air_date === undefined ? '' : parseInt(getYear(sortedTvDirectorArr[index].first_air_date))}</span>
    </div>
    </Link>
    
    )

    const writingMovieTile = sortedMovieWritingArr && sortedMovieWritingArr.map((item, index) => 
    <Link to={`/moviePage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleMovieClick(index, sortedMovieWritingArr, prevState => prevState)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
        <span className="person-part-character" >{item.job && item.job}</span>
    </div>
    <span className="person-part-year">{sortedMovieWritingArr[index].release_date === '' || sortedMovieWritingArr[index].release_date === null || sortedMovieWritingArr[index].release_date === undefined ? '' : parseInt(getYear(sortedMovieWritingArr[index].release_date))}</span>
    </div>
    </Link>
    
    )



    const writingTvTile = sortedTvWritingArr && sortedTvWritingArr.map((item, index) => 
    <Link to={`/tvPage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleTvClick(index, sortedTvWritingArr, prevState => prevState)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character" >{item.job && item.job}</span>
    </div>
    <span className="person-part-year">{sortedTvWritingArr[index].first_air_date === '' || sortedTvWritingArr[index].first_air_date === null || sortedTvWritingArr[index].first_air_date === undefined ? '' : parseInt(getYear(sortedTvWritingArr[index].first_air_date))}</span>
    </div>
    </Link>
    
    )
       
    const productionMovieTile = sortedMovieProductionArr && sortedMovieProductionArr.map((item, index) => 
    <Link to={`/moviePage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}>
        <div className="person-part-tile" key={item.credit_id} onClick={() => handleMovieClick(index, sortedMovieProductionArr, prevState => prevState)}>
       <div className="person-part-tile-left">
           <span className="person-part-title">{item.title}</span>
           <span className="person-part-character" >{item.job && item.job}</span>
       </div>
       <span className="person-part-year">{sortedMovieProductionArr[index].release_date === '' || sortedMovieProductionArr[index].release_date === null || sortedMovieProductionArr[index].release_date === undefined ? '' : parseInt(getYear(sortedMovieProductionArr[index].release_date))}</span>
       </div>
    </Link>
       
       )
   
   
   
    const productionTvTile = sortedTvProductionArr && sortedTvProductionArr.map((item, index) => 
     <Link to={`/tvPage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}> 
     <div className="person-part-tile" key={item.credit_id} onClick={() => handleTvClick(index, sortedTvProductionArr, prevState => prevState)}>
       <div className="person-part-tile-left">
           <span className="person-part-title">{item.name}</span>
           <span className="person-part-character" >{item.job && item.job}</span>
       </div>
       <span className="person-part-year">{sortedTvProductionArr[index].first_air_date === '' || sortedTvProductionArr[index].first_air_date === null || sortedTvProductionArr[index].first_air_date === undefined ? '' : parseInt(getYear(sortedTvProductionArr[index].first_air_date))}</span>
       </div>
     </Link>
       
       )

    const miscMovieTile = sortedMovieMiscArr && sortedMovieMiscArr.map((item, index) => 
    <Link to={`/moviePage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleMovieClick(index, sortedMovieMiscArr, prevState => prevState)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.title}</span>
        <span className="person-part-character" >{item.job && item.job}</span>
    </div>
    <span className="person-part-year">{sortedMovieMiscArr[index].release_date === '' || sortedMovieMiscArr[index].release_date === null || sortedMovieMiscArr[index].release_date === undefined ? '' : parseInt(getYear(sortedMovieMiscArr[index].release_date))}</span>
    </div>
    </Link>
    
    )



    const miscTvTile = sortedTvMiscArr && sortedTvMiscArr.map((item, index) => 
    <Link to={`/tvPage/${item.credit_id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="person-part-tile" key={item.credit_id} onClick={() => handleTvClick(index, sortedTvMiscArr, prevState => prevState)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.name}</span>
        <span className="person-part-character" >{item.job && item.job}</span>
    </div>
    <span className="person-part-year">{sortedTvMiscArr[index].first_air_date === '' || sortedTvMiscArr[index].first_air_date === null || sortedTvMiscArr[index].first_air_date === undefined ? '' : parseInt(getYear(sortedTvMiscArr[index].first_air_date))}</span>
    </div>
    </Link>
    
    )   



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







    return {personDirectorCrew, personWritingCrew, personProductionCrew, personOtherCrew, directorMovieTile, directorTvTile, writingMovieTile, writingTvTile, productionMovieTile, productionTvTile, miscMovieTile, miscTvTile, otherJobArr, productionArr, directorArr, writingArr, sortedTvMiscArr, sortedMovieMiscArr, sortedTvProductionArr, sortedMovieProductionArr, sortedTvWritingArr, sortedMovieWritingArr, sortedTvDirectorArr, sortedMovieDirectorArr}
}

export default PersonCrew