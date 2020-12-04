import React, {useContext} from 'react'
import {Context} from '../../Context'


function TvEpisodes() {

    const {tvDetails}  = useContext(Context)
    
    
    console.log(tvDetails.seasons && tvDetails.seasons.length)
    



    const tvEpisodesTile =  tvDetails.seasons && tvDetails.seasons.map((show) => 
        <div className="detail-season-number-box" key={show.id}>
            <span>{show.season_number === 0 ? "Specials" : show.season_number}</span>
        </div>
    
    )

    // const tvLastEpisodeTile = tvDetails.last_episode_to_air && tvDetails.last_episode_to_air.map((show) => 
    //     <div key={show.id}>
    //        <span>{show.name}</span>
             
    //     </div>
    // )
    
            
    
    
    
    

    return {tvEpisodesTile}

}

export default TvEpisodes