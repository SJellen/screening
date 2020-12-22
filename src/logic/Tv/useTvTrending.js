import { useContext } from 'react'
import {Context} from '../../Context'

function useTvTrending() {
    const {tvTrending, tvTileMaker}  = useContext(Context)
    const tvTrendingTile = tvTileMaker(tvTrending)

        return {tvTrendingTile}
}

export default useTvTrending