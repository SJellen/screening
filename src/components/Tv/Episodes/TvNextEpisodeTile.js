import React, {useContext} from 'react'
import {Context} from '../../../Context'
import episodePlaceholder from '../../../assets/episodePlaceholder.jpg'
import {Link} from 'react-router-dom'



function TvNextEpisodeTile() {

    const {tvDetails, posterPath, dateSplitter, handleSeasonClick, tvSeason, setTvSeason}  = useContext(Context)
    const nextEpisode = tvDetails.next_episode_to_air


    const nextEpisodeTile = ( nextEpisode && 
        <div className="details-episode-card-season" key={nextEpisode.id}>
   <div className="details-episode-card-title">
       <span>{nextEpisode.name}</span>
       <span>
       
       <i className="im im-star"></i>{nextEpisode.vote_average}</span>
   </div>
   <div className="details-episode-season-img-overview-container">
   <div className="details-episode-card-img-season-container">
               <img  src={nextEpisode.still_path !== null ?  `${posterPath}${nextEpisode.still_path}` : episodePlaceholder} alt="poster" className="details-episode-card-img-season" />
           </div>
   <div className="details-episode-card-overview-season-container">
       <span>{nextEpisode.overview}</span>
   </div>
   </div>
   <div className="details-episode-card-stat-box">
       <span>Season {nextEpisode.season_number}</span>
       <span>Episode {nextEpisode.episode_number}</span>
       <span>{nextEpisode.air_date && dateSplitter(nextEpisode.air_date)}</span>  
   </div>
   </div>
)






    return {nextEpisodeTile}
}

export default TvNextEpisodeTile