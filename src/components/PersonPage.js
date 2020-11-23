import React from 'react'
import '../style/ItemPage.css'
import Person from './Person/Person'
import {Link} from 'react-router-dom'


function PersonPage() {


    return (
        <div>
        
        <div className="item-page-container">
           <Link to='/' style={{ textDecoration: 'none', color: "white"  }}>
               <i className="im im-x-mark item-page-close" ></i> 
           </Link> 
            <Person />   
        </div>  
        </div> 
    )
}

export default PersonPage