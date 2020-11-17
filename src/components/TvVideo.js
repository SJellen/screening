import React, {useContext} from 'react'
import {Context} from '../Context'


function TvVideo() {

    const {tvVideos, videoPath}  = useContext(Context)

    const tvVideoTile = tvVideos && tvVideos.map((show, index) => 
        
    <div className="slider-card" key={show.id}> 
    <iframe width="560" height="315" src={`${videoPath}${show.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={show.name}></iframe>
    </div>
    )

    return {tvVideoTile}

}

export default TvVideo