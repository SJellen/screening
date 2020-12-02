import React, {useContext} from 'react'
import {Context} from '../../Context'




function useMovieWatchBox() {

    const {posterPathSmall, movieProviders}  = useContext(Context)

    const movieProviderBuy = movieProviders.buy
    const movieProviderRent = movieProviders.rent
    const movieProviderFlatRate = movieProviders.flatrate

    console.log(posterPathSmall, movieProviders, movieProviderBuy)

    const movieBuyTile =  movieProviderBuy && movieProviderBuy.map((movie, index) => 
        <div className="details-watch-box-provider-icon">
        <img src={`${posterPathSmall}${movie.logo_path}`} alt="service icon"/>
        </div>
    ) 

    const movieRentTile = movieProviderRent && movieProviderRent.map((movie, index) => 
        <div className="details-watch-box-provider-icon">
        <img src={`${posterPathSmall}${movie.logo_path}`} alt="service icon"/>
        </div>
    ) 

    const movieStreamTile = movieProviderFlatRate && movieProviderFlatRate.map((movie, index) => 
        <div className="details-watch-box-provider-icon">
        <img src={`${posterPathSmall}${movie.logo_path}`} alt="service icon"/>
        </div>
    ) 



    return {movieBuyTile, movieRentTile, movieStreamTile}
}

export default useMovieWatchBox