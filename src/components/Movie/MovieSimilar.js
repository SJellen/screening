import {useContext} from 'react'
import {Context} from '../../Context'




function MovieSimilar() {

    const {movieSimilarArr,movieTileMaker}  = useContext(Context)

    const movieSimilarTile = movieTileMaker(movieSimilarArr)
    return {movieSimilarTile}


    
}

export default MovieSimilar