import React from 'react'
import useMenuTrendingMoviePage from '../../logic/Menu/useMenuTrendingMoviePage'


function MenuTrendingMovies() {
    
    const {menuTrendingMoviesTile1, menuTrendingMoviesTile2, menuTrendingMoviesTile3, menuTrendingMoviesTile4, menuTrendingMoviesTile5, menuTrendingMoviesTile6} = useMenuTrendingMoviePage()
    
    return (
       <div>
            <div className="slider-container">
                <span className="slider-label">Trending Movies</span>
                <div className="slider-sub-container">
                    {menuTrendingMoviesTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingMoviesTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingMoviesTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingMoviesTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingMoviesTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingMoviesTile6}
                </div>  
            </div>
       </div>     
    )
}

export default MenuTrendingMovies