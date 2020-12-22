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
import MenuTrendingMovies from './Menu/MenuTrendingMovies'
import MenuTrendingTv from "./Menu/MenuTrendingTv"
import MenuTrendingPerson from './Menu/MenuTrendingPerson'
import MenuPopularPerson from './Menu/MenuPopularPerson'
import MenuMovieGenre from './Menu/MenuMovieGenre'
import MenuTvGenre from './Menu/MenuTvGenre'

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
        <Route path="/menuLinkPage/trendingMovies/" component={MenuTrendingMovies} />
        <Route path="/menuLinkPage/trendingTv/" component={MenuTrendingTv} />
        <Route path="/menuLinkPage/popularPerson/" component={MenuPopularPerson} />
        <Route path="/menuLinkPage/trendingPerson/" component={MenuTrendingPerson} />
        <Route path="/menuLinkPage/movieGenre/" component={MenuMovieGenre} />
        <Route path="/menuLinkPage/tvGenre/" component={MenuTvGenre} />
      </div> 
    )
  }

export default MenuLinkPage