import { useContext } from 'react'
import {Context} from '../../Context'

function useWatchListTv() {
    const {watchListTv, tvTileMaker}  = useContext(Context)
    const watchListTvTile = tvTileMaker(watchListTv)

        return {watchListTvTile}
}

export default useWatchListTv