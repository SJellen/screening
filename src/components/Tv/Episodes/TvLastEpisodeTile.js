import React, {useContext} from 'react'
import {Context} from '../../../Context'
import episodePlaceholder from '../../../assets/episodePlaceholder.jpg'


function TvLastEpisodeTile() {

    const {tvDetails, posterPath, dateSplitter, ratingTruncate}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air

    const lastEpisodeTile = ( lastEpisode && 
        <div className="details-episode-card-season" key={lastEpisode.id} >
            <div className="details-episode-card-title">
                <span>{lastEpisode.name}</span>
                {ratingTruncate(lastEpisode)}
            </div>
            <div className="details-episode-season-img-overview-container">
                <div className="details-episode-card-img-season-container">
                    <img  src={lastEpisode.still_path !== null ?  `${posterPath}${lastEpisode.still_path}` : episodePlaceholder} alt="poster" className="details-episode-card-img-season" />
                </div>
                <div className="details-episode-card-overview-season-container">
                    <span>{lastEpisode.overview}</span>
                </div>
            </div>
            <div className="details-episode-card-stat-box">
                <span>Season {lastEpisode.season_number}</span>
                <span>Episode {lastEpisode.episode_number}</span>
                <span>{lastEpisode.air_date && dateSplitter(lastEpisode.air_date)}</span>  
            </div>
   </div>
)

    return {lastEpisodeTile}
}

export default TvLastEpisodeTile