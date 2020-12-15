import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuTopRatedTvPage() {
    const {menuTopRatedTvPage1, menuTopRatedTvPage2, menuTopRatedTvPage3, menuTopRatedTvPage4, menuTopRatedTvPage5, menuTopRatedTvPage6, tvTileMaker}  = useContext(Context)

    const menuTopRatedTvTile1 = tvTileMaker(menuTopRatedTvPage1)
    const menuTopRatedTvTile2 = tvTileMaker(menuTopRatedTvPage2)
    const menuTopRatedTvTile3 = tvTileMaker(menuTopRatedTvPage3)
    const menuTopRatedTvTile4 = tvTileMaker(menuTopRatedTvPage4)
    const menuTopRatedTvTile5 = tvTileMaker(menuTopRatedTvPage5)
    const menuTopRatedTvTile6 = tvTileMaker(menuTopRatedTvPage6)
 

        return {menuTopRatedTvTile1, menuTopRatedTvTile2, menuTopRatedTvTile3, menuTopRatedTvTile4, menuTopRatedTvTile5, menuTopRatedTvTile6}
}


export default useMenuTopRatedTvPage