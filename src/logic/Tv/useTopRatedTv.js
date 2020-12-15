import { useContext } from 'react'
import {Context} from '../../Context'


function useTopRatedTv() {
    const {topRatedTv,tvTileMaker}  = useContext(Context)
    const topRatedTvTile = tvTileMaker(topRatedTv)

        return {topRatedTvTile}
}


export default useTopRatedTv