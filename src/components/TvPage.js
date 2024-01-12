import React from 'react'
import '../style/ItemPage.css'
import Tv from './Tv/Tv'
import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


function TvPage() {

    return (
        <div>
            <div className="item-page-container">
                <Link to="/" style={{ textDecoration: 'none', color: "white"  }}>
                <div className="item-page-close-container">
                    <CloseIcon className="im im-x-mark item-page-close"  />
                    </div>
                </Link>
                <Tv />  
            </div>   
        </div> 
    )
}

export default TvPage