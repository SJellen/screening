import React, {useContext} from 'react'
import {Context} from '../../Context'
import PersonCrew from './PersonCrew'
import PersonCast from './PersonCast';


function PersonFilmographyNav() {

    const {sortedCastMovieArr, sortedCastTvArr} = PersonCast()
    const {otherJobArr, productionArr, writingArr, directorArr} = PersonCrew()
    
 

    const personFilmographyTile = (
        <div className="filmography-nav-container">
        <div className="filmography-nav">
            <span className="filmography-nav-jump" >Jump to:</span>

            {sortedCastMovieArr && sortedCastMovieArr.length > 0 && sortedCastTvArr && sortedCastTvArr.length > 0 ?  <a className="filmography-nav-type" href="#actor">Actor</a> : ''}

            { directorArr && directorArr.length > 0 ? <a className="filmography-nav-type" href="#director">Director</a> : ''}

           { writingArr && writingArr.length > 0 ? <a className="filmography-nav-type" href="#writer">Writer</a> : ''}

           { productionArr && productionArr.length > 0 ? <a className="filmography-nav-type" href="#producer">Producer</a> : ''}

           { otherJobArr && otherJobArr.length > 0 ? <a className="filmography-nav-type" href="#misc">Misc</a> : ''}
        </div>
       
        </div>
    )

        
    


    return {personFilmographyTile}
}

export default PersonFilmographyNav