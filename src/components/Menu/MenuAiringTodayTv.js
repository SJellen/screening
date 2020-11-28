import React, {useContext} from 'react'
import useMenuAiringTodayPage from '../../logic/Menu/useMenuAiringTodayPage'
import {Context} from '../../Context'


function MenuAiringTodayTv() {
    
    const {menuAiringTodayTvTile1, menuAiringTodayTvTile2, menuAiringTodayTvTile3, menuAiringTodayTvTile4, menuAiringTodayTvTile5, menuAiringTodayTvTile6} = useMenuAiringTodayPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Shows Airing Today</span>
                <div className="slider-sub-container">
                    {menuAiringTodayTvTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuAiringTodayTvTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuAiringTodayTvTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuAiringTodayTvTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuAiringTodayTvTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuAiringTodayTvTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuAiringTodayTv