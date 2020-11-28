import React, {useContext} from 'react'
import useAiringToday from '../logic/Tv/useAiringToday'
import useUpcomingMovies from '../logic/Movie/useUpcomingMovies'
import useNowPlaying from '../logic/Movie/useNowPlaying'
import {Context} from '../Context'

function Current() {
    
    const {airingTodayTile} = useAiringToday()
    const {upcomingMoviesTile} = useUpcomingMovies()
    const {nowPlayingTile} = useNowPlaying()
    const {itemPageOpen}  = useContext(Context)
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
        <div className="slider-container">
        <span className="slider-label">TV: Airing Today <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {airingTodayTile}
        </div>
        <span className="slider-label">Movies: Now Playing <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {nowPlayingTile}
        </div>

        <span className="slider-label">Movies: Upcoming <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {upcomingMoviesTile}
        </div>
  
        </div>
        }

        </div>
       
    )
}

export default Current