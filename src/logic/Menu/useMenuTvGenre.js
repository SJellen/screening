import { useContext } from 'react'
import {Context} from '../../Context'

function useMenuTvGenre() {
    const {genreTv1, genreTv2, genreTv3, genreTv4, genreTv5, genreTv6, genreTv7, genreTv8, genreTv9, genreTv10, tvTileMaker }  = useContext(Context)

    const menuTvGenreTile1 = genreTv1 && tvTileMaker(genreTv1)
    const menuTvGenreTile2 = genreTv2 && tvTileMaker(genreTv2)  
    const menuTvGenreTile3 = genreTv3 && tvTileMaker(genreTv3) 
    const menuTvGenreTile4 = genreTv4 && tvTileMaker(genreTv4)
    const menuTvGenreTile5 = genreTv5 && tvTileMaker(genreTv5)  
    const menuTvGenreTile6 = genreTv6 && tvTileMaker(genreTv6)
    const menuTvGenreTile7 = genreTv7 && tvTileMaker(genreTv7)
    const menuTvGenreTile8 = genreTv8 && tvTileMaker(genreTv8)
    const menuTvGenreTile9 = genreTv9 && tvTileMaker(genreTv9)
    const menuTvGenreTile10 = genreTv10 && tvTileMaker(genreTv10)

        return {menuTvGenreTile1, menuTvGenreTile2, menuTvGenreTile3, menuTvGenreTile4, menuTvGenreTile5, menuTvGenreTile6, menuTvGenreTile7, menuTvGenreTile8, menuTvGenreTile9, menuTvGenreTile10}
}

export default useMenuTvGenre