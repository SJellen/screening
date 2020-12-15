import { useContext } from 'react'
import {Context} from '../../Context'

function useUpcomingMovies() {
    const { upcomingMovies,movieTileMaker}  = useContext(Context)

    const upcomingMoviesTile = movieTileMaker(upcomingMovies)

        return {upcomingMoviesTile}
}



export default useUpcomingMovies