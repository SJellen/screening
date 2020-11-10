import React, {useContext} from 'react'
import {Context} from '../Context'
import usePersonCast from './usePersonCast';
import '../style/Person.css'

function usePersonCredits() {

    const {personDetails, posterPathLarge, dateSplitter, personCredits, getYear}  = useContext(Context)
    const {}  = usePersonCast()
    const {crew, cast} = personCredits


    // const partTile = cast.map((item, index) => 
    //     <div key={item.id}>
    //     <span>{item.media_type === "movie" ? item.title : item.name}</span>

    //     </div>
    // )

    const partTile = cast && cast.map((item, index) => 
    <div className="person-part-tile" key={(index)}>
    <div className="person-part-tile-left">
        <span className="person-part-title">{item.media_type === "movie" ? item.title : item.name}</span>
        <span>{item.character && item.character}</span>
    </div>
    
    <span className="person-part-year">{item.media_type === "tv" ? parseInt(getYear(cast[index].first_air_date)) : item.media_type === "movie" ? parseInt(getYear(cast[index].release_date)) :  ''}</span>
    </div>
)
    
    
    
    const personCast = (
        <div >
          <span className="person-gender-credit">{personDetails.gender === 2 ? "Actor" : "Actress"} ({cast && cast.length} credits)</span>
         
          
      </div>
  )
    
    
    const personCredit = (
          <div className="person-filmography-container">
           <div className="person-filmography-header">
               <span className="person-filmography">Filmography</span>
               {personCast}
           </div>


           {partTile}
            

            

            
        </div>
    )
       
    
       
    
    return {personCredit}
}

export default usePersonCredits