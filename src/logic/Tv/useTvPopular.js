import { useContext } from 'react'
import {Context} from '../../Context'

function useTvPopular() {
    const {popularTv, tvTileMaker}  = useContext(Context)
    const popularTvTile = tvTileMaker(popularTv)

        return {popularTvTile}
}

export default useTvPopular