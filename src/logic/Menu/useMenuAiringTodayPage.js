import { useContext } from 'react'
import {Context} from '../../Context'


function useMenuAiringTodayPage() {
    const {menuAiringTodayTvPage1, menuAiringTodayTvPage2, menuAiringTodayTvPage3, menuAiringTodayTvPage4, menuAiringTodayTvPage5, menuAiringTodayTvPage6,  tvTileMaker}  = useContext(Context)
    const menuAiringTodayTvTile1 = tvTileMaker(menuAiringTodayTvPage1)
    const menuAiringTodayTvTile2 = tvTileMaker(menuAiringTodayTvPage2)
    const menuAiringTodayTvTile3 = tvTileMaker(menuAiringTodayTvPage3)
    const menuAiringTodayTvTile4 = tvTileMaker(menuAiringTodayTvPage4)
    const menuAiringTodayTvTile5 = tvTileMaker(menuAiringTodayTvPage5)
    const menuAiringTodayTvTile6 = tvTileMaker(menuAiringTodayTvPage6)
  
        return {menuAiringTodayTvTile1, menuAiringTodayTvTile2, menuAiringTodayTvTile3, menuAiringTodayTvTile4, menuAiringTodayTvTile5, menuAiringTodayTvTile6}
}

export default useMenuAiringTodayPage