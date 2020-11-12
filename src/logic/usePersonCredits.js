import React, {useContext} from 'react'
import {Context} from '../Context'
import usePersonCast from './usePersonCast';
import usePersonCrew from './usePersonCrew';
import '../style/Person.css'

function usePersonCredits() {

    
    const {partMovieTile, partTvTile, personCast}  = usePersonCast()
    const {personDirectorCrew, personWritingCrew, personProductionCrew, personOtherCrew} = usePersonCrew()
    

    
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

          <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personDirectorCrew}
           </div>

           {/* <div>
          <span className="person-filmography-section-title">Movie</span>
          {directorMovieTile}
          </div>

          <div>
          <span className="person-filmography-section-title">Tv</span>
          {directorTvTile}
          </div> */}

          <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personWritingCrew}
           </div>


           <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personProductionCrew}
           </div>

           <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personOtherCrew}
           </div>

           
   
        </div>)
       
    
       
    
    return {personCredit}
}

export default usePersonCredits