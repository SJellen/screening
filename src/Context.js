import React, {useState, useEffect} from 'react'
import useApi from './services/useApi'
import useApiPerson from './services/useApiPerson'
import useApiMovie from './services/useApiMovie'
import useApiTv from './services/useApiTv'
import useMenuMovieApi from './services/useMenuMovieApi'



const Context = React.createContext()




function ContextProvider({children}) {

    const {searchResultsPerson,  tvTrending, searchResults,  fetchSearchResults, setSearchTerm, searchResultsMovie, searchResultsTv,  searchTerm,    movieTrending,} = useApi()

    const {personTrending,popularPerson,setPersonId,fetchPersonDetails, personDetails,fetchPersonCredits, personCredits,personImages, setPersonImages, fetchPersonImages, personId,  setLastPersonId} = useApiPerson()

    const {upcomingMovies, topRatedMovies, popularMovies, nowPlaying,setMovieRecommendationID, setMovieId,movieId,fetchMovieDetails, movieDetails,fetchMovieCredits,movieCredits, setMovieCredits,movieRecommendationArr,fetchMovieRecommend,fetchMovieSimilar, movieSimilarArr,movieRecommendationID, fetchMovieReviews, movieReviews, fetchMovieVideos, movieVideos, movieLoaded, setMovieLoaded,  setLastMovieId } = useApiMovie()

    const {topRatedTv, popularTv, airingToday,   tvRecommendationID, setTvRecommendationID,   setTvId,   tvId,   fetchTvDetails,  tvDetails, fetchTvCredits, tvCredits,  setTvCredits,  tvRecommendationArr, fetchTvRecommend,  fetchTvSimilar, tvSimilarArr, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos, tvLoaded, setTvLoaded,  setLastTvId} = useApiTv()

    const {handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, handleMenuUpcomingClick, menuUpcomingMoviesPage1, menuUpcomingMoviesPage2, menuUpcomingMoviesPage3,menuUpcomingMoviesPage4,menuUpcomingMoviesPage5,menuUpcomingMoviesPage6, handleMenuNowPlayingClick, menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3,menuNowPlayingMoviesPage4,menuNowPlayingMoviesPage5,menuNowPlayingMoviesPage6  } = useMenuMovieApi()

    const posterPath = 'https://image.tmdb.org/t/p/w200/'
    const posterPathLarge = 'https://image.tmdb.org/t/p/w780/'
    const videoPath = 'https://www.youtube.com/embed/'

    const [itemPageOpen, setItemPageOpen] = useState(false)
    const [mediaType, setMediaType] = useState(null)
    
    const [watchListTv, setWatchListTv] = useState([])
    const [watchListMovie, setWatchListMovie] = useState([])
   

    

    
    
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



    function handleMovieClick(e, arr) {
        let selection = arr[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        fetchMovieRecommend(selection)
        fetchMovieSimilar(selection)
        fetchMovieReviews(selection)
        fetchMovieVideos(selection)
        window.scrollTo(0, 0)
    }

    function handlePersonClick(e, arr) {
        let selection = arr[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        window.scrollTo(0, 0)
    }

    function handleTvClick(e, arr) {
        let selection = arr[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setTvCredits([])
        fetchTvCredits(selection)
        fetchTvSimilar(selection)
        fetchTvRecommend(selection)
        fetchTvReviews(selection)
        fetchTvVideos(selection)
        window.scrollTo(0, 0)
    }


  


    function handleLogoClick() {
        window.scrollTo(0, 0)
    }

    

    function handleRibbonTv(e, arr) {
        // let selection = arr[e].id
        let selectionInfo = arr[e]
        if (watchListTv.includes(selectionInfo)) {
            setWatchListTv([...watchListTv.filter(item => item !== selectionInfo)])
        } else {
            setWatchListTv([...watchListTv, selectionInfo])
        } 
    }

    function handleRibbonMovie(e, arr) {
        // let selection = arr[e].id
        let selectionInfo = arr[e]
        if (watchListMovie.includes(selectionInfo)) {
            setWatchListMovie([...watchListMovie.filter(item => item !== selectionInfo)])
        } else {
            setWatchListMovie([...watchListMovie, selectionInfo])
        } 
    }

    

 


    useEffect(() => {
        const path = window.location.pathname
        const splitPath = path.split('/')
        const cleanPath = splitPath.filter(item => item !== '')
        const pathMediaType = cleanPath[0], pathMediaId = cleanPath[1]
        console.log(cleanPath, pathMediaType, pathMediaId)
        console.log(pathMediaType)
        if (pathMediaType === "moviePage") {
            setMediaType('movie')
            setMovieId(pathMediaId)
            fetchMovieDetails(pathMediaId)
            setMovieCredits([])
            fetchMovieCredits(pathMediaId)
            fetchMovieRecommend(pathMediaId)
            fetchMovieSimilar(pathMediaId)
            fetchMovieReviews(pathMediaId)
            fetchMovieVideos(pathMediaId)
            window.scrollTo(0, 0)
        } else if (pathMediaType === "tvPage") {
            setMediaType('tv')
            setTvId(pathMediaId)
            fetchTvDetails(pathMediaId)
            setTvCredits([])
            fetchTvCredits(pathMediaId)
            fetchTvSimilar(pathMediaId)
            fetchTvRecommend(pathMediaId)
            fetchTvReviews(pathMediaId)
            fetchTvVideos(pathMediaId)
            window.scrollTo(0, 0)
        } else if (pathMediaType === "personPage") {
            setMediaType('person')
            setPersonId(pathMediaId)
            fetchPersonDetails(pathMediaId)
            fetchPersonCredits(pathMediaId)
            fetchPersonImages(pathMediaId)
            window.scrollTo(0, 0)
        }

    }, [])

   

  


    return (
        <Context.Provider value={{movieTrending, personTrending, tvTrending, posterPath, popularTv, popularMovies, popularPerson, topRatedTv, topRatedMovies, airingToday, upcomingMovies, nowPlaying, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID, itemPageOpen, setItemPageOpen, setMovieId, setTvId, setPersonId, movieId, tvId, personId, fetchMovieDetails, movieDetails, fetchTvDetails, fetchPersonDetails, personDetails, tvDetails, mediaType, setMediaType, dateSplitter, posterPathLarge, timeConverter, getYear, fetchSearchResults, searchResults, setSearchTerm, searchResultsMovie, searchResultsTv, searchResultsPerson, searchTerm, fetchPersonCredits, personCredits, fetchMovieCredits, fetchTvCredits, tvCredits, movieCredits, setMovieCredits, setTvCredits, personImages, setPersonImages, fetchPersonImages, movieRecommendationArr, tvRecommendationArr, fetchTvRecommend, fetchMovieRecommend, fetchMovieSimilar, movieSimilarArr, fetchTvSimilar, tvSimilarArr,truncateBio, fetchMovieReviews, movieReviews, truncateReview, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos, videoPath, fetchMovieVideos, movieVideos, movieLoaded, tvLoaded, setMovieLoaded, setTvLoaded, handleMovieClick, handlePersonClick, handleTvClick, setLastTvId, setLastMovieId, setLastPersonId, handleLogoClick, watchListTv, watchListMovie, handleRibbonTv, handleRibbonMovie, handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, handleMenuUpcomingClick, menuUpcomingMoviesPage1, menuUpcomingMoviesPage2, menuUpcomingMoviesPage3,menuUpcomingMoviesPage4,menuUpcomingMoviesPage5,menuUpcomingMoviesPage6, handleMenuNowPlayingClick, menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3,menuNowPlayingMoviesPage4,menuNowPlayingMoviesPage5,menuNowPlayingMoviesPage6 }}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}