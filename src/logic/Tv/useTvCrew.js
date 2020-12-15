import {useContext} from 'react'
import {Context} from '../../Context'


function useTVCrew() {

    const {tvCredits, personTileMaker}  = useContext(Context)
    const {crew} = tvCredits

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


    const crewTvTile = crewSortedArr && personTileMaker(crewSortedArr)
    
    return {crewTvTile}
}

export default useTVCrew