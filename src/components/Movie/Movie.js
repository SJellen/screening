import React, {useContext} from 'react'
import {Context} from '../../Context'
import useMovieCast from '../../logic/Movie/useMovieCast'
import useMovieCrew from '../../logic/Movie/useMovieCrew'
import MovieRecommendations from './MovieRecommendations'
import MovieSimilar from './MovieSimilar'
import MovieReview from './MovieReview'
import MovieVideo from './MovieVideo'
import MovieWatchBox from './MovieWatchBox'
import '../../style/Item.css'
import blankSquare from '../../assets/placeholder.jpg'


function Movie() {

    

    const {movieDetails, dateSplitter, posterPathLarge, timeConverter, movieLoaded, movieProviders}  = useContext(Context)
    const {castMovieTile} = useMovieCast()
    const {crewMovieTile} = useMovieCrew()
    const {movieRecommendTile} = MovieRecommendations()
    const {movieSimilarTile} = MovieSimilar()
    const {movieReviewTile} = MovieReview()
    const {movieVideoTile} = MovieVideo()
    const {movieProviderTile} = MovieWatchBox()
    const releaseStatus = movieDetails.status === "Released" ? "Released" : 'Release date' 
    const {buy, rent, flatrate} = movieProviders
    
    
    
    

    return (
        <div className="details-container" >

        <div className="detail-top-container">
        <div className="poster-container">
        
            
               
            <img src={movieDetails.poster_path !== null ? `${posterPathLarge}${movieDetails.poster_path}` : blankSquare} alt="movie poster" className="details-poster" />
               
            
        </div>
            
          
        
        

        <div className="detail-word-box">
        
            <div className="details-top-word-box">
                <span className="details-title">{movieDetails.title}</span>
                { movieDetails.vote_count !== 0 ? 
                    <div className="details-score-star-box">
                        <i className="im im-star details-star"></i>
                    <span className="details-score">{movieDetails.vote_average}</span>
                    </div> : ''
                }
                    
            </div>
            
            
            <div className="details-mid-word-box">
                <span className="details-release">{releaseStatus} {dateSplitter(movieDetails.release_date)}</span>
                { movieDetails.runtime > 0 ? 
                    <span className="details-runtime">Runtime {timeConverter(movieDetails.runtime)}</span> : ''
                }
                
                 
            </div>
            <div className="details-tagline">
                <h3>{movieDetails.tagline}</h3>
            </div>
            
           
            <p className="details-overview">{movieDetails.overview}</p>
        </div>
        </div>


        <div className="details-slider-video-watch-container">
                { buy === undefined && rent === undefined && flatrate === undefined ? '' :
                    <div className="details-watch-box">  {movieProviderTile}  </div> 
                }
                
             



                { movieLoaded && movieVideoTile && movieVideoTile.length > 0 ?
                    <div>
                <span className="details-slider-title-video">Videos</span>
                <div className="details-video-container" >
                            {movieVideoTile}
                        
                </div>
                </div> : '' 

                }  



        </div>
          
              

                {  castMovieTile && castMovieTile.length > 0 ?
                <div className="details-slider-container">
                        <span className="details-slider-title">Cast</span>
                        <div className="details-cast-slider">
                            {castMovieTile}
                        </div> 
                        </div> : ''

                }
                
                

        

        { crewMovieTile && crewMovieTile.length > 0 ? 
        <div className="details-slider-container">
                <span className="details-slider-title">Crew</span>
                <div className="details-cast-slider">
                    {crewMovieTile}
                </div> 
                </div>
                : '' }


       { movieRecommendTile.length > 0 ? <div className="details-slider-container">
            <span className="details-slider-title">Recommendations</span>
            <div className="details-cast-slider">
                    {movieRecommendTile}
            </div> 
            </div> : ''}

        { movieSimilarTile.length > 0 ? <div className="details-slider-container">
            <span className="details-slider-title">Similar Movies</span>
            <div className="details-cast-slider">
                    {movieSimilarTile}
            </div> 
            </div> : ''  } 
               
        
        { movieReviewTile.length > 0 ? 
        <div>
        <span className="details-slider-title">Reviews</span>
           <div className="details-review-container">
                    {movieReviewTile}
                
        </div>
        </div> : '' 
        }
                
        
           

        </div>
    )
}


export default Movie