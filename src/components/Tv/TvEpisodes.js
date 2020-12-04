import React, {useContext} from 'react'
import {Context} from '../../Context'



function TvEpisodes() {

    const {tvDetails, posterPath, dateSplitter}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air
    const nextEpisode = tvDetails.next_episode_to_air
    

    const tvEpisodesTile =  tvDetails.seasons && tvDetails.seasons.map((show) => 
        <div className="detail-season-number-box" key={show.id}>
            <span>{show.season_number === 0 ? "Specials" : show.season_number}</span>
        </div>
    
    )

    const lastEpisodeTile = ( lastEpisode && 
        <div className="details-episode-card" key={lastEpisode.id}>
        <div className="details-episode-card-title">
            <span>{lastEpisode.name}</span>
            <span><i className="im im-star"></i>{lastEpisode.vote_average}</span>
        </div>
        <div className="details-episode-card-stat-box">
           <span>Season {lastEpisode.season_number}</span>
           <span>Episode {lastEpisode.episode_number}</span>
           <span>{lastEpisode.air_date && dateSplitter(lastEpisode.air_date)}</span> 
        </div>
        
        <div className="details-episode-card-img-container">
          { lastEpisode.still_path !== null ?
            <img  src={ `${posterPath}${lastEpisode.still_path}`} alt="poster" className="details-episode-card-img" /> : ''
        }  
        </div>
        
        <div className="details-episode-card-overview-container">
            <span>{lastEpisode.overview}</span>
        </div>
        
        </div>
    )

    const nextEpisodeTile = ( nextEpisode && 
        <div className="details-episode-card" key={nextEpisode.id}>
        <div className="details-episode-card-title">
            <span>{nextEpisode.name}</span>
            <span><i className="im im-star"></i>{nextEpisode.vote_average}</span>
        </div>
        <div className="details-episode-card-stat-box">
            <span>Season {nextEpisode.season_number}</span>
            <span>Episode {nextEpisode.episode_number}</span>
            <span>{nextEpisode.air_date && dateSplitter(nextEpisode.air_date)}</span>  
        </div>
        
        <div className="details-episode-card-img-container">
           { nextEpisode.still_path !== null ?
            <img  src={ `${posterPath}${nextEpisode.still_path}`} alt="poster" className="details-episode-card-img" /> : ''
        } 
        </div>
        
        <div className="details-episode-card-overview-container">
            <span>{nextEpisode.overview}</span>
        </div>
        
        </div>
    )

   

    return {tvEpisodesTile, lastEpisodeTile, nextEpisodeTile}

}

export default TvEpisodes