import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Item.css'


function Search() {

    const {movieDetails, dateSplitter, posterPathLarge, timeConverter}  = useContext(Context)


     

    

    

    return (
        <div className="details-container">
         <h1> search</h1>
        </div>
    )
}


export default Search