import React, {useContext} from 'react'
import useMenuTrendingTvPage from '../../logic/Menu/useMenuTrendingTvPage'
import {Context} from '../../Context'


function MenuTrendingTv() {
    
    const {menuTrendingTvTile1, menuTrendingTvTile2, menuTrendingTvTile3, menuTrendingTvTile4, menuTrendingTvTile5, menuTrendingTvTile6} = useMenuTrendingTvPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Trending Tv Shows</span>
                <div className="slider-sub-container">
                    {menuTrendingTvTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingTvTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuTrendingTv