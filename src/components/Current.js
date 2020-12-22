import React, {useContext} from 'react'
import {Context} from '../Context'
import useAiringToday from '../logic/Tv/useAiringToday'
import useUpcomingMovies from '../logic/Movie/useUpcomingMovies'
import useNowPlaying from '../logic/Movie/useNowPlaying'
import {Link} from 'react-router-dom'


function Current() {
    const {airingTodayTile} = useAiringToday()
    const {upcomingMoviesTile} = useUpcomingMovies()
    const {nowPlayingTile} = useNowPlaying()
    const { handleMenuUpcomingClick, handleMenuNowPlayingClick, handleMenuAiringTodayTvClick} = useContext(Context)
    
    return (
        <div>
            <div className="slider-container">
                <span className="slider-label">TV: Airing Today 
                    <Link to={"/menuLinkPage/airingTodayTv/"} style={{textDecoration: "none"}} onClick={handleMenuAiringTodayTvClick} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></Link></span>
                <div className="slider-sub-container">
                {airingTodayTile}
                </div>
                 <span className="slider-label">Movies: Now Playing  
                    <Link to={"/menuLinkPage/nowPlayingMovies/"} style={{textDecoration: "none"}} onClick={handleMenuNowPlayingClick} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></Link></span>
                <div className="slider-sub-container">
                    {nowPlayingTile}
                </div>
                <span className="slider-label">Movies: Upcoming 
                    <Link to={"/menuLinkPage/upcomingMovies/"} style={{textDecoration: "none"}} onClick={handleMenuUpcomingClick} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></Link></span>
                <div className="slider-sub-container">
                    {upcomingMoviesTile}
                </div>
            </div>
        </div>
    )
}

export default Current