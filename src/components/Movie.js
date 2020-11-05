import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Movie.css'


function Movie() {

    const {movieDetails}  = useContext(Context)

    return (
        <div>
            <h1>Movie</h1>
        </div>
    )
}


export default Movie