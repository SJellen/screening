import React, { useContext } from 'react'
import '../style/Popular.css'
import {Context} from '../Context'

import useTvPopular from '../logic/useTvPopular'
import usePersonPopular from '../logic/usePersonPopular'
import useMoviePopular from '../logic/useMoviePopular'

function Popular() {
    
    const {popularMoviesTile} = useMoviePopular()
    const {popularTvTile} = useTvPopular()
    const {popularPersonTile} = usePersonPopular()
    

    return (
        
        <div className="popular-container">
        <span className="popular-label">Popular: Movies</span>
        <div className="popular-sub-container">
            {popularMoviesTile}
        </div>
        <span className="popular-label">Popular: TV</span>
        <div className="popular-sub-container">
            {popularTvTile}
        </div>

        <span className="popular-label">Popular: People</span>
        <div className="popular-sub-container">
            {popularPersonTile}
        </div>

            
        </div>
    )
}

export default Popular