import React, {useContext} from 'react'
import {Context} from '../../Context'



function PersonFilmographyNav() {

    const {personCredits} = useContext(Context)
    
 

    const personFilmographyTile = (
        <div className="filmography-nav-container">
        <div className="filmography-nav">
            <span className="filmography-nav-type">Actor<span>Movie</span>
            <span>Tv</span></span>

            <span className="filmography-nav-type">Director<span>Movie</span>
            <span>Tv</span></span>

            <span className="filmography-nav-type">Writer<span>Movie</span>
            <span>Tv</span></span>

            <span className="filmography-nav-type">Producer<span>Movie</span>
            <span>Tv</span></span>

            <span className="filmography-nav-type">Misc<span>Movie</span>
            <span>Tv</span></span>
        </div>
       
        </div>
    )

        
    


    return {personFilmographyTile}
}

export default PersonFilmographyNav