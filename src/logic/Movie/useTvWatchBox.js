import React, {useContext} from 'react'
import {Context} from '../../Context'




function useTvWatchBox() {

    const {posterPathSmall, tvProviders}  = useContext(Context)

    const tvProviderBuy = tvProviders.buy
    const tvProviderRent = tvProviders.rent
    const tvProviderFlatRate = tvProviders.flatrate

    // console.log(posterPathSmall, tvProviders, tvProviderBuy)

    const tvBuyTile = tvProviderBuy && tvProviderBuy.map((show) => 
        <div className="details-watch-box-provider-icon" key={show.provider_id}>
        <img src={`${posterPathSmall}${show.logo_path}`} alt="service icon"/>
        </div>
    
    
    ) 

    const tvRentTile = tvProviderRent && tvProviderRent.map((show) => 
        <div className="details-watch-box-provider-icon" key={show.provider_id}>
        <img src={`${posterPathSmall}${show.logo_path}`} alt="service icon"/>
        </div>
    ) 

    const tvStreamTile = tvProviderFlatRate && tvProviderFlatRate.map((show) => 
        <div className="details-watch-box-provider-icon" key={show.provider_id}>
        <img src={`${posterPathSmall}${show.logo_path}`} alt="service icon"/>
        </div>
    ) 



    return {tvBuyTile, tvRentTile, tvStreamTile}
}

export default useTvWatchBox