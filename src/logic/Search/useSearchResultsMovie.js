import { useContext } from 'react'
import {Context} from '../../Context'


function useSearchResultsMovie() {
    const {searchResultsMovie, movieTileMaker}  = useContext(Context)

    const searchResultsMovieTile = movieTileMaker(searchResultsMovie)

        return {searchResultsMovieTile}
}



export default useSearchResultsMovie