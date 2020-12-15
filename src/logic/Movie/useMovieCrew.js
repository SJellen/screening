import {useContext} from 'react'
import {Context} from '../../Context'


function useMovieCrew() {

    const {movieCredits,personTileMaker}  = useContext(Context)
    const {crew} = movieCredits

    let directorArr = [], writingArr = [], productionArr = [], otherJobArr = []  

    function crewSorter() {
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
    }
    
    crewSorter()
    let crewSortedArr = [...directorArr, ...writingArr, ...productionArr, ...otherJobArr]


    const crewMovieTile = crewSortedArr && personTileMaker(crewSortedArr)
    
    return {crewMovieTile}
}

export default useMovieCrew