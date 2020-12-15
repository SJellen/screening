import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuTrendingTvPage() {
    const {menuTrendingTvPage1, menuTrendingTvPage2, menuTrendingTvPage3, menuTrendingTvPage4, menuTrendingTvPage5, menuTrendingTvPage6, tvTileMaker }  = useContext(Context)

    const menuTrendingTvTile1 = tvTileMaker(menuTrendingTvPage1)
    const menuTrendingTvTile2 = tvTileMaker(menuTrendingTvPage2)
    const menuTrendingTvTile3 = tvTileMaker(menuTrendingTvPage3)
    const menuTrendingTvTile4 = tvTileMaker(menuTrendingTvPage4)
    const menuTrendingTvTile5 = tvTileMaker(menuTrendingTvPage5)
    const menuTrendingTvTile6 = tvTileMaker(menuTrendingTvPage6)
 
    

        return {menuTrendingTvTile1, menuTrendingTvTile2, menuTrendingTvTile3, menuTrendingTvTile4, menuTrendingTvTile5, menuTrendingTvTile6}
}


export default useMenuTrendingTvPage