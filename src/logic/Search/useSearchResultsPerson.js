import { useContext } from 'react'
import {Context} from '../../Context'


function useSearchResultsPerson() {
    const {searchResultsPerson, personTileMaker}  = useContext(Context)

    const searchResultsPersonTile = searchResultsPerson && personTileMaker(searchResultsPerson)

    return {searchResultsPersonTile}
}



export default useSearchResultsPerson