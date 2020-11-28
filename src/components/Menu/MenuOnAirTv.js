import React, {useContext} from 'react'
import useMenuOnAirTvPage from '../../logic/Menu/useMenuOnAirTvPage'
import {Context} from '../../Context'


function MenuOnAirTv() {
    
    const {menuOnAirTvTvTile1, menuOnAirTvTvTile2, menuOnAirTvTvTile3, menuOnAirTvTvTile4, menuOnAirTvTvTile5, menuOnAirTvTvTile6} = useMenuOnAirTvPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Shows On Now</span>
                <div className="slider-sub-container">
                    {menuOnAirTvTvTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTvTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTvTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTvTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTvTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuOnAirTvTvTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuOnAirTv