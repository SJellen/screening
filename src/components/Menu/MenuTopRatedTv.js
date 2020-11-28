import React, {useContext} from 'react'
import useMenuTopRatedTvPage from '../../logic/Menu/useMenuTopRatedTvPage'
import {Context} from '../../Context'


function MenuTopRatedTv() {
    
    const {menuTopRatedTvTile1, menuTopRatedTvTile2, menuTopRatedTvTile3, menuTopRatedTvTile4, menuTopRatedTvTile5, menuTopRatedTvTile6} = useMenuTopRatedTvPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Top Rated Movies</span>
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
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuTopRatedTv