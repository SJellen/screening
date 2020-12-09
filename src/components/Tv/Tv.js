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


function Tv() {

    const {tvDetails, posterPathLarge, timeConverter, getYear, tvLoaded, tvProviders}  = useContext(Context)
    const {castTvTile} = useTvCast()
    const {crewTvTile} = useTvCrew()
    const {tvRecommendTile} = TvRecommendations()
    const {tvSimilarTile} = TvSimilar()
    const {tvReviewTile} = TvReview()
    const {tvVideoTile} = TvVideo()
    const {tvProviderTile} = TvWatchBox()
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