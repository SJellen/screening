import React, {useContext} from 'react'
import {Context} from '../Context'



function TvRecommendations() {

    const {personImages} = useContext(Context)
    const {profiles} = personImages
    const imagePath = 'https://image.tmdb.org/t/p/w185/'
 

    const TvRecommendationsTile = profiles && profiles.map((image, index) => 

        <div className="slider-image" key={image.index}>
        <img src={image.file_path !== null ? `${imagePath}${image.file_path}` : ''} alt="person" />
        </div>
    )


    return {}
}

export default TvRecommendations