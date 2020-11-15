import React, {useContext} from 'react'
import {Context} from '../Context'
import useMovieCast from '../logic/useMovieCast'
import useMovieCrew from '../logic/useMovieCrew'
import MovieRecommendations from './MovieRecommendations'
import MovieSimilar from './MovieSimilar'
import '../style/Item.css'


function Movie() {

    const {movieDetails, dateSplitter, posterPathLarge, timeConverter}  = useContext(Context)
    const {castMovieTile} = useMovieCast()
    const {crewMovieTile} = useMovieCrew()
    const {movieRecommendTile} = MovieRecommendations()
    const {movieSimilarTile} = MovieSimilar()

    const releaseStatus = movieDetails.status === "Released" ? "Released" : 'Release date' 

    

    

    return (
        <div className="details-container" >

        <div className="detail-top-container">
        <div className="poster-container">
            { movieDetails.poster_path &&
            <img src={`${posterPathLarge}${movieDetails.poster_path}`} alt="movie poster" className="details-poster" />
            }
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
                <span className="details-runtime">Runtime {timeConverter(movieDetails.runtime)}</span>
                 
            </div>
            <div className="details-tagline">
                <h3>{movieDetails.tagline}</h3>
            </div>
            
           
            <p className="details-overview">{movieDetails.overview}</p>
        </div>
        </div>
            

        <div className="details-slider-container">
        <span className="details-slider-title">Cast</span>
           <div className="details-cast-slider">
            {castMovieTile}
        </div> 
        </div>

        { crewMovieTile.length > 0 ? 
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
               

        
           

        </div>
    )
}


export default Movie