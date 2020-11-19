import React, {useContext} from 'react'
import {Context} from '../../Context'



function PersonFilmographyNav() {

    const {personCredits} = useContext(Context)
    
 

    const personFilmographyTile = (
        <div className="filmography-nav-container">
        <div className="filmography-nav">
            <span className="filmography-nav-jump" >Jump to:</span>

            <span className="filmography-nav-type">Actor
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </span>

            <span className="filmography-nav-type">Director
            
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </span>

            <span className="filmography-nav-type">Writer
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </span>

            <span className="filmography-nav-type">Producer
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </span>

            <span className="filmography-nav-type">Misc
            {/* <span className="filmography-nav-type-movie">Movie</span>
            <span className="filmography-nav-type-tv">Tv</span> */}
            </span>
        </div>
       
        </div>
    )

        
    


    return {personFilmographyTile}
}

export default PersonFilmographyNav