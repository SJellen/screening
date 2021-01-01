import React from 'react'
import useMenuMostMoneyMoviePage from '../../logic/Menu/useMenuMostMoneyMoviePage'

function MenuMostMoneyMovies() {
    
    const {menuMostMoneyMoviesPageTile1, menuMostMoneyMoviesPageTile2, menuMostMoneyMoviesPageTile3, menuMostMoneyMoviesPageTile4, menuMostMoneyMoviesPageTile5, menuMostMoneyMoviesPageTile6} = useMenuMostMoneyMoviePage()

    return (
        <div>
            <div className="slider-container">
                <span className="slider-label">Highest Grossing Movies</span>
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile6}
                </div>  
            </div>
        </div>      
    )
}

export default MenuMostMoneyMovies