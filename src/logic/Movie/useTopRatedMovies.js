import { useContext } from 'react'
import {Context} from '../../Context'

function useTopRatedMovies() {
    const {topRatedMovies, movieTileMaker}  = useContext(Context)

    const topRatedMoviesTile = movieTileMaker(topRatedMovies)

        return {topRatedMoviesTile}
}


export default useTopRatedMovies