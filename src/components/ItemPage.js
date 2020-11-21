import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/ItemPage.css'
import Movie from '../components/Movie/Movie'
import Tv from '../components/Tv/Tv'
import Person from '../components/Person/Person'
import Search from './Search'
import {useHistory} from 'react-router-dom'


function ItemPage() {

    const {itemPageOpen, setItemPageOpen, mediaType, searchResultsActive, fetchSearchResults, setMediaType, setSearchResultsActive, setMovieLoaded, setTvLoaded}  = useContext(Context)
    
    const history = useHistory()
    const handleHistory = () => {
    history.push("/home")
   }



    function handleX() {
        setItemPageOpen(prevState => !prevState)
        setSearchResultsActive(false)
        setMovieLoaded(false) 
        setTvLoaded(false)
        handleHistory()
        
    }

    function handleActiveSearch() {
        setMediaType('search')
        setItemPageOpen(true)
        fetchSearchResults()
        setMovieLoaded(false) 
        setTvLoaded(false)
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