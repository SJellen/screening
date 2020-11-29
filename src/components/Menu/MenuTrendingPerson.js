import React from 'react'
import useMenuTrendingPersonPage from '../../logic/Menu/useMenuTrendingPersonPage'



function MenuTrendingPerson() {
    
    const {menuTrendingPersonTile1, menuTrendingPersonTile2, menuTrendingPersonTile3, menuTrendingPersonTile4, menuTrendingPersonTile5, menuTrendingPersonTile6} = useMenuTrendingPersonPage()
    
    
    

    return (
        <div>
      
       <div>
        <div className="slider-container">
                <span className="slider-label">Trending People</span>
                <div className="slider-sub-container">
                    {menuTrendingPersonTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingPersonTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingPersonTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingPersonTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingPersonTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuTrendingPersonTile6}
                </div>  
                </div>
       </div>    
       
        
      
     


        </div>
        
        
        
    )
}

export default MenuTrendingPerson