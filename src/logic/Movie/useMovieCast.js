import {useContext} from 'react'
import {Context} from '../../Context'


function useMovieCast() {

    const {movieCredits, personTileMaker}  = useContext(Context)
    const {cast} = movieCredits

    const castMovieTile = cast && personTileMaker(cast)
    
    return {castMovieTile}
}

export default useMovieCast