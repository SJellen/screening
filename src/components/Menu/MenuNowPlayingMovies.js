import React, {useContext} from 'react'
import useMenuNowPlayingMoviePage from '../../logic/Menu/useMenuNowPlayingMoviePage'
import {Context} from '../../Context'


function MenuNowPlayingMovies() {
    
    const {menuNowPlayingMoviesPageTile1, menuNowPlayingMoviesPageTile2, menuNowPlayingMoviesPageTile3, menuNowPlayingMoviesPageTile4, menuNowPlayingMoviesPageTile5, menuNowPlayingMoviesPageTile6} = useMenuNowPlayingMoviePage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Movies Playing Now</span>
                <div className="slider-sub-container">
                    {menuNowPlayingMoviesPageTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuNowPlayingMoviesPageTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuNowPlayingMoviesPageTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuNowPlayingMoviesPageTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuNowPlayingMoviesPageTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuNowPlayingMoviesPageTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuNowPlayingMovies