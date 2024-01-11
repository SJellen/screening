import React, {useContext} from 'react'
import {Context} from '../../Context'
import useMovieCast from '../../logic/Movie/useMovieCast'
import useMovieCrew from '../../logic/Movie/useMovieCrew'
import MovieRecommendations from './MovieRecommendations'
import MovieSimilar from './MovieSimilar'
import MovieReview from './MovieReview'
import MovieVideo from './MovieVideo'
import MovieWatchBox from './MovieWatchBox'
import MovieDetails from './MovieDetails'
import StarIcon from '@mui/icons-material/Star';
import '../../style/Item.css'
import blankSquare from '../../assets/placeholder.jpg'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


function Movie() {

    const {movieDetails, dateSplitter, posterPathLarge, timeConverter, movieLoaded, movieProviders, watchListMovieIds, setWatchListMovie, watchListMovie}  = useContext(Context)
    const {castMovieTile} = useMovieCast()
    const {crewMovieTile} = useMovieCrew()
    const {movieRecommendTile} = MovieRecommendations()
    const {movieSimilarTile} = MovieSimilar()
    const {movieReviewTile} = MovieReview()
    const {movieVideoTile} = MovieVideo()
    const {movieProviderTile} = MovieWatchBox()
    const {movieDetailsTile} = MovieDetails()
    const releaseStatus = movieDetails.status === "Released" ? "Released" : 'Release date' 
    const {buy, rent, flatrate} = movieProviders

     function handleRibbonMoviePage(arr) {
        let selection = arr.id
        let selectionInfo = arr
        
        if (watchListMovieIds && watchListMovieIds.includes(selection)) {
            setWatchListMovie([...watchListMovie.filter(item => item.id !==  selection)])
        } else {
            setWatchListMovie([...watchListMovie, selectionInfo])
        } 
    } 
    

    return (
        <div className="details-container" >
            <div className="detail-top-container">
                <div className="poster-container">      
                    <img src={movieDetails.poster_path !== null ? `${posterPathLarge}${movieDetails.poster_path}` : blankSquare} alt="movie poster" className="details-poster" />
                </div> 
                <div className="detail-word-box">
                    <div className="details-top-word-box">
                    { watchListMovieIds && watchListMovieIds.includes(movieDetails.id) ?
                            <BookmarkIcon className="im im-bookmark im-bookmark-slider-page"  fontSize='x-large' onClick={() => handleRibbonMoviePage(movieDetails)} style={{color: "#E1B517"}} />
                            :
                            <BookmarkAddIcon className="im im-bookmark im-bookmark-slider-page" fontSize='x-large' onClick={() => handleRibbonMoviePage(movieDetails)} style={{color: ""}} />
                             }

                        <span className="details-title">{movieDetails.title}</span>
                        { movieDetails.vote_count !== 0 ? 
                            <div className="details-score-star-box">
                                <StarIcon className="details-star" fontSize='large' />
                            <span className="details-score">{movieDetails.vote_average?.toFixed(1)}</span>
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
            <div className="details-movie-details-container">
                {movieDetailsTile}

            { movieDetails.homepage && movieDetails.homepage.length > 0  ?   <span className="movie-detail-homepage-link-container"><a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer" className="movie-detail-homepage-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg></a></span> : ''}    
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