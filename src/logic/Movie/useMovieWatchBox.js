import React, {useContext} from 'react'
import {Context} from '../../Context'


function useMovieWatchBox() {
    const {posterPathSmall, movieProviders}  = useContext(Context)
    const {buy, rent, flatrate} = movieProviders
    
    const movieBuyTile =  buy && buy.map((movie) => 
        <div className="details-watch-box-provider-icon" key={movie.provider_id}>
            <img src={`${posterPathSmall}${movie.logo_path}`} alt="service icon"/>
        </div>
    ) 

    const movieRentTile = rent && rent.map((movie) => 
        <div className="details-watch-box-provider-icon" key={movie.provider_id}>
            <img src={`${posterPathSmall}${movie.logo_path}`} alt="service icon"/>
        </div>
    ) 

    const movieStreamTile = flatrate && flatrate.map((movie) => 
        <div className="details-watch-box-provider-icon" key={movie.provider_id}>
            <img src={`${posterPathSmall}${movie.logo_path}`} alt="service icon"/>
        </div>
    ) 

    return {movieBuyTile, movieRentTile, movieStreamTile}
}

export default useMovieWatchBox