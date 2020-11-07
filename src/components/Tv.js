import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Item.css'


function Tv() {

    const {tvDetails, posterPathLarge, timeConverter, getYear}  = useContext(Context)


    const releaseStatus = tvDetails.status === "Ended" ? getYear(tvDetails.last_air_date) : 'Current' 



    return (
        <div className="details-container">
        <img src={`${posterPathLarge}${tvDetails.poster_path}`} alt="movie poster" className="details-poster" />

        <div className="detail-word-box">
            <div className="details-top-word-box">
                <span className="details-title">{tvDetails.name}</span>
                    <div className="details-score-star-box">
                        <i className="im im-star details-star"></i>
                    <span className="details-score">{tvDetails.vote_average}</span>
                    </div>
            </div>
            
            
            <div className="details-mid-word-box">
                <span className="details-release">{`TV Series (${getYear(tvDetails.first_air_date)} - ${releaseStatus})`}</span>
                <span className="details-runtime">Runtime {timeConverter( tvDetails.episode_run_time && tvDetails.episode_run_time[0])}</span>
               
            </div>
            <div className="details-midbottom-word-box">
               
                <span className="details-seasons">{`Number of seasons ${tvDetails.number_of_seasons}`}</span>
                <span className="details-episodes">{`Total episodes ${tvDetails.number_of_episodes}`}</span>
            </div>
            <div className="details-tagline">
                <h3>{tvDetails.tagline}</h3>
            </div>
            
           
            <p className="details-overview">{tvDetails.overview}</p>
        </div>
           

        </div>
    )
}


export default Tv