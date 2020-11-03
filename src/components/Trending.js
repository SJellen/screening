import React, { useContext } from 'react'
import '../style/Trending.css'
import {Context} from '../Context'
import useMovieTrending from '../logic/useMovieTrending'
import useTvTrending from '../logic/useTvTrending'
import usePersonTrending from '../logic/usePersonTrending'

function Trending() {
   
    const {movieTrendingTile} = useMovieTrending()
    const {tvTrendingTile} = useTvTrending()
    const {personTrendingTile} = usePersonTrending()
    

    return (
        
        <div className="trending-container">
        <span className="trending-label">Trending: Movies</span>
        <div className="trending-sub-container">
            {movieTrendingTile}
        </div>
        <span className="trending-label">Trending: TV</span>
        <div className="trending-sub-container">
            {tvTrendingTile}
        </div>

        <span className="trending-label">Trending: People</span>
        <div className="trending-sub-container">
            {personTrendingTile}
        </div>

            
        </div>
    )
}

export default Trending