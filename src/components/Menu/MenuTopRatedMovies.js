import React, {useContext} from 'react'
import useMenuTopRatedPage from '../../logic/Menu/useMenuTopRatedPage'
import {Context} from '../../Context'


function MenuTopRatedMovies() {
    
    const {menuTopRatedPageTile1, menuTopRatedPageTile2, menuTopRatedPageTile3, menuTopRatedPageTile4,menuTopRatedPageTile5, menuTopRatedPageTile6} = useMenuTopRatedPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Most Popular Movies</span>
                <div className="slider-sub-container">
                    {menuTopRatedPageTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedPageTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedPageTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedPageTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedPageTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTopRatedPageTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuTopRatedMovies