import {useContext} from 'react'
import {Context} from '../../Context'




function MovieRecommendations() {

    const {movieRecommendationArr, movieTileMaker}  = useContext(Context)

    const movieRecommendTile = movieRecommendationArr && movieTileMaker(movieRecommendationArr)

    return {movieRecommendTile}


    
}

export default MovieRecommendations