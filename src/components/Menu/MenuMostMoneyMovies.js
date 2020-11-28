import React, {useContext} from 'react'
import useMenuMostMoneyMoviePage from '../../logic/Menu/useMenuMostMoneyMoviePage'
import {Context} from '../../Context'


function MenuMostMoneyMovies() {
    
    const {menuMostMoneyMoviesPageTile1, menuMostMoneyMoviesPageTile2, menuMostMoneyMoviesPageTile3, menuMostMoneyMoviesPageTile4, menuMostMoneyMoviesPageTile5, menuMostMoneyMoviesPageTile6} = useMenuMostMoneyMoviePage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Movies Playing Now</span>
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMostMoneyMoviesPageTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuMostMoneyMovies