import React, {useContext} from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useTvCast() {

    const {tvCredits, setMediaType, setPersonId, fetchPersonCredits, fetchPersonDetails, posterPath, setItemPageOpen, personImages, fetchPersonImages}  = useContext(Context)

    const {crew, cast} = tvCredits

  
    function handlePersonCreditClick(e) {
        let selection = cast[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        // setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }


    const castTvTile = cast && cast.map((person, index) => 

         
        <div className="slider-card" key={person.id}> 
        <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonCreditClick(index)}/>
        <span className="slider-name">{person.name}</span>
        <span className="slider-character">{person.character}</span>
       </div> 
        )

    
    
    return {castTvTile}
}

export default useTvCast