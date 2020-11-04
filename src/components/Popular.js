import React, {useContext} from 'react'
import useTvPopular from '../logic/useTvPopular'
import usePersonPopular from '../logic/usePersonPopular'
import useMoviePopular from '../logic/useMoviePopular'
import {Context} from '../Context'

function Popular() {
    
    const {popularMoviesTile} = useMoviePopular()
    const {popularTvTile} = useTvPopular()
    const {popularPersonTile} = usePersonPopular()
    const {itemPageOpen}  = useContext(Context)
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
        <div className="slider-container">
        <span className="slider-label">Popular: Movies</span>
        <div className="slider-sub-container">
            {popularMoviesTile}
        </div>
        <span className="slider-label">Popular: TV</span>
        <div className="slider-sub-container">
            {popularTvTile}
        </div>

        <span className="slider-label">Popular: People</span>
        <div className="slider-sub-container">
            {popularPersonTile}
        </div>

            
        </div> 
        }





        </div>
        
       
    )
}

export default Popular