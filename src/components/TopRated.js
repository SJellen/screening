import React, {useContext} from 'react'
import useTopRatedMovies from '../logic/Movie/useTopRatedMovies'
import useTopRatedTv from '../logic/Tv/useTopRatedTv'
import {Context} from '../Context'


function TopRated() {
    
    const {topRatedMoviesTile} = useTopRatedMovies()
    const {topRatedTvTile} = useTopRatedTv()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
        <div className="slider-container">
        <span className="slider-label">Top Rated: Movies</span>
        <div className="slider-sub-container">
            {topRatedMoviesTile}
        </div>
        <span className="slider-label">Top Rated: TV</span>
        <div className="slider-sub-container">
            {topRatedTvTile}
        </div>
 
        </div>
        }


        </div>
        
        
        
    )
}

export default TopRated