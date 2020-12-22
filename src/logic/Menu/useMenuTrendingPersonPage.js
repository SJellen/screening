import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuTrendingPersonPage() {
    const {menuTrendingPersonPage1, menuTrendingPersonPage2, menuTrendingPersonPage3, menuTrendingPersonPage4, menuTrendingPersonPage5, menuTrendingPersonPage6, personTileMaker}  = useContext(Context)

    const menuTrendingPersonTile1 = personTileMaker(menuTrendingPersonPage1)
    const menuTrendingPersonTile2 = personTileMaker(menuTrendingPersonPage2)
    const menuTrendingPersonTile3 = personTileMaker(menuTrendingPersonPage3)
    const menuTrendingPersonTile4 = personTileMaker(menuTrendingPersonPage4)
    const menuTrendingPersonTile5 = personTileMaker(menuTrendingPersonPage5)
    const menuTrendingPersonTile6 = personTileMaker(menuTrendingPersonPage6)

        return {menuTrendingPersonTile1, menuTrendingPersonTile2, menuTrendingPersonTile3, menuTrendingPersonTile4, menuTrendingPersonTile5, menuTrendingPersonTile6}
}

export default useMenuTrendingPersonPage