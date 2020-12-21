import React from 'react'
import useMenuPopularPersonPage from '../../logic/Menu/useMenuPopularPersonPage'

function MenuPopularPerson() {
    
    const {menuPopularPersonTile1, menuPopularPersonTile2, menuPopularPersonTile3, menuPopularPersonTile4, menuPopularPersonTile5, menuPopularPersonTile6} = useMenuPopularPersonPage()
    
    return (
       <div>
            <div className="slider-container">
                <span className="slider-label">Popular People</span>
                <div className="slider-sub-container">
                    {menuPopularPersonTile1}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPersonTile2}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPersonTile3}
                </div>
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPersonTile4}
                </div>   
            </div>
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPersonTile5}
                </div>  
            </div>     
            <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPersonTile6}
                </div>  
            </div>
       </div>      
    )
}

export default MenuPopularPerson