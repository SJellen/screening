import React from 'react'
import '../style/ItemPage.css'
import Person from './Person/Person'
import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

function PersonPage() {
    return (
        <div>
            <div className="item-page-container">
                <Link to='/' style={{ textDecoration: 'none', color: "white"  }} >
                <div className="item-page-close-container">
                    <CloseIcon className="im im-x-mark item-page-close"  />
                    </div>
                </Link> 
                <Person />   
            </div>  
        </div> 
    )
}

export default PersonPage