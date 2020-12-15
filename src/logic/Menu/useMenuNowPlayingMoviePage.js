import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuNowPlayingMoviePage() {
    const {menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3,menuNowPlayingMoviesPage4,menuNowPlayingMoviesPage5,menuNowPlayingMoviesPage6, movieTileMaker }  = useContext(Context)

    const menuNowPlayingMoviesPageTile1 = movieTileMaker(menuNowPlayingMoviesPage1)
    const menuNowPlayingMoviesPageTile2 = movieTileMaker(menuNowPlayingMoviesPage2)  
    const menuNowPlayingMoviesPageTile3 = movieTileMaker(menuNowPlayingMoviesPage3) 
    const menuNowPlayingMoviesPageTile4 = movieTileMaker(menuNowPlayingMoviesPage4)
    const menuNowPlayingMoviesPageTile5 = movieTileMaker(menuNowPlayingMoviesPage5)  
    const menuNowPlayingMoviesPageTile6 = movieTileMaker(menuNowPlayingMoviesPage6)

        return {menuNowPlayingMoviesPageTile1, menuNowPlayingMoviesPageTile2, menuNowPlayingMoviesPageTile3, menuNowPlayingMoviesPageTile4, menuNowPlayingMoviesPageTile5, menuNowPlayingMoviesPageTile6}
}



export default useMenuNowPlayingMoviePage