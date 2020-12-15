import { useContext } from 'react'
import {Context} from '../../Context'



function useMenuPopularMoviePage() {
    const {menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6,movieTileMaker }  = useContext(Context)

  
    const menuPopularPageTile1 = movieTileMaker(menuPopularMoviesPage1)
    const menuPopularPageTile2 = movieTileMaker(menuPopularMoviesPage2) 
    const menuPopularPageTile3 = movieTileMaker(menuPopularMoviesPage3)   
    const menuPopularPageTile4 = movieTileMaker(menuPopularMoviesPage4)
    const menuPopularPageTile5 = movieTileMaker(menuPopularMoviesPage5)  
    const menuPopularPageTile6 = movieTileMaker(menuPopularMoviesPage6)

        return {menuPopularPageTile1, menuPopularPageTile2, menuPopularPageTile3, menuPopularPageTile4, menuPopularPageTile5, menuPopularPageTile6}
}



export default useMenuPopularMoviePage