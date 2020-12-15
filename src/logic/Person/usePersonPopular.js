import { useContext } from 'react'
import {Context} from '../../Context'


function usePersonPopular() {
    const {popularPerson, personTileMaker}  = useContext(Context)
    
    const popularPersonTile = personTileMaker(popularPerson)

        return {popularPersonTile}
}



export default usePersonPopular