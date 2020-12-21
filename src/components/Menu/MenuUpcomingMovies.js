import React from 'react'
import useMenuUpcomingMoviePage from '../../logic/Menu/useMenuUpcomingMoviePage'


function MenuUpcomingMovies() {
    
    const {menuUpcomingPageTile1, menuUpcomingPageTile2, menuUpcomingPageTile3, menuUpcomingPageTile4,menuUpcomingPageTile5, menuUpcomingPageTile6} = useMenuUpcomingMoviePage()
    
    return (
       <div>
            <div className="slider-container">
                <span className="slider-label">Upcoming Movies</span>
                <div className="slider-sub-container">
                    {menuUpcomingPageTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuUpcomingPageTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuUpcomingPageTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuUpcomingPageTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuUpcomingPageTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuUpcomingPageTile6}
                </div>  
            </div>
       </div>     
    )
}

export default MenuUpcomingMovies