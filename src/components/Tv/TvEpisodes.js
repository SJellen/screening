import React, {useContext} from 'react'
import {Context} from '../../Context'


function TvEpisodes() {

    const {tvDetails}  = useContext(Context)
    
    
    console.log(tvDetails.seasons)
    


    // const tvVideoTile = tvVideos && tvVideos.map((show, index) => 
        
    // <div className="video-card" key={show.id}> 
    // <iframe width="560" height="315" src={`${videoPath}${show.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={show.name}></iframe>
    // </div>
    // )

    const tvEpisodesTile =  tvDetails.seasons && tvDetails.seasons.map((show) => 
        <div className="detail-season-number-box">
            <span>{show.season_number}</span>
        </div>
    
    )
    
            
    
    
    
    

    return {tvEpisodesTile}

}

export default TvEpisodes