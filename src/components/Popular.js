import React, {useContext} from 'react'
import useTvPopular from '../logic/Tv/useTvPopular'
import usePersonPopular from '../logic/Person/usePersonPopular'
import useMoviePopular from '../logic/Movie/useMoviePopular'
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
        <span className="slider-label">Popular: Movies <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {popularMoviesTile}
        </div>
        <span className="slider-label">Popular: TV <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {popularTvTile}
        </div>

        <span className="slider-label">Popular: People <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="#E1B517" className="link-arrow"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        <div className="slider-sub-container">
            {popularPersonTile}
        </div>

            
        </div> 
        }





        </div>
        
       
    )
}

export default Popular