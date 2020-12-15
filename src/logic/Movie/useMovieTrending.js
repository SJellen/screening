import { useContext } from 'react'
import {Context} from '../../Context'



function useMovieTrending() {
    const {movieTrending, movieTileMaker}  = useContext(Context)

    const movieTrendingTile = movieTileMaker(movieTrending)

        return {movieTrendingTile}
}



export default useMovieTrending