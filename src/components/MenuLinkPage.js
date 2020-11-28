import React from 'react'
import '../style/ItemPage.css'

import {Link, Route} from 'react-router-dom'
import MenuPopularMovies from './Menu/MenuPopularMovies'
import MenuTopRatedMovies from './Menu/MenuTopRatedMovies'
import MenuUpcomingMovies from './Menu/MenuUpcomingMovies'
import MenuNowPlayingMovies from './Menu/MenuNowPlayingMovies'
import MenuMostMoneyMovies from './Menu/MenuMostMoneyMovies'


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
      </div>
      
    )
  }

export default MenuLinkPage