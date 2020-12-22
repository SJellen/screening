import { useContext } from 'react'
import {Context} from '../../Context'

function useAiringToday() {
    const {airingToday, tvTileMaker}  = useContext(Context)
    const airingTodayTile = tvTileMaker(airingToday)
    
    return {airingTodayTile}
}

export default useAiringToday