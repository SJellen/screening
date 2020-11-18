import React, {useContext} from 'react'
import {Context} from '../../Context'



function PersonImages() {

    const {personImages} = useContext(Context)
    const {profiles} = personImages
    const imagePath = 'https://image.tmdb.org/t/p/w185/'
 

    const personImageTile = profiles && profiles.map((image, index) => 

        <div className="slider-image" key={index}>
        <img src={image.file_path !== null ? `${imagePath}${image.file_path}` : ''} alt="person" />
        </div>
    )


    return {personImageTile}
}

export default PersonImages