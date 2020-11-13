import React, {useContext} from 'react'
import {Context} from '../Context'
import PersonCrew from './PersonCrew'
import PersonCast from './PersonCast';
import '../style/Person.css'

function PersonCredits() {

    
    // const {partMovieTile, partTvTile, personCast}  = usePersonCast()
    const {partMovieTile, partTvTile, personCastCount, sortedCastMovieArr, sortedCastTvArr} = PersonCast()
    const {personDirectorCrew, personWritingCrew, personProductionCrew, personOtherCrew, directorMovieTile, directorTvTile, writingMovieTile, writingTvTile, productionMovieTile, productionTvTile, miscMovieTile, miscTvTile, sortedTvMiscArr, otherJobArr, productionArr, writingArr, directorArr, sortedMovieMiscArr, sortedTvProductionArr, sortedMovieProductionArr, sortedTvWritingArr, sortedMovieWritingArr, sortedTvDirectorArr, sortedMovieDirectorArr} = PersonCrew()
    

    
    const personCredit = (
          <div className="person-filmography-container">

          <div className="person-filmography-header" id="filmography-title">
               <span className="person-filmography">Filmography</span>
                </div>


           <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personCastCount}
           </div>

           {
            sortedCastMovieArr && sortedCastMovieArr.length > 0 ?
            <div> 
          <span className="person-filmography-section-title">Movies</span>
          {partMovieTile}
          </div> : ''
           }

           {
            sortedCastTvArr && sortedCastTvArr.length > 0 ? 
            <div>
          <span className="person-filmography-section-title">Tv</span>
          {partTvTile}
          </div> : ''
           }
          

          



          { directorArr && directorArr.length > 0 ? 
            <div>

            <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personDirectorCrew}
           </div>

           {
            sortedMovieDirectorArr && sortedMovieDirectorArr.length > 0 ?
             <div>
          <span className="person-filmography-section-title">Movie</span>
          {directorMovieTile}
          </div> : ''
           }

          

          {
            sortedTvDirectorArr && sortedTvDirectorArr.length > 0 ?
             <div>
          <span className="person-filmography-section-title">Tv</span>
          {directorTvTile}
          </div>  : ''
          }  
         


            </div> : ''

          }


          { writingArr && writingArr.length > 0 ?
            <div>

            <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personWritingCrew}
           </div>

           {
            sortedMovieWritingArr && sortedMovieWritingArr.length > 0 ?
            <div>
          <span className="person-filmography-section-title">Movie</span>
          {writingMovieTile}
          </div> : ''
           }

          {
            sortedTvWritingArr && sortedTvWritingArr.length > 0 ?
            <div>
          <span className="person-filmography-section-title">Tv</span>
          {writingTvTile}
          </div> : ''
          }

            </div> : ''
            }


           
            { productionArr && productionArr.length > 0 ?
                <div>

                <div className="person-filmography-header">
                    <span className="person-filmography"></span>
                    {personProductionCrew}
                </div>

                {
                    sortedMovieProductionArr && sortedMovieProductionArr.length > 0 ?
                    <div>
                <span className="person-filmography-section-title">Movie</span>
                {productionMovieTile}
                </div> : ''
                }

                {
                    sortedTvProductionArr && sortedTvProductionArr.length > 0 ?
                        <div>
                <span className="person-filmography-section-title">Tv</span>
                {productionTvTile}
                </div> : ''

                }
                </div> : ''
            }

          
                { otherJobArr && otherJobArr.length > 0 ?
                    <div> 
                     <div className="person-filmography-header">
               <span className="person-filmography"></span>
               {personOtherCrew}
           </div>

           {
            sortedMovieMiscArr && sortedMovieMiscArr.length > 0 ?
            <div>
          <span className="person-filmography-section-title">Movie</span>
          {miscMovieTile}
          </div> : ''
           }
           
           

          { 
            sortedTvMiscArr && sortedTvMiscArr.length > 0 ? 
          <div>
          <span className="person-filmography-section-title">Tv</span>
          {miscTvTile}
          </div> : ''

          }
            
           
                    </div> : ''
                }
          

                



           
   
        </div>)
       
    
       
    
    return {personCredit}
}

export default PersonCredits