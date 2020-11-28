import React from 'react'
import '../style/ItemPage.css'
import {Link, Route} from 'react-router-dom'
import MenuPopularMovies from './Menu/MenuPopularMovies'
import MenuTopRatedMovies from './Menu/MenuTopRatedMovies'
import MenuUpcomingMovies from './Menu/MenuUpcomingMovies'
import MenuNowPlayingMovies from './Menu/MenuNowPlayingMovies'
import MenuMostMoneyMovies from './Menu/MenuMostMoneyMovies'
import MenuPopularTv from './Menu/MenuPopularTv'
import MenuTopRatedTv from './Menu/MenuTopRatedTv'
import MenuOnAirTv from './Menu/MenuOnAirTv'
import MenuAiringTodayTv from './Menu/MenuAiringTodayTv'

function MenuLinkPage() {
    return (
      <div className="item-page-container">
      <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
                 <i className="im im-x-mark item-page-close" ></i> 
      </Link> 
  
        <Route path="/menuLinkPage/popularMovies/" component={MenuPopularMovies} />
        <Route path="/menuLinkPage/topRatedMovies/" component={MenuTopRatedMovies} />
        <Route path="/menuLinkPage/upcomingMovies/" component={MenuUpcomingMovies} />
        <Route path="/menuLinkPage/nowPlayingMovies/" component={MenuNowPlayingMovies} />
        <Route path="/menuLinkPage/mostMoneyMovies/" component={MenuMostMoneyMovies} />
        <Route path="/menuLinkPage/popularTv/" component={MenuPopularTv} />
        <Route path="/menuLinkPage/topRatedTv/" component={MenuTopRatedTv} />
        <Route path="/menuLinkPage/onAirTv/" component={MenuOnAirTv} />
        <Route path="/menuLinkPage/airingTodayTv/" component={MenuAiringTodayTv} />
      </div>
      
    )
  }

export default MenuLinkPage