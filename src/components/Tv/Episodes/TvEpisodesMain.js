import React, {useContext} from 'react'
import {Context} from '../../../Context'
import episodePlaceholder from '../../../assets/episodePlaceholder.jpg'
import {Link} from 'react-router-dom'


function TvEpisodesMain() {

    const {tvDetails, posterPath, dateSplitter, handleSeasonClick, tvSeason, setTvSeason, setTempSeason, tempSeason}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air
    const nextEpisode = tvDetails.next_episode_to_air

    // console.log(tvSeason, tempSeason)
    

    const tvEpisodesTile =  tvDetails.seasons && tvDetails.seasons.map((show) => 
        <div className="detail-season-number-box" key={show.id}>
           <Link to={`/tvPage/${tvDetails.id}/${tvSeason}`} style={{ textDecoration: 'none', color: "white"  }}>
               <span onClick={(e) =>   handleSeasonClick(show.season_number)}
                   onMouseDown={(e) => setTvSeason(show.season_number)}
                className="detail-season-number">{show.season_number === 0 ? "Specials" : show.season_number}</span>
           </Link> 
        </div>
    
    )

    const lastEpisodeTile = ( lastEpisode && 
        <div className="details-episode-card-season" key={lastEpisode.id}>
   <div className="details-episode-card-title">
       <span>{lastEpisode.name}</span>
       <span>
       <i className="im im-star"></i>{lastEpisode.vote_average}</span>
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

       
    

   

    return {tvEpisodesTile, lastEpisodeTile, nextEpisodeTile}

}

export default TvEpisodesMain