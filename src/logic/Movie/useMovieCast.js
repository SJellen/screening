import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMovieCast() {

    const {movieCredits, setMediaType, setPersonId, fetchPersonCredits, fetchPersonDetails, posterPath, fetchPersonImages}  = useContext(Context)

    const {cast} = movieCredits

    


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


    const castMovieTile = cast && cast.map((person, index) => 

         
        <div className="slider-card" key={person.credit_id}> 
        <Link to={`/itemPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonCreditClick(index)}/></Link>
        <span className="slider-name">{person.name}</span>
        <span className="slider-character">{person.character}</span>
       </div> 
        )

    
    
    return {castMovieTile}
}

export default useMovieCast