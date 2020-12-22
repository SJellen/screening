import { useContext } from 'react'
import {Context} from '../../Context'

function useMenuOnAirTvPage() {
    const {menuOnAirTvPage1, menuOnAirTvPage2, menuOnAirTvPage3, menuOnAirTvPage4, menuOnAirTvPage5, menuOnAirTvPage6, tvTileMaker}  = useContext(Context)

    const menuOnAirTvTile1 = tvTileMaker(menuOnAirTvPage1)
    const menuOnAirTvTile2 = tvTileMaker(menuOnAirTvPage2)
    const menuOnAirTvTile3 = tvTileMaker(menuOnAirTvPage3)
    const menuOnAirTvTile4 = tvTileMaker(menuOnAirTvPage4)
    const menuOnAirTvTile5 = tvTileMaker(menuOnAirTvPage5)
    const menuOnAirTvTile6 = tvTileMaker(menuOnAirTvPage6)
  
        return {menuOnAirTvTile1, menuOnAirTvTile2, menuOnAirTvTile3, menuOnAirTvTile4, menuOnAirTvTile5, menuOnAirTvTile6}
}

export default useMenuOnAirTvPage