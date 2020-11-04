import React from 'react'
import useTopRatedMovies from '../logic/useTopRatedMovies'
import useTopRatedTv from '../logic/useTopRatedTv'


function TopRated() {
    
    const {topRatedMoviesTile} = useTopRatedMovies()
    const {topRatedTvTile} = useTopRatedTv()
    
    

    return (
        
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
    )
}

export default TopRated