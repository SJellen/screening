import React, {useContext} from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useMovieCrew() {

    const {movieCredits, setMediaType, setPersonId, fetchPersonCredits, fetchPersonDetails, posterPath}  = useContext(Context)
    const {crew} = movieCredits

    // console.log(crew && crew.length)


    let directorArr = [], writingArr = [], productionArr = [], otherJobArr = []

    

    
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

    let crewSortedArr = [...directorArr, ...writingArr, ...productionArr, ...otherJobArr]


    
    


    function handleCrewCreditClick(e) {
        let selection = crewSortedArr[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        // setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }


    const crewMovieTile = crewSortedArr && crewSortedArr.map((person, index) => 

         
        <div className="slider-card" key={person.id}> 
        <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handleCrewCreditClick(index)}/>
        <span className="slider-name">{person.name}</span>
        <span className="slider-character">{person.job}</span>
       </div> 
        )

    
    
    return {crewMovieTile}
}

export default useMovieCrew