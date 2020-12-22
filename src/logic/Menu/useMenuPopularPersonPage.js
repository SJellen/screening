import { useContext } from 'react'
import {Context} from '../../Context'

function useMenuPopularPersonPage() {
    const {menuPopularPersonPage1, menuPopularPersonPage2, menuPopularPersonPage3, menuPopularPersonPage4, menuPopularPersonPage5, menuPopularPersonPage6, personTileMaker}  = useContext(Context)

    const menuPopularPersonTile1 = personTileMaker(menuPopularPersonPage1)
    const menuPopularPersonTile2 = personTileMaker(menuPopularPersonPage2)
    const menuPopularPersonTile3 = personTileMaker(menuPopularPersonPage3)
    const menuPopularPersonTile4 = personTileMaker(menuPopularPersonPage4)
    const menuPopularPersonTile5 = personTileMaker(menuPopularPersonPage5)
    const menuPopularPersonTile6 = personTileMaker(menuPopularPersonPage6)

        return {menuPopularPersonTile1, menuPopularPersonTile2, menuPopularPersonTile3, menuPopularPersonTile4, menuPopularPersonTile5, menuPopularPersonTile6}
}

export default useMenuPopularPersonPage