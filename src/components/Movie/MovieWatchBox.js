import React from 'react'
import useMovieWatchBox from '../../logic/Movie/useMovieWatchBox'


function MovieWatchBox() {

    const {movieBuyTile, movieRentTile, movieStreamTile} = useMovieWatchBox()
   
   
    const movieProviderTile = (
        <div className="details-watch-box-container">
           { movieStreamTile && movieStreamTile.length > 0 ?
           <div>
               <span className="details-watch-box-container-title">Stream</span>
           <div className="details-watch-box-provider-container">{movieStreamTile}</div>
           </div>
                : ''
           }

           { movieRentTile && movieRentTile.length > 0 ? 
           <div>
                <span className="details-watch-box-container-title">Rent</span>
           <div className="details-watch-box-provider-container">{movieRentTile}</div>

           </div> : ''
           }

           {  movieBuyTile && movieBuyTile.length > 0  ? 
           <div>
               <span className="details-watch-box-container-title">Buy</span>
           <div className="details-watch-box-provider-container">{movieBuyTile}</div>
           </div> : ''

           }
        </div>
    )
    
    return {movieProviderTile}
}

export default MovieWatchBox