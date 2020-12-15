import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuMostMoneyPage() {
    const {menuMostMoneyMovies1, menuMostMoneyMovies2, menuMostMoneyMovies3, menuMostMoneyMovies4, menuMostMoneyMovies5, menuMostMoneyMovies6,movieTileMaker}  = useContext(Context)

    const menuMostMoneyMoviesPageTile1 = movieTileMaker(menuMostMoneyMovies1)
    const menuMostMoneyMoviesPageTile2 = movieTileMaker(menuMostMoneyMovies2)  
    const menuMostMoneyMoviesPageTile3 = movieTileMaker(menuMostMoneyMovies3)    
    const menuMostMoneyMoviesPageTile4 = movieTileMaker(menuMostMoneyMovies4)
    const menuMostMoneyMoviesPageTile5 = movieTileMaker(menuMostMoneyMovies5)    
    const menuMostMoneyMoviesPageTile6 = movieTileMaker(menuMostMoneyMovies6)

        return {menuMostMoneyMoviesPageTile1, menuMostMoneyMoviesPageTile2, menuMostMoneyMoviesPageTile3, menuMostMoneyMoviesPageTile4, menuMostMoneyMoviesPageTile5, menuMostMoneyMoviesPageTile6}
}



export default useMenuMostMoneyPage