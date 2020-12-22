import { useContext } from 'react'
import {Context} from '../../Context'

function useMenuUpcomingMoviePage() {
    const {menuUpcomingMoviesPage1, menuUpcomingMoviesPage2,menuUpcomingMoviesPage3,menuUpcomingMoviesPage4, menuUpcomingMoviesPage5, menuUpcomingMoviesPage6,movieTileMaker }  = useContext(Context)

    const menuUpcomingPageTile1 = movieTileMaker(menuUpcomingMoviesPage1)
    const menuUpcomingPageTile2 = movieTileMaker(menuUpcomingMoviesPage2)
    const menuUpcomingPageTile3 = movieTileMaker(menuUpcomingMoviesPage3)
    const menuUpcomingPageTile4 = movieTileMaker(menuUpcomingMoviesPage4)
    const menuUpcomingPageTile5 = movieTileMaker(menuUpcomingMoviesPage5)
    const menuUpcomingPageTile6 = movieTileMaker(menuUpcomingMoviesPage6)
    
        return {menuUpcomingPageTile1, menuUpcomingPageTile2, menuUpcomingPageTile3, menuUpcomingPageTile4, menuUpcomingPageTile5, menuUpcomingPageTile6}
}

export default useMenuUpcomingMoviePage