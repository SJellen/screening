import React, {useContext} from 'react'
import {Context} from '../../Context'



function PersonFilmographyNav() {

    const {personCredits} = useContext(Context)
    
 

    const personFilmographyTile = (
        <div className="filmography-nav-container">
        <div className="filmography-nav">
            <span className="filmography-nav-jump" >Jump to:</span>

            <a className="filmography-nav-type" href="#actor">Actor  
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </a>

            <a className="filmography-nav-type" href="#director">Director  
            
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </a>

            <a className="filmography-nav-type" href="#writer">Writer  
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </a>

            <a className="filmography-nav-type" href="#producer">Producer  
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </a>

            <a className="filmography-nav-type" href="#misc">Misc
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </a>
        </div>
       
        </div>
    )

        
    


    return {personFilmographyTile}
}

export default PersonFilmographyNav