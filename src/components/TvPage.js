import React from 'react'
import '../style/ItemPage.css'
import Tv from './Tv/Tv'
import {Link} from 'react-router-dom'


function TvPage() {

    return (
        <div>
            <div className="item-page-container">
                <Link to="/" style={{ textDecoration: 'none', color: "white"  }}>
                    <i className="im im-x-mark item-page-close" ></i> 
                </Link>
                <Tv />  
            </div>   
        </div> 
    )
}

export default TvPage