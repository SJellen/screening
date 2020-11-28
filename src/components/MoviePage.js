import React from 'react'
import '../style/ItemPage.css'
import Movie from './Movie/Movie'
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function MoviePage() {


    return (
        <div>
        
        <div className="item-page-container">
           <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
               <i className="im im-x-mark item-page-close" ></i> 

           </Link> 
           

            <Movie />   
        </div>  
        </div> 
    )
}

export default MoviePage