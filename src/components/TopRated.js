import React, {useContext} from 'react'
import {Context} from '../Context'
import useTopRatedMovies from '../logic/Movie/useTopRatedMovies'
import useTopRatedTv from '../logic/Tv/useTopRatedTv'
import {Link} from 'react-router-dom'


function TopRated() {
    const {topRatedMoviesTile} = useTopRatedMovies()
    const {topRatedTvTile} = useTopRatedTv()
    const {handleMenuTopRatedClick, handleMenuTopRatedTvClick} = useContext(Context)
    
    return (
        <div>
            <div className="slider-container">
                <span className="slider-label">Top Rated: Movies  <Link to={"/menuLinkPage/topRatedMovies/"} style={{textDecoration: "none"}} onClick={handleMenuTopRatedClick} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></Link></span>
                <div className="slider-sub-container">
                    {topRatedMoviesTile}
                </div>
                <span className="slider-label">Top Rated: TV <Link to={"/menuLinkPage/topRatedTv/"} style={{textDecoration: "none"}} onClick={handleMenuTopRatedTvClick} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></Link></span>
                <div className="slider-sub-container">
                    {topRatedTvTile}
                </div>
            </div>
        </div> 
    )
}

export default TopRated