import React from 'react'
import useMenuTopRatedTvPage from '../../logic/Menu/useMenuTopRatedTvPage'

function MenuTopRatedTv() {
    
    const {menuTopRatedTvTile1, menuTopRatedTvTile2, menuTopRatedTvTile3, menuTopRatedTvTile4, menuTopRatedTvTile5, menuTopRatedTvTile6} = useMenuTopRatedTvPage()
    
    return (
       <div>
            <div className="slider-container">
            <span className="slider-label">Top Rated Tv</span>
                <div className="slider-sub-container">
                    {menuTopRatedTvTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedTvTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedTvTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedTvTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedTvTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedTvTile6}
                </div>  
            </div>
       </div>      
    )
}

export default MenuTopRatedTv