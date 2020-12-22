import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuMovieGenre() {
    const {genreMovies1, genreMovies2, genreMovies3, genreMovies4, genreMovies5, genreMovies6, genreMovies7, genreMovies8, genreMovies9, genreMovies10, movieTileMaker }  = useContext(Context)

    const menuMovieGenreTile1 = genreMovies1 && movieTileMaker(genreMovies1)
    const menuMovieGenreTile2 = genreMovies2 && movieTileMaker(genreMovies2)  
    const menuMovieGenreTile3 = genreMovies3 && movieTileMaker(genreMovies3) 
    const menuMovieGenreTile4 = genreMovies4 && movieTileMaker(genreMovies4)
    const menuMovieGenreTile5 = genreMovies5 && movieTileMaker(genreMovies5)  
    const menuMovieGenreTile6 = genreMovies6 && movieTileMaker(genreMovies6)
    const menuMovieGenreTile7 = genreMovies7 && movieTileMaker(genreMovies7)
    const menuMovieGenreTile8 = genreMovies8 && movieTileMaker(genreMovies8)
    const menuMovieGenreTile9 = genreMovies9 && movieTileMaker(genreMovies9)
    const menuMovieGenreTile10 = genreMovies10 && movieTileMaker(genreMovies10)

        return {menuMovieGenreTile1, menuMovieGenreTile2, menuMovieGenreTile3, menuMovieGenreTile4, menuMovieGenreTile5, menuMovieGenreTile6, menuMovieGenreTile7, menuMovieGenreTile8, menuMovieGenreTile9, menuMovieGenreTile10}
}

export default useMenuMovieGenre