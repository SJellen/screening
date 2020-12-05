import React, {useContext} from 'react'
import {Context} from '../../../Context'
import TvEpisodesMain from '../Episodes/TvEpisodesMain'
import episodePlaceholder from '../../../assets/episodePlaceholder.jpg'

function TvEpisodesSeason() {
    const {tvDetails, tvSeasonArr, posterPath, dateSplitter}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air
    const nextEpisode = tvDetails.next_episode_to_air
    const {lastEpisodeTile, nextEpisodeTile} = TvEpisodesMain()

    const tvSeasonEpisodeTile = tvSeasonArr && tvSeasonArr.map((show) => 
    <div className="details-episode-card-season-container">
    <div className="details-episode-card-season" key={show.id}>
    <div className="details-episode-card-title">
            <span>{show.name}</span>
            <span><i className="im im-star"></i>{show.vote_average}</span>
        </div>
        <div className="details-episode-season-img-overview-container">
           <div className="details-episode-card-img-season-container">
            <img  src={show.still_path !== null ? `${posterPath}${show.still_path}` : episodePlaceholder} alt="poster" className="details-episode-card-img-season" /> 
        </div>
        <div className="details-episode-card-overview-season-container">
            <span>{show.overview}</span>
        </div> 
        </div>
        

        <div className="details-episode-card-stat-box">
            <span>Season {show.season_number}</span>
            <span>Episode {show.episode_number}</span>
            <span>{show.air_date && dateSplitter(show.air_date)}</span>  
        </div>
       

    </div>
    </div>
    )



    return (
        <div>
             {tvSeasonEpisodeTile}
        </div>
    
    )
}

export default TvEpisodesSeason