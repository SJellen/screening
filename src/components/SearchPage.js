import React from 'react'
import '../style/ItemPage.css'
import Search from './Search'
import {Link} from 'react-router-dom'


function SearchPage() {

    return (
        <div>
            <div className="item-page-container">
                <Link to='/' style={{ textDecoration: 'none', color: "white"  }}>
                    <i className="im im-x-mark item-page-close" ></i> 
                </Link>
                <Search />    
            </div>  
        </div> 
    )
}

export default SearchPage