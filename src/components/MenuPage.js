import React from 'react'
import '../style/ItemPage.css'
import Menu from './Menu/Menu'
import {Link} from 'react-router-dom'


function MenuPage() {


    return (
        <div>
       
        <div className="menu-page-container">
        <div className="menu-close-container">
           <Link to="/" style={{ textDecoration: 'none', color: "white"  }}>
            <i className="im im-x-mark menu-page-close" ></i> 
        </Link> 
        </div>
         
              <Menu />  
        </div>   
        </div> 
    )
}

export default MenuPage