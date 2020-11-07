import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/ItemPage.css'
import Movie from './Movie'
import Tv from './Tv'
import Person from './Person'
import Search from './Search'


function ItemPage() {

    const {itemPageOpen, setItemBoxOpen, mediaType}  = useContext(Context)
    
    



    function handleX() {
        setItemBoxOpen(prevState => !prevState)
    }

    return (
        <div>
          { itemPageOpen ? 
        <div className="item-page-container">
            <i className="im im-x-mark item-page-close" onClick={handleX}></i>
            { mediaType === 'tv' ?  <Tv /> : 
              mediaType === 'movie' ? <Movie /> : 
              mediaType === 'person' ? <Person /> : 
              mediaType === 'search' ? <Search /> :

              setItemBoxOpen(false) }
        </div> : <div></div>
        }   
        </div> 
    )
}

export default ItemPage