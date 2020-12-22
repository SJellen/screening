import {useContext} from 'react'
import {Context} from '../../Context'

function usePersonCast() {
    const {getYear, personMovieCast, personTvCast}  = useContext(Context)

    const sortedCastTvArr = personTvCast && personTvCast.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedCastMovieArr = personMovieCast && personMovieCast.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    return {sortedCastTvArr, sortedCastMovieArr}
}

export default usePersonCast