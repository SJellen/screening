import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useTVCrew() {
    const {tvCredits,  posterPath, handlePersonClick}  = useContext(Context)
    const {crew} = tvCredits
    let directorArr = [], writingArr = [], productionArr = [], otherJobArr = []

    if (crew !== undefined) {
        for (let i = 0; i < crew.length; i++) {
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

    const crewTvTile = crewSortedArr && crewSortedArr.map((person, index) => 
        <div className="slider-card" key={person.credit_id}> 
            <Link to={`/personPage/${person.id}`}>
                <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, crewSortedArr, prevState => prevState)}/> 
            </Link>
            <span className="slider-name">{person.name}</span>
            <span className="slider-character">{person.job}</span>
       </div> 
        )

    return {crewTvTile}
}

export default useTVCrew