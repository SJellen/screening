import React from 'react'
import '../style/ItemPage.css'

import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuPopularMovies from './Menu/MenuPopularMovies'
import MenuTopRatedMovies from './Menu/MenuTopRatedMovies'
import MenuUpcomingMovies from './Menu/MenuUpcomingMovies'
import MenuNowPlayingMovies from './Menu/MenuNowPlayingMovies'
import MenuMostMoneyMovies from './Menu/MenuMostMoneyMovies'


function MenuLinkPage() {


    return (
       
            <div>
        
        <div className="item-page-container">
           <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
               <i className="im im-x-mark item-page-close" ></i> 
           </Link> 
            <Router>
           <Switch >
               <Route path="/menuLinkPage/popularMovies/" component={MenuPopularMovies} />
               <Route path="/menuLinkPage/topRatedMovies/" component={MenuTopRatedMovies} />
               <Route path="/menuLinkPage/upcomingMovies/" component={MenuUpcomingMovies} />
               <Route path="/menuLinkPage/nowPlayingMovies/" component={MenuNowPlayingMovies} />
               <Route path="/menuLinkPage/mostMoneyMovies/" component={MenuMostMoneyMovies} />

           </Switch>
           </Router>
            
        </div>  
        </div>
        
         
    )
}

export default MenuLinkPage