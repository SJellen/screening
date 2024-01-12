import React from 'react'
import '../style/ItemPage.css'
import Movie from './Movie/Movie'
import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


function MoviePage() {

    return (
        <div>
            <div className="item-page-container">
                <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
                    <div className="item-page-close-container">
                    <CloseIcon className="im im-x-mark item-page-close"  />
                    </div>
                    
                </Link> 
                <Movie />   
            </div>  
        </div> 
    )
}

export default MoviePage