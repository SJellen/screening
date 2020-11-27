import React from 'react'
import '../style/ItemPage.css'

import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuPopularMovies from './Menu/MenuPopularMovies'
import MenuTopRatedMovies from './Menu/MenuTopRatedMovies'


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

           </Switch>
           </Router>
            
        </div>  
        </div>
        
         
    )
}

export default MenuLinkPage