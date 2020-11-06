import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Movie.css'


function Movie() {

    const {movieDetails, posterPath}  = useContext(Context)

    console.log()

    return (
        <div className="details-container">
        <img src={`${posterPath}${movieDetails.poster_path}`} alt="movie poster" className="details-poster" />

        <div className="detail-word-box">
        <span className="details-title">{movieDetails.title}</span>
            <div className="details-top-word-box">

                
                <span>{movieDetails.release_date}</span>
                <span className="details-score"><i className="im im-star"></i>{movieDetails.vote_average}</span>
                <span className="details-runtime">Runtime {movieDetails.runtime} minutes</span>
                 <h3>{movieDetails.tagline}</h3>
            </div>
            
           
            <p>{movieDetails.overview}</p>
        </div>
           

        </div>
    )
}


export default Movie