import React, {useState} from 'react'
import useApi from './services/useApi'
import useApiPerson from './services/useApiPerson'
import useApiMovie from './services/useApiMovie'
import useApiTv from './services/useApiTv'

const Context = React.createContext()




function ContextProvider({children}) {

    const {searchResultsPerson,  tvTrending, searchResults,  fetchSearchResults, setSearchTerm, searchResultsMovie, searchResultsTv,  searchTerm,    movieTrending,} = useApi()

    const {personTrending,popularPerson,setPersonId,fetchPersonDetails, personDetails,fetchPersonCredits, personCredits,personImages, setPersonImages, fetchPersonImages, personId} = useApiPerson()

    const {upcomingMovies, topRatedMovies, popularMovies, nowPlaying,setMovieRecommendationID, setMovieId,movieId,fetchMovieDetails, movieDetails,fetchMovieCredits,movieCredits, setMovieCredits,movieRecommendationArr,fetchMovieRecommend,fetchMovieSimilar, movieSimilarArr,movieRecommendationID, fetchMovieReviews, movieReviews} = useApiMovie()

    const {topRatedTv, popularTv, airingToday,   tvRecommendationID, setTvRecommendationID,   setTvId,   tvId,   fetchTvDetails,  tvDetails, fetchTvCredits, tvCredits,  setTvCredits,  tvRecommendationArr, fetchTvRecommend,  fetchTvSimilar, tvSimilarArr, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos} = useApiTv()

    const posterPath = 'https://image.tmdb.org/t/p/w200/'
    const posterPathLarge = 'https://image.tmdb.org/t/p/w780/'
    const videoPath = 'https://www.youtube.com/embed/'

    const [itemPageOpen, setItemPageOpen] = useState(false)
    const [mediaType, setMediaType] = useState(null)
    const [searchResultsActive, setSearchResultsActive] = useState(false)

    

    
    
    function dateSplitter(x) {
        
        if (x !== undefined && x !== null) {
            const stringSplit = x.split('-')
            let year = stringSplit[0], month = stringSplit[1], day = stringSplit[2], newMonth;

            if (month === '01' ) {
                newMonth = 'January' 
            } else if (month === '02') {
                newMonth = 'February'
            } else if (month === '03') {
                newMonth = 'March'
            } else if (month === '04') {
                newMonth = 'April'
            } else if (month === '05') {
                newMonth = 'May'
            } else if (month === '06') {
                newMonth = 'June'
            } else if (month === '07') {
                newMonth = 'July'
            } else if (month === '08') {
                newMonth = 'August'
            } else if (month === '09') {
                newMonth = 'September'
            } else if (month === '10') {
                newMonth = 'October'
            } else if (month === '11') {
                newMonth = 'November'
            } else {
                newMonth = 'December' 
            }

            return `${newMonth} ${day}, ${year}`
  
        }
        
    }

    function timeConverter(num) {
        let minutes = num % 60
        let hours = (num - minutes) / 60
        return `${hours > 0 ? hours : ''}${hours > 0 ? "h" : ''} ${minutes}min`

    }

    function getYear(n) {
        if (n !== undefined) {
            let numSplit = n.split('-') 
            return numSplit[0]
        }
        
    }

    function truncateBio(str) {
        if (str !== undefined) {
            return (str.length > 400) ? str.substr(0, 400-1) + '...'   : str
        }
    }

    function truncateReview(str) {
        if (str !== undefined) {
            return (str.length > 300) ? str.substr(0, 300-1) + '...'   : str
        }
    }

    


    

   console.log(tvVideos)
        
    

    
    
    
    
    
 


    return (
        <Context.Provider value={{movieTrending, personTrending, tvTrending, posterPath, popularTv, popularMovies, popularPerson, topRatedTv, topRatedMovies, airingToday, upcomingMovies, nowPlaying, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID, itemPageOpen, setItemPageOpen, setMovieId, setTvId, setPersonId, movieId, tvId, personId, fetchMovieDetails, movieDetails, fetchTvDetails, fetchPersonDetails, personDetails, tvDetails, mediaType, setMediaType, dateSplitter, posterPathLarge, timeConverter, getYear, fetchSearchResults, searchResults, setSearchTerm, searchResultsMovie, searchResultsTv, searchResultsPerson, searchTerm, searchResultsActive, setSearchResultsActive, fetchPersonCredits, personCredits, fetchMovieCredits, fetchTvCredits, tvCredits, movieCredits, setMovieCredits, setTvCredits, personImages, setPersonImages, fetchPersonImages, movieRecommendationArr, tvRecommendationArr, fetchTvRecommend, fetchMovieRecommend, fetchMovieSimilar, movieSimilarArr, fetchTvSimilar, tvSimilarArr,truncateBio, fetchMovieReviews, movieReviews, truncateReview, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos, videoPath}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}