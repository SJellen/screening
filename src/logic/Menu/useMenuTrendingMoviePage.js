import { useContext } from 'react'
import {Context} from '../../Context'

function useMenuTrendingMoviePage() {
    const {menuTrendingMoviesPage1, menuTrendingMoviesPage2, menuTrendingMoviesPage3, menuTrendingMoviesPage4, menuTrendingMoviesPage5, menuTrendingMoviesPage6,  movieTileMaker }  = useContext(Context)

    const menuTrendingMoviesTile1 = movieTileMaker(menuTrendingMoviesPage1)
    const menuTrendingMoviesTile2 = movieTileMaker(menuTrendingMoviesPage2)    
    const menuTrendingMoviesTile3 = movieTileMaker(menuTrendingMoviesPage3)   
    const menuTrendingMoviesTile4 = movieTileMaker(menuTrendingMoviesPage4)
    const menuTrendingMoviesTile5 = movieTileMaker(menuTrendingMoviesPage5)   
    const menuTrendingMoviesTile6 = movieTileMaker(menuTrendingMoviesPage6)

        return {menuTrendingMoviesTile1, menuTrendingMoviesTile2, menuTrendingMoviesTile3, menuTrendingMoviesTile4, menuTrendingMoviesTile5, menuTrendingMoviesTile6}
}

export default useMenuTrendingMoviePage