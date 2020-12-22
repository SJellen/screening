import React, {useContext} from 'react'
import PersonCrew from './PersonCrew'
import PersonCast from './PersonCast';
import {Context} from '../../Context'


function PersonFilmographyNav() {

    const {sortedCastMovieArr, sortedCastTvArr} = PersonCast()
    const {otherJobArr, productionArr, writingArr, directorArr} = PersonCrew()
    const {personDetails} = useContext(Context)
 
    const personFilmographyTile = (
        <div className="filmography-nav-container">
            <div className="filmography-nav">
                <span className="filmography-nav-jump" >Jump to:</span>
                    { sortedCastMovieArr && sortedCastMovieArr.length > 0 && sortedCastTvArr && sortedCastTvArr.length > 0 ?  <a className="filmography-nav-type" href="#actor">{personDetails.gender === 2 ? "Actor" : "Actress"}</a> : ''}
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