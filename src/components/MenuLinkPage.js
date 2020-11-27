import React from 'react'
import '../style/ItemPage.css'

import {Link} from 'react-router-dom'
import MenuPopularMovies from './Menu/MenuPopularMovies'


function MenuLinkPage() {


    return (
        <div>
        
        <div className="item-page-container">
           <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
               <i className="im im-x-mark item-page-close" ></i> 
           </Link> 
            <MenuPopularMovies />
        </div>  
        </div> 
    )
}

export default MenuLinkPage