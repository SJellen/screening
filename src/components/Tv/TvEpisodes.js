import React, {useContext} from 'react'
import {Context} from '../../Context'
import TvEpisodesMain from '../Tv/Episodes/TvEpisodesMain'
import EpisodesLanding from '../Tv/Episodes/EpisodesLanding'
import TvEpisodesSeason from '../Tv/Episodes/TvEpisodesSeason'
import {Route, Switch} from 'react-router-dom'


function TvEpisodes() {
    const {tvDetails, tvSeason}  = useContext(Context)
    const {tvEpisodesTile} = TvEpisodesMain()

   
   return (
      
          <div className="details-episode-container">
    <div className="details-season-number-slider-container">
        <div className="details-season-number-container">
            {tvEpisodesTile}
            <span className="details-episode-season-title">{tvDetails.seasons && tvDetails.seasons.length > 1 ? "Seasons" : "Season"}</span>
        </div>
    </div>
    <div className="details-season-switch">
    <Switch>
        <Route exact path={`/tvPage/${tvDetails.id}/`} component={EpisodesLanding} />
        <Route path={`/tvPage/${tvDetails.id}/${tvSeason}`} component={TvEpisodesSeason} />
    </Switch>


    </div>  
    </div>
      
    
   )

}

export default TvEpisodes