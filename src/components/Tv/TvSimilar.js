import {useContext} from 'react'
import {Context} from '../../Context'




function TvSimilar() {
    const {tvSimilarArr,tvTileMaker}  = useContext(Context)
    const tvSimilarTile = tvSimilarArr && tvTileMaker(tvSimilarArr)

    return {tvSimilarTile}


    
}

export default TvSimilar