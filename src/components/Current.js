import React, {useContext} from 'react'
import useAiringToday from '../logic/useAiringToday'
import useUpcomingMovies from '../logic/useUpcomingMovies'
import useNowPlaying from '../logic/useNowPlaying'
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
        <span className="slider-label">TV: Airing Today</span>
        <div className="slider-sub-container">
            {airingTodayTile}
        </div>
        <span className="slider-label">Movies: Now Playing</span>
        <div className="slider-sub-container">
            {nowPlayingTile}
        </div>

        <span className="slider-label">Movies: Upcoming</span>
        <div className="slider-sub-container">
            {upcomingMoviesTile}
        </div>
  
        </div>
        }

        </div>
       
    )
}

export default Current