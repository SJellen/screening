import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuTopRatedMoviePage() {
    const {menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, movieTileMaker}  = useContext(Context)

    const menuTopRatedPageTile1 = movieTileMaker(menuTopRatedMoviesPage1)
    const menuTopRatedPageTile2 = movieTileMaker(menuTopRatedMoviesPage2)    
    const menuTopRatedPageTile3 = movieTileMaker(menuTopRatedMoviesPage3)
    const menuTopRatedPageTile4 = movieTileMaker(menuTopRatedMoviesPage4)
    const menuTopRatedPageTile5 = movieTileMaker(menuTopRatedMoviesPage5)
    const menuTopRatedPageTile6 = movieTileMaker(menuTopRatedMoviesPage6)

        return {menuTopRatedPageTile1, menuTopRatedPageTile2, menuTopRatedPageTile3, menuTopRatedPageTile4, menuTopRatedPageTile5, menuTopRatedPageTile6}
}

export default useMenuTopRatedMoviePage