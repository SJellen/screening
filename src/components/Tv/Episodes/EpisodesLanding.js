import React, {useContext} from 'react'
import {Context} from '../../../Context'
import TvLastEpisodeTile from './TvLastEpisodeTile'
import TvNextEpisodeTile from './TvNextEpisodeTile'

function EpisodesLanding() {
    const {tvDetails}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air
    const nextEpisode = tvDetails.next_episode_to_air
    const {lastEpisodeTile} = TvLastEpisodeTile()
    const {nextEpisodeTile} = TvNextEpisodeTile()


    return (
        <div>
         <div className="details-last-next-episode-title">
    {lastEpisode && <span>Last Episode</span>} 
    </div>
    <div className="details-last-next-episode-container">
    {lastEpisodeTile}
    </div> 
    <div className="details-last-next-episode-title">
     {nextEpisode && <span>Next Episode</span>}
    </div>
    <div className="details-last-next-episode-container">
        {nextEpisodeTile}
    </div>
    </div>
    )
}

export default EpisodesLanding