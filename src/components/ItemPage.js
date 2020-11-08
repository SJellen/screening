import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/ItemPage.css'
import Movie from './Movie'
import Tv from './Tv'
import Person from './Person'
import Search from './Search'


function ItemPage() {

    const {itemPageOpen, setItemPageOpen, mediaType, searchResultsActive, fetchSearchResults, setMediaType, setSearchResultsActive}  = useContext(Context)
    
    



    function handleX() {
        setItemPageOpen(prevState => !prevState)
        setSearchResultsActive(false)
    }

    function handleActiveSearch() {
        setMediaType('search')
        setItemPageOpen(true)
        fetchSearchResults()
        
    }

    return (
        <div>
          { itemPageOpen ? 
        <div className="item-page-container">
           { !searchResultsActive  || mediaType === 'search' ? <i className="im im-x-mark item-page-close" onClick={handleX}></i> : <i className="im im-x-mark item-page-close" onClick={handleActiveSearch}></i> } 
            { mediaType === 'tv' ?  <Tv /> : 
              mediaType === 'movie' ? <Movie /> : 
              mediaType === 'person' ? <Person /> : 
              mediaType === 'search' ? <Search /> :

              setItemPageOpen(false) }
        </div> : <div></div>
        }   
        </div> 
    )
}

export default ItemPage