import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Footer.css'
import blueSquare from '../assets/blueSquare.svg'
import {Link} from 'react-router-dom'


function Footer() {
    const {handleLogoClick}  = useContext(Context)

    return (
        <div className="footer">
            <div className="logo-box">
                <Link to='/'  className="footer-title-link"><span className="footer-title" onClick={handleLogoClick}>Screening</span></Link>
            </div>
            <a href="https://scottjellen.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://s3.us-east-2.amazonaws.com/scottjellen.me.projectlist/sJellenLogo.jpg"
                        alt="logo"
                        className="logo"
                        />
            </a>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="api-link">
                <img src={blueSquare} alt="TMDB logo" className="tmdb-logo"/>
            </a>  
        </div>
    )
}

export default Footer