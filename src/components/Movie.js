import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Item.css'


function Movie() {

    const {movieDetails, dateSplitter, posterPathLarge, timeConverter}  = useContext(Context)


    const releaseStatus = movieDetails.status === "Released" ? "Released" : 'Release date' 

    

    

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
                <span className="details-release">{releaseStatus} {dateSplitter(movieDetails.release_date)}</span>
                <span className="details-runtime">Runtime {timeConverter(movieDetails.runtime)}</span>
                 
            </div>
            <div className="details-tagline">
                <h3>{movieDetails.tagline}</h3>
            </div>
            
           
            <p className="details-overview">{movieDetails.overview}</p>
        </div>
           

        </div>
    )
}


export default Movie