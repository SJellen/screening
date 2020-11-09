import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Search.css'
import useSearchResultsMovie from '../logic/useSearchResultsMovie'
import useSearchResultsTv from '../logic/useSearchResultsTv'
import useSearchResultsPerson from '../logic/useSearchResultsPerson'


function Search() {
    const {searchTerm, searchResultsTv, searchResultsMovie, searchResultsPerson} = useContext(Context)
    const {searchResultsMovieTile}  = useSearchResultsMovie()
    const {searchResultsTvTile}  = useSearchResultsTv()
    const {searchResultsPersonTile}  = useSearchResultsPerson()

    

   

     

    

    

    return (
        
        <div className="slider-container">
        
        <h1 className="results-title">Results for {searchTerm}</h1>
        
        {searchResultsMovie.length > 0 ? <span className="slider-label">Results: Movies</span> : ''}
        <div className="slider-sub-container">
            {searchResultsMovieTile}
        </div>
        {searchResultsTv.length > 0 ? <span className="slider-label">Results: TV</span> : ''}
        
        <div className="slider-sub-container">
            {searchResultsTvTile}
        </div>
        {searchResultsPerson.length > 0 ?  <span className="slider-label">Results: People</span> : ''}
       
        <div className="slider-sub-container">
            {searchResultsPersonTile}
        </div>
        </div>

     
    )
}


export default Search