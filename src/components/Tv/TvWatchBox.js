import React from 'react'
import useTvWatchBox from '../../logic/Movie/useTvWatchBox'


function TvWatchBox() {

    const {tvBuyTile, tvRentTile, tvStreamTile} = useTvWatchBox()


    const tvProviderTile = (
        <div className="details-watch-box-container">
        { tvStreamTile && tvStreamTile.length > 0 ? 
        <div>
         <span className="details-watch-box-container-title">Stream</span>
           <div className="details-watch-box-provider-container">{tvStreamTile}</div>   
        </div> : ''
        }
        { tvRentTile && tvRentTile.length > 0 ? 
        <div>
        <span className="details-watch-box-container-title">Rent</span>
           <div className="details-watch-box-provider-container">{tvRentTile}</div>
        </div> : ''
        }
        { tvBuyTile && tvBuyTile.length > 0 ?
        <div>
           <span className="details-watch-box-container-title">Buy</span>
           <div className="details-watch-box-provider-container">{tvBuyTile}</div> 
        </div> : ''
        }  
        </div>
    )

    return {tvProviderTile}
}

export default TvWatchBox