import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/ItemPage.css'
import Movie from './Movie'
import Tv from './Tv'
import Person from './Person'


function ItemPage() {

    const {itemPageOpen, setItemBoxOpen, mediaType}  = useContext(Context)
    
    console.log(mediaType)



    function handleX() {
        setItemBoxOpen(prevState => !prevState)
    }

    return (
        <div>
          { itemPageOpen ? 
        <div className="item-page-container">
            <h1 onClick={handleX}>X</h1>

            { mediaType === 'tv' ?  <Tv /> : mediaType === 'movie' ? <Movie /> : mediaType === 'person' ? <Person /> : setItemBoxOpen(false) }
            
            
            
            

        </div> : <div></div>
        
        
        }
          
        </div>
        
        
    )
}

export default ItemPage