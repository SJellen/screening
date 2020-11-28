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
        <span className="slider-label">Top Rated: Movies <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {topRatedMoviesTile}
        </div>
        <span className="slider-label">Top Rated: TV <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {topRatedTvTile}
        </div>
 
        </div>
        }


        </div>
        
        
        
    )
}

export default TopRated