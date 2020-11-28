import React, {useContext} from 'react'
import useMenuPopularTvPage from '../../logic/Menu/useMenuPopularTvPage'
import {Context} from '../../Context'



function MenuPopularTv() {
    
    const {menuPopularTvPageTile1, menuPopularTvPageTile2, menuPopularTvPageTile3, menuPopularTvPageTile4, menuPopularTvPageTile5, menuPopularTvPageTile6} = useMenuPopularTvPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Most Popular Movies</span>
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
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuPopularTv