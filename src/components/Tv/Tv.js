import React, {useContext} from 'react'
import {Context} from '../../Context'
import useTvCast from '../../logic/Tv/useTvCast'
import useTvCrew from '../../logic/Tv/useTvCrew'
import TvRecommendations from './TvRecommendations'
import TvSimilar from './TvSimilar'
import TvReview from './TvReview'
import TvVideo from './TvVideo'
import TvWatchBox from './TvWatchBox'
import TvEpisodes from './TvEpisodes'
import '../../style/Item.css'
import blankSquare from '../../assets/placeholder.jpg'
import TvDetails from './TvDetails'


function Tv() {

    const {tvDetails, posterPathLarge, timeConverter, getYear, tvLoaded, tvProviders}  = useContext(Context)
    const {castTvTile} = useTvCast()
    const {crewTvTile} = useTvCrew()
    const {tvRecommendTile} = TvRecommendations()
    const {tvSimilarTile} = TvSimilar()
    const {tvReviewTile} = TvReview()
    const {tvVideoTile} = TvVideo()
    const {tvProviderTile} = TvWatchBox()
    const {tvDetailsTile} = TvDetails()
    const releaseStatus = tvDetails.status === "Ended" ? getYear(tvDetails.last_air_date) : 'Current' 
    const {buy, rent, flatrate} = tvProviders
   
    

    
    


    return (
        <div className="details-container">

        <div className="detail-top-container">
        <div className="poster-container">
        
            <img src={tvDetails.poster_path !== null ? `${posterPathLarge}${tvDetails.poster_path}` : blankSquare} alt="movie poster" className="details-poster" />
        
        </div>
        

        <div className="detail-word-box">
            <div className="details-top-word-box">
                <span className="details-title">{tvDetails.name}</span>
                { tvDetails.vote_count !== 0 ?   <div className="details-score-star-box">
                        <i className="im im-star details-star"></i>
                    <span className="details-score">{tvDetails.vote_average}</span>
                    </div> : ''}
            </div>
            
            
            <div className="details-mid-word-box">
                <span className="details-release">{`TV Series (${getYear(tvDetails.first_air_date)} - ${releaseStatus})`}</span>
                <span className="details-runtime">Runtime {timeConverter( tvDetails.episode_run_time && tvDetails.episode_run_time[0])}</span>
               
            </div>
            <div className="details-midbottom-word-box">
               
                <span className="details-seasons">{`Number of seasons ${tvDetails.number_of_seasons}`}</span>
                <span className="details-episodes">{`Total episodes ${tvDetails.number_of_episodes}`}</span>
            </div>
            <div className="details-tagline">
                <h3>{tvDetails.tagline}</h3>
            </div>
            
           
            <p className="details-overview">{tvDetails.overview}</p>
        </div>
        </div>

        <div className="details-movie-details-container">
            {tvDetailsTile}

         { tvDetails.homepage && tvDetails.homepage.length > 0  ?   <span className="movie-detail-homepage-link-container"><a href={tvDetails.homepage} target="_blank" rel="noopener noreferrer" className="movie-detail-homepage-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg></a></span> : ''}
            
        </div>

        <span className="details-slider-title-episodes">Episodes</span> 
        <TvEpisodes />

        <div className="details-slider-video-watch-container">
                
        { buy === undefined && rent === undefined && flatrate === undefined ? '' :
                    <div className="details-watch-box">  {tvProviderTile}  </div> 
                }
              
            

                { tvLoaded && tvVideoTile && tvVideoTile.length > 0 ?
                    <div>
                <span className="details-slider-title-video">Videos</span> 
                <div className="details-video-container" >
                
                            {tvVideoTile}
                        
                </div>
                </div> : '' 

                } 


        </div>
          


       
            { castTvTile && castTvTile.length > 0 ?
            <div className="details-slider-container">
            <span className="details-slider-title">Cast</span>
            <div className="details-cast-slider">
                {castTvTile}
            </div> 
            </div>  : '' }
        

        
       
            
           { crewTvTile.length > 0 ?  
           <div className="details-slider-container">
           <span className="details-slider-title">Crew</span> 
           <div className="details-cast-slider">
                        {crewTvTile}
                    </div> 
                    </div>
           : '' }


       {  tvRecommendTile.length > 0 ?  <div className="details-slider-container">
            <span className="details-slider-title">Recommendations</span>
            <div className="details-cast-slider">
                    {tvRecommendTile}
            </div> 
            </div> : ''}

        { tvSimilarTile.length > 0 ? <div className="details-slider-container">
            <span className="details-slider-title">Similar Shows</span>
            <div className="details-cast-slider">
                    {tvSimilarTile}
            </div> 
            </div> : ''  }  

            { tvReviewTile.length > 0 ? 
        <div>
        <span className="details-slider-title">Reviews</span>
           <div className="details-review-container">
                    {tvReviewTile}
                
        </div>
        </div> : '' 
        } 

       
                    

        
        

        
        
        
           

        </div>
    )
}


export default Tv