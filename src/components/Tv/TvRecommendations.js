import {useContext} from 'react'
import {Context} from '../../Context'




function TvRecommendations() {
    const {tvRecommendationArr, tvTileMaker}  = useContext(Context)
    const tvRecommendTile = tvRecommendationArr && tvTileMaker(tvRecommendationArr)

    return {tvRecommendTile}


    
}

export default TvRecommendations