import React, {useContext} from 'react'
import {Context} from '../../Context'



function TvEpisodes() {

    const {tvDetails, posterPath}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air
    const nextEpisode = tvDetails.next_episode_to_air
    
    
    console.log(lastEpisode, tvDetails.seasons, nextEpisode)
    



    const tvEpisodesTile =  tvDetails.seasons && tvDetails.seasons.map((show) => 
        <div className="detail-season-number-box" key={show.id}>
            <span>{show.season_number === 0 ? "Specials" : show.season_number}</span>
        </div>
    
    )

    const lastEpisodeTile = ( lastEpisode && 
        <div className="details-episode-card" key={lastEpisode.id}>
        <div className="details-episode-card-title">
            <span>{lastEpisode.name}</span>
            <span>{lastEpisode.vote_average}</span>
        </div>
        <div className="details-episode-card-stat-box">
           <span>Season {lastEpisode.season_number}</span>
           <span>Episode {lastEpisode.episode_number}</span>
           <span>{lastEpisode.air_date && lastEpisode.air_date}</span> 
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
            <span>{nextEpisode.vote_average}</span>
        </div>
        <div className="details-episode-card-stat-box">
            <span>Season {nextEpisode.season_number}</span>
            <span>Episode {nextEpisode.episode_number}</span>
            <span>{nextEpisode.air_date && nextEpisode.air_date}</span>  
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

    // const tvLastEpisodeTile = lastEpisode && lastEpisode.map((show) => 
    //     <div key={show.id}>
    //        <span>{show.name}</span>
             
    //     </div>
    // )
    
            
    
    
    
    

    return {tvEpisodesTile, lastEpisodeTile, nextEpisodeTile}

}

export default TvEpisodes