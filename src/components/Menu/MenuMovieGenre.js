import React, {useContext} from 'react'
import useMenuMovieGenre from '../../logic/Menu/useMenuMovieGenre'
import {Context} from '../../Context'


function MenuMovieGenre() {
    
    const {menuMovieGenreTile1, menuMovieGenreTile2, menuMovieGenreTile3, menuMovieGenreTile4, menuMovieGenreTile5, menuMovieGenreTile6, menuMovieGenreTile7, menuMovieGenreTile8, menuMovieGenreTile9, menuMovieGenreTile10} = useMenuMovieGenre()

    const {movieGenreToString} = useContext(Context)
    
    
    

    return (
        <div>
      
        
       <div>
        <div className="slider-container">
                <span className="slider-label">{movieGenreToString()} Movies</span>
                <div className="slider-sub-container">
                    {menuMovieGenreTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile6}
                </div>  
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile7}
                </div>  
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile8}
                </div>  
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile9}
                </div>  
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile10}
                </div>  
                </div>
       </div>    
       
        
      
  


        </div>
        
        
        
    )
}

export default MenuMovieGenre