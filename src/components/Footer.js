import React from 'react'
import '../style/Footer.css'
import blueSquare from '../assets/blueSquare.svg'


function Footer() {



    return (
        <div className="footer">
        <div className="logo-box">
            <span className="footer-title">Screening</span>
        </div>


        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="api-link">
            <img src={blueSquare} alt="TMDB logo" className="tmdb-logo"/>
        </a>


       
            
        </div>
    )
}


export default Footer