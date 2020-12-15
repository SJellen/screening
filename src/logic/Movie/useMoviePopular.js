import { useContext } from 'react'
import {Context} from '../../Context'


function useMoviePopular() {
    const {popularMovies,  movieTileMaker}  = useContext(Context)

    const popularMoviesTile = movieTileMaker(popularMovies)

        return {popularMoviesTile}
}



export default useMoviePopular