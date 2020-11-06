import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Movie.css'


function Movie() {

    const {movieDetails, posterPath, dateSplitter, posterPathLarge}  = useContext(Context)


    const releaseStatus = movieDetails.status === "Released" ? "Released" : '' 

    

    return (
        <div className="details-container">
        <img src={`${posterPathLarge}${movieDetails.poster_path}`} alt="movie poster" className="details-poster" />

        <div className="detail-word-box">
            <div className="details-top-word-box">
                <span className="details-title">{movieDetails.title}</span>
                    <div className="details-score-star-box">
                        <i className="im im-star details-star"></i>
                    <span className="details-score">{movieDetails.vote_average}</span>
                    </div>
            </div>
            
            
            <div className="details-mid-word-box">
                <span className="details-release">Released: {dateSplitter(movieDetails.release_date)}</span>
                <span className="details-runtime">Runtime {movieDetails.runtime} minutes</span>
                 
            </div>
            <div>
                <h3>{movieDetails.tagline}</h3>
            </div>
            
           
            <p>{movieDetails.overview}</p>
        </div>
           

        </div>
    )
}


export default Movie