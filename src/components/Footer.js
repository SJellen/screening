import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Footer.css'
import blueSquare from '../assets/blueSquare.svg'
import {Link} from 'react-router-dom'


function Footer() {

    const {setItemPageOpen,  setSearchResultsActive, setMovieLoaded, setTvLoaded}  = useContext(Context)

    function handleX() {
        setItemPageOpen(false)
        setSearchResultsActive(false)
        setMovieLoaded(false) 
        setTvLoaded(false)
    }


    return (
        <div className="footer">
        <div className="logo-box">
            <Link to='/home'  className="footer-title-link"><span className="footer-title" onClick={handleX}>Screening</span></Link>
        </div>


        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="api-link">
            <img src={blueSquare} alt="TMDB logo" className="tmdb-logo"/>
        </a>


       
            
        </div>
    )
}


export default Footer