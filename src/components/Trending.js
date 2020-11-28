import React, {useContext} from 'react'
import useMovieTrending from '../logic/Movie/useMovieTrending'
import useTvTrending from '../logic/Tv/useTvTrending'
import usePersonTrending from '../logic/Person/usePersonTrending'
import {Context} from '../Context'

function Trending() {
   
    const {movieTrendingTile} = useMovieTrending()
    const {tvTrendingTile} = useTvTrending()
    const {personTrendingTile} = usePersonTrending()
    const {itemPageOpen}  = useContext(Context)
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :

            <div className="slider-container">
        <span className="slider-label">Trending: Movies <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {movieTrendingTile}
        </div>
        <span className="slider-label">Trending: TV <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {tvTrendingTile}
        </div>

        <span className="slider-label">Trending: People <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {personTrendingTile}
        </div>
        </div>
        }
  
        </div>
    )
}

export default Trending