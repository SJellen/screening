import React, {useContext} from 'react'
import {Context} from '../../Context'


function MovieWatchBox() {

    const {movieProviders}  = useContext(Context)


    console.log(movieProviders)

    const movieProviderTile = (
        <div className="details-watch-box-container">
           <span className="details-watch-box-container-title">Stream</span>
           <div className="details-watch-box-provider-container"></div>
           <span className="details-watch-box-container-title">Rent</span>
           <div className="details-watch-box-provider-container"></div>
           <span className="details-watch-box-container-title">Buy</span>
           <div className="details-watch-box-provider-container"></div>
        </div>
    )

    return {movieProviderTile}
}

export default MovieWatchBox