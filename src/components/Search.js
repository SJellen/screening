import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Search.css'


function Search() {

    const {searchResults}  = useContext(Context)

    // console.log(searchResults)


    

    let tvSearchArr = [], movieSearchArr = [], personSearchArr = []
        for (let i = 0; i < searchResults.length; i++) {
            
            if (searchResults[i].media_type === 'tv') {
                tvSearchArr.push(searchResults[i])
            } else if (searchResults[i].media_type === 'movie') {
                tvSearchArr.push(searchResults[i])
            } else if (searchResults[i].media_type === 'person') {
                personSearchArr.push(searchResults[i])
            }
            
                
        }
    

    console.log(tvSearchArr, movieSearchArr, personSearchArr)


     

    

    

    return (
        <div className="details-container">
        <div className="search-results-container">
                <h1> search</h1>
        </div>
         
        </div>
    )
}


export default Search