import { useContext } from 'react'
import {Context} from '../../Context'


function usePersonTrending() {
    const {personTrending, personTileMaker}  = useContext(Context)

    const personTrendingTile = personTileMaker(personTrending)

        return {personTrendingTile}
}

export default usePersonTrending