import React from 'react'
import useMenuTrendingTvPage from '../../logic/Menu/useMenuTrendingTvPage'

function MenuTrendingTv() {
    
    const {menuTrendingTvTile1, menuTrendingTvTile2, menuTrendingTvTile3, menuTrendingTvTile4, menuTrendingTvTile5, menuTrendingTvTile6} = useMenuTrendingTvPage()
    
    return (
       <div>
            <div className="slider-container">
                <span className="slider-label">Trending Tv Shows</span>
                <div className="slider-sub-container">
                    {menuTrendingTvTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile6}
                </div>  
            </div>
       </div>      
    )
}

export default MenuTrendingTv