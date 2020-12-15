import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuPopularTvPage() {
    const {menuPopularTvPage1, menuPopularTvPage2,menuPopularTvPage3,menuPopularTvPage4, menuPopularTvPage5, menuPopularTvPage6, tvTileMaker}  = useContext(Context)

    const menuPopularTvPageTile1 = tvTileMaker(menuPopularTvPage1)
    const menuPopularTvPageTile2 = tvTileMaker(menuPopularTvPage2)
    const menuPopularTvPageTile3 = tvTileMaker(menuPopularTvPage3)
    const menuPopularTvPageTile4 = tvTileMaker(menuPopularTvPage4)
    const menuPopularTvPageTile5 = tvTileMaker(menuPopularTvPage5)
    const menuPopularTvPageTile6 = tvTileMaker(menuPopularTvPage6)

    
        return {menuPopularTvPageTile1, menuPopularTvPageTile2, menuPopularTvPageTile3, menuPopularTvPageTile4, menuPopularTvPageTile5, menuPopularTvPageTile6}
}


export default useMenuPopularTvPage