import React from 'react'
import useMovieTrending from '../logic/useMovieTrending'
import useTvTrending from '../logic/useTvTrending'
import usePersonTrending from '../logic/usePersonTrending'

function Trending() {
   
    const {movieTrendingTile} = useMovieTrending()
    const {tvTrendingTile} = useTvTrending()
    const {personTrendingTile} = usePersonTrending()
    

    return (
        
        <div className="slider-container">
        <span className="slider-label">Trending: Movies</span>
        <div className="slider-sub-container">
            {movieTrendingTile}
        </div>
        <span className="slider-label">Trending: TV</span>
        <div className="slider-sub-container">
            {tvTrendingTile}
        </div>

        <span className="slider-label">Trending: People</span>
        <div className="slider-sub-container">
            {personTrendingTile}
        </div>

            
        </div>
    )
}

export default Trending