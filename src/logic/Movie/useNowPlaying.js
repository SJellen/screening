import { useContext } from 'react'
import {Context} from '../../Context'


function useNowPlaying() {
    const {nowPlaying, movieTileMaker}  = useContext(Context)

    const nowPlayingTile = movieTileMaker(nowPlaying)

        return {nowPlayingTile}
}

export default useNowPlaying