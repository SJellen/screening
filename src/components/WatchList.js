import React, {useContext} from 'react'
import {Context} from '../Context'
import useWatchListMovie from '../logic/WatchList/useWatchListMovie'
import useWatchListTv from '../logic/WatchList/useWatchListTv'
import {Link} from 'react-router-dom'
import UserContext from '../UserContext'


function WatchList() {
    const {watchListTv, watchListMovie} = useContext(Context)
    const {watchListTvTile} = useWatchListTv()
    const {watchListMovieTile} = useWatchListMovie()

    const { userData } = useContext(UserContext)

   
    return (
        <div className="watchlist-page-container">
            <Link to="/" style={{ textDecoration: 'none', color: "white"  }}>
                <i className="im im-x-mark item-page-close" ></i> 
            </Link>
            <h1 className="results-title">{userData.user && userData.user.displayName !== undefined ? `${userData.user.displayName}'s` : ''} Watchlist</h1>
            { watchListMovie.length > 0 ? 
            <div>
                <span className="slider-label">Movies</span>
            <div className="slider-sub-container">
                {watchListMovieTile}
            </div>

            </div>
            : '' }
            { watchListTv && watchListTv.length > 0 ? 
            <div>
                <span className="slider-label">TV</span>
                <div className="slider-sub-container">
                    {watchListTvTile}
                </div>
            </div>
            : ''}
        </div>
    )
}


export default WatchList