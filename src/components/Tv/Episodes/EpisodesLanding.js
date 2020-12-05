import React, {useContext} from 'react'
import {Context} from '../../../Context'
import TvEpisodesMain from '../Episodes/TvEpisodesMain'

function EpisodesLanding() {
    const {tvDetails}  = useContext(Context)
    const lastEpisode = tvDetails.last_episode_to_air
    const nextEpisode = tvDetails.next_episode_to_air
    const {lastEpisodeTile, nextEpisodeTile} = TvEpisodesMain()


    return (
        <div>
        <div className="details-last-next-episode-title">
    {lastEpisode && <span>Last Episode</span>} 
     {nextEpisode && <span>Next Episode</span>}
    </div>
    <div className="details-last-next-episode-container">
    {lastEpisodeTile}
    {nextEpisodeTile}
 </div> 
    </div>
    )
}

export default EpisodesLanding