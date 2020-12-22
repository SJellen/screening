import React, {useContext} from 'react'
import {Context} from '../../Context'


function MovieVideo() {

    const {movieVideos, videoPath}  = useContext(Context)
    const movieVideosSlice = movieVideos.slice(0,4)

    const movieVideoTile = movieVideosSlice && movieVideosSlice.map((movie, index) =>   
    <div className="video-card" key={movie.id}> 
    <iframe width="560" height="315" src={`${videoPath}${movie.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={movie.name}></iframe>
    </div>
    )
    return {movieVideoTile}
}

export default MovieVideo