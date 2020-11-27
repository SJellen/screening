import React, {useContext} from 'react'

import {Context} from '../../Context'


function MenuPopularMovies() {
    
   
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
        <div className="slider-container">
        <span className="slider-label">Most Popular: Movies</span>
        <div className="slider-sub-container">
            {/* {topRatedMoviesTile} */}
        </div>
       </div>
        }


        </div>
        
        
        
    )
}

export default MenuPopularMovies