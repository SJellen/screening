import React from 'react'
import useMenuPopularTvPage from '../../logic/Menu/useMenuPopularTvPage'

function MenuPopularTv() {
    
    const {menuPopularTvPageTile1, menuPopularTvPageTile2, menuPopularTvPageTile3, menuPopularTvPageTile4, menuPopularTvPageTile5, menuPopularTvPageTile6} = useMenuPopularTvPage()

    return (
       <div>
            <div className="slider-container">
                <span className="slider-label">Most Popular Tv</span>
                <div className="slider-sub-container">
                    {menuPopularTvPageTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularTvPageTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularTvPageTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularTvPageTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularTvPageTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                {menuPopularTvPageTile6}
                </div>  
            </div>
       </div>      
    )
}

export default MenuPopularTv