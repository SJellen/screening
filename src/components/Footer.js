import React from 'react'
import '../style/Footer.css'
import blueSquare from '../assets/blueSquare.svg'


function Footer() {



    return (
        <div className="footer">
        <div className="logo-box">
            <span className="footer-title">Screening</span>
        </div>


        <img src={blueSquare} alt="TMDB logo" className="tmdb-logo"/>


       
            
        </div>
    )
}


export default Footer