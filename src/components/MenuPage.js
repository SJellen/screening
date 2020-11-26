import React from 'react'
import '../style/ItemPage.css'
import Menu from './Menu/Menu'
import {Link} from 'react-router-dom'


function MenuPage() {


    return (
        <div>
       
        <div className="menu-page-container">
         <Link to="/" style={{ textDecoration: 'none', color: "white"  }}>
            <i className="im im-x-mark item-page-close" ></i> 
        </Link>
              <Menu />  
        </div>   
        </div> 
    )
}

export default MenuPage