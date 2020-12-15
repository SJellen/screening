import { useContext } from 'react'
import {Context} from '../../Context'


function useWatchListMovie() {
    const {watchListMovie, movieTileMaker}  = useContext(Context)

    const watchListMovieTile = movieTileMaker(watchListMovie)

        return {watchListMovieTile}
}



export default useWatchListMovie