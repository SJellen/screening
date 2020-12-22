import {useContext} from 'react'
import {Context} from '../../Context'

function usePersonCrew() {
    const {personCredits, getYear}  = useContext(Context)
    const {crew} = personCredits
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

    const tvDirector = directorArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieDirector = directorArr.filter((x) => {
        return x.media_type === "movie"
    })

    const tvWriting = writingArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieWriting = writingArr.filter((x) => {
        return x.media_type === "movie"
    })

    const tvProduction = productionArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieProduction = productionArr.filter((x) => {
        return x.media_type === "movie"
    })

    const tvMisc = otherJobArr.filter((x) => {
        return x.media_type === "tv"
    })

    const movieMisc = otherJobArr.filter((x) => {
        return x.media_type === "movie"
    })


    const sortedMovieDirectorArr = movieDirector && movieDirector.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvDirectorArr = tvDirector && tvDirector.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedMovieWritingArr = movieWriting && movieWriting.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvWritingArr = tvWriting && tvWriting.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedMovieProductionArr = movieProduction && movieProduction.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvProductionArr = tvProduction && tvProduction.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedMovieMiscArr = movieMisc && movieMisc.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    const sortedTvMiscArr = tvMisc && tvMisc.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    return {sortedMovieDirectorArr,  getYear, sortedTvDirectorArr, sortedMovieWritingArr, sortedTvWritingArr, sortedMovieProductionArr, sortedTvProductionArr, sortedMovieMiscArr, sortedTvMiscArr, directorArr, writingArr, productionArr, otherJobArr}
}

export default usePersonCrew