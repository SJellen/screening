import React, {useEffect, useState} from 'react'
import useMenuMovieGenre from '../../logic/Menu/useMenuMovieGenre'



function MenuMovieGenre() {
    
    const {menuMovieGenreTile1, menuMovieGenreTile2, menuMovieGenreTile3, menuMovieGenreTile4, menuMovieGenreTile5, menuMovieGenreTile6, menuMovieGenreTile7, menuMovieGenreTile8, menuMovieGenreTile9, menuMovieGenreTile10} = useMenuMovieGenre()
    const [genrePath, setGenrePath] = useState()

    useEffect(() => {
        const path = window.location.pathname
        const splitPath = path.split('/')
        const cleanPath = splitPath.filter(item => item !== '')
        const pathGenre = cleanPath[2]
        setGenrePath(pathGenre)
    }, [])
    
    
    

    return (
        <div>
      
        
       <div>

            <span className="slider-label-genre">{genrePath} Movies</span>

                 {menuMovieGenreTile1 && menuMovieGenreTile1.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile1}
                </div>
                </div> : ''}

                { menuMovieGenreTile2 && menuMovieGenreTile2.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile2}
                </div>
                </div> : '' }


               { menuMovieGenreTile3 && menuMovieGenreTile3.length > 0 ?  <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile3}
                </div>
                </div> : '' }

                { menuMovieGenreTile4 && menuMovieGenreTile4.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile4}
                </div>   
                </div> : '' }
                

               { menuMovieGenreTile5 && menuMovieGenreTile5.length > 0 ?  <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile5}
                </div>  
                </div>  : ''  }   
            


                { menuMovieGenreTile6 && menuMovieGenreTile6.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile6}
                </div>  
                </div> : '' }

                { menuMovieGenreTile7 && menuMovieGenreTile7.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile7}
                </div>  
                </div> : '' }

                { menuMovieGenreTile8 && menuMovieGenreTile8.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile8}
                </div>  
                </div> : '' }

                { menuMovieGenreTile9 && menuMovieGenreTile9.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile9}
                </div>  
                </div> : ''}

                { menuMovieGenreTile10 && menuMovieGenreTile10.length > 0 ? <div className="slider-container">
                <div className="slider-sub-container">
                    {menuMovieGenreTile10}
                </div>  
                </div> : ''}
       </div>    
       
        </div>
        
        
    )
}

export default MenuMovieGenre