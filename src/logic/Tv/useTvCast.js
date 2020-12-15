import {useContext} from 'react'
import {Context} from '../../Context'


function useTvCast() {

    const {tvCredits,personTileMaker}  = useContext(Context)
    const {cast} = tvCredits

    const castTvTile = cast && personTileMaker(cast)

    return {castTvTile}
}

export default useTvCast