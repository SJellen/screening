import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Search.css'
import useSearchResultsMovie from '../logic/useSearchResultsMovie'
import useSearchResultsTv from '../logic/useSearchResultsTv'
import useSearchResultsPerson from '../logic/useSearchResultsPerson'


function Search() {
    const {searchTerm} = useContext(Context)
    const {searchResultsMovieTile}  = useSearchResultsMovie()
    const {searchResultsTvTile}  = useSearchResultsTv()
    const {searchResultsPersonTile}  = useSearchResultsPerson()

    

   

     

    

    

    return (
        
        <div className="slider-container">
        
        <h1>Results for {searchTerm}</h1>
        <span className="slider-label">Results: Movies</span>
        <div className="slider-sub-container">
            {searchResultsMovieTile}
        </div>
        <span className="slider-label">Results: TV</span>
        <div className="slider-sub-container">
            {searchResultsTvTile}
        </div>

        <span className="slider-label">Results: People</span>
        <div className="slider-sub-container">
            {searchResultsPersonTile}
        </div>
        </div>

     
    )
}


export default Search