import React from 'react'
import useMenuOnAirTvPage from '../../logic/Menu/useMenuOnAirTvPage'

function MenuOnAirTv() {
    
    const {menuOnAirTvTile1, menuOnAirTvTile2, menuOnAirTvTile3, menuOnAirTvTile4, menuOnAirTvTile5, menuOnAirTvTile6} = useMenuOnAirTvPage()
    
    return (
       <div>
            <div className="slider-container">
                <span className="slider-label">Shows On Now</span>
                <div className="slider-sub-container">
                    {menuOnAirTvTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                {menuOnAirTvTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTile6}
                </div>  
            </div>
       </div>       
    )
}

export default MenuOnAirTv