import React, {useState, useEffect} from 'react'
import useApi from './services/useApi'
import useApiPerson from './services/useApiPerson'
import useApiMovie from './services/useApiMovie'
import useApiTv from './services/useApiTv'
import useMenuMovieApi from './services/useMenuMovieApi'
import useMenuTvApi from './services/useMenuTvApi'
import useMenuPersonApi from './services/useMenuPersonApi'
import blankSquare from './assets/placeholder.jpg'
import {Link} from 'react-router-dom'
import useApiMovieGenre from './services/useApiMovieGenre'
import useApiTvGenre from './services/useApiTvGenre'


const Context = React.createContext()


function ContextProvider({children}) {

    const {genreMovies1, genreMovies2, genreMovies3, genreMovies4, genreMovies5, genreMovies6, genreMovies7, genreMovies8, genreMovies9, genreMovies10, fetchGenreMovies, handleMovieGenreClick, genre, handleMovieGenreHover, movieGenreToString} = useApiMovieGenre()

    const {genreTv1, genreTv2, genreTv3, genreTv4, genreTv5, genreTv6, genreTv7, genreTv8, genreTv9, genreTv10, fetchGenreTv, handleTvGenreClick, genreTv, setGenreTv, handleTvGenreHover, tvGenreToString} = useApiTvGenre()

    const {searchResultsPerson,   searchResults,  fetchSearchResults, setSearchTerm, searchResultsMovie, searchResultsTv,  searchTerm,  } = useApi()

    const {personTrending,popularPerson,setPersonId,fetchPersonDetails, personDetails,fetchPersonCredits, personCredits,personImages, setPersonImages, fetchPersonImages, personId,  setLastPersonId, setPersonDetails, setPersonCredits, personMovieCast,personTvCast, fetchPersonMovieCredits , fetchPersonTvCredits } = useApiPerson()

    const {upcomingMovies, topRatedMovies, popularMovies, nowPlaying,setMovieRecommendationID, setMovieId,movieId,fetchMovieDetails, movieDetails,fetchMovieCredits,movieCredits, setMovieCredits,movieRecommendationArr,fetchMovieRecommend,fetchMovieSimilar, movieSimilarArr,movieRecommendationID, fetchMovieReviews, movieReviews, fetchMovieVideos, movieVideos, movieLoaded, setMovieLoaded,  setLastMovieId, fetchTrendingMovie, movieTrending, fetchMovieProviders, movieProviders, setMovieDetails, setMovieRecommendationArr, setMovieSimilarArr, setMovieReviews, setMovieVideos, setMovieProviders} = useApiMovie()

    const {topRatedTv, popularTv, airingToday,   tvRecommendationID, setTvRecommendationID,   setTvId,   tvId,   fetchTvDetails,  tvDetails, fetchTvCredits, tvCredits,  setTvCredits,  tvRecommendationArr, fetchTvRecommend,  fetchTvSimilar, tvSimilarArr, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos, tvLoaded, setTvLoaded,  setLastTvId, tvTrending, fetchTrendingTv, fetchTvProviders, tvProviders, setTvDetails, setTvSimilarArr, setTvRecommendationArr, setTvReviews, setTvVideos, setTvProviders, tvSeason, setTvSeason, fetchTvSeasonArr, tvSeasonArr, setTvSeasonArr } = useApiTv()

    const {handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, handleMenuUpcomingClick, menuUpcomingMoviesPage1, menuUpcomingMoviesPage2, menuUpcomingMoviesPage3,menuUpcomingMoviesPage4,menuUpcomingMoviesPage5,menuUpcomingMoviesPage6, handleMenuNowPlayingClick, menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3,menuNowPlayingMoviesPage4,menuNowPlayingMoviesPage5,menuNowPlayingMoviesPage6, handleMenuMostMoneyClick, menuMostMoneyMovies1, menuMostMoneyMovies2, menuMostMoneyMovies3, menuMostMoneyMovies4, menuMostMoneyMovies5, menuMostMoneyMovies6, handleMenuTrendingMoviesClick, menuTrendingMoviesPage1, menuTrendingMoviesPage2, menuTrendingMoviesPage3, menuTrendingMoviesPage4, menuTrendingMoviesPage5, menuTrendingMoviesPage6  } = useMenuMovieApi()

    const {handleMenuPopularTvClick, menuPopularTvPage1, menuPopularTvPage2,menuPopularTvPage3,menuPopularTvPage4, menuPopularTvPage5, menuPopularTvPage6, handleMenuTopRatedTvClick, menuTopRatedTvPage1, menuTopRatedTvPage2, menuTopRatedTvPage3, menuTopRatedTvPage4, menuTopRatedTvPage5, menuTopRatedTvPage6, handleMenuOnAirTvClick, menuOnAirTvPage1, menuOnAirTvPage2, menuOnAirTvPage3, menuOnAirTvPage4, menuOnAirTvPage5, menuOnAirTvPage6, handleMenuAiringTodayTvClick, menuAiringTodayTvPage1, menuAiringTodayTvPage2, menuAiringTodayTvPage3, menuAiringTodayTvPage4, menuAiringTodayTvPage5, menuAiringTodayTvPage6, handleMenuTrendingTvClick, menuTrendingTvPage1, menuTrendingTvPage2, menuTrendingTvPage3, menuTrendingTvPage4, menuTrendingTvPage5, menuTrendingTvPage6 } = useMenuTvApi()

    const {handleMenuTrendingPersonClick, menuTrendingPersonPage1, menuTrendingPersonPage2, menuTrendingPersonPage3, menuTrendingPersonPage4, menuTrendingPersonPage5, menuTrendingPersonPage6, handleMenuPopularPersonClick, menuPopularPersonPage1, menuPopularPersonPage2, menuPopularPersonPage3, menuPopularPersonPage4, menuPopularPersonPage5, menuPopularPersonPage6} = useMenuPersonApi()


    const posterPath = 'https://image.tmdb.org/t/p/w200/'
    const posterPathLarge = 'https://image.tmdb.org/t/p/w780/'
    const posterPathSmall = 'https://image.tmdb.org/t/p/w45'
    const videoPath = 'https://www.youtube.com/embed/'

    const [mediaType, setMediaType] = useState(null)
    const [watchListTv, setWatchListTv] = useState([])
    const [watchListMovie, setWatchListMovie] = useState([])
    const [tempSeason, setTempSeason] = useState([])
    const [watchListMovieIds, setWatchListMovieIds] = useState([])
    const [watchListTvIds, setWatchListTvIds] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [signInMenu, setSignInMenu] = useState(false)
    // const [username, setUserName] = useState()
    // const [password, setPassword] = useState()
    // const [email, setEmail] = useState()
    // const [users, setUser] = useState({})
    const [toggleSignInForm, setToggleSignInForm] = useState(true)


    
    
    
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

    function ratingTruncate(arr) {
        return arr.vote_average === null || arr.vote_average === undefined || arr.vote_average === 0 ? <span className="slider-score"></span> : <span className="slider-score"><i className="im im-star"></i>{arr.vote_average}</span>
      }

    function dollarsWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    function handleMovieClick(e, arr) {
        let selection = arr[e].id
        setMediaType('movie')
        setMovieId(selection)
        setMovieDetails([])
        setMovieCredits([])
        setMovieRecommendationArr([])
        setMovieSimilarArr([])
        setMovieReviews([])
        setMovieVideos([])
        setMovieProviders([])
        fetchMovieDetails(selection)
        fetchMovieCredits(selection)
        fetchMovieRecommend(selection)
        fetchMovieSimilar(selection)
        fetchMovieReviews(selection)
        fetchMovieVideos(selection)
        fetchMovieProviders(selection)
        window.scrollTo(0, 0)
    }

    function handlePersonClick(e, arr) {
        let selection = arr[e].id
        setMediaType('person')
        setPersonId(selection)
        setPersonDetails([]) 
        setPersonCredits([]) 
        setPersonImages([])
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        fetchPersonMovieCredits(selection)
        fetchPersonTvCredits(selection)
        window.scrollTo(0, 0)
    }

    function handleTvClick(e, arr) {
        let selection = arr[e].id
        setMediaType('tv')
        setTvId(selection)
        setTvCredits([])
        setTvDetails([]) 
        setTvSimilarArr([]) 
        setTvRecommendationArr([]) 
        setTvReviews([]) 
        setTvVideos([]) 
        setTvProviders([])
        fetchTvDetails(selection)
        fetchTvCredits(selection)
        fetchTvSimilar(selection)
        fetchTvRecommend(selection)
        fetchTvReviews(selection)
        fetchTvVideos(selection)
        fetchTvProviders(selection)
        window.scrollTo(0, 0)
    }

    function handleSeasonClick(arr) {
        let selection = arr
        setTvSeasonArr([])
        fetchTvSeasonArr(selection) 
    }

    function handleLogoClick() {
        window.scrollTo(0, 0)
    }

    function handleRibbonTv(e, arr) {
        let selection = arr[e].id
        let selectionInfo = arr[e]
        if (watchListTvIds.includes(selection)) {
            setWatchListTv([...watchListTv.filter(item => item !== selectionInfo)])
        } else {
            setWatchListTv([...watchListTv, selectionInfo])
        } 
    }

    function handleRibbonMovie(e, arr) {
        let selection = arr[e].id
        let selectionInfo = arr[e]
        if (watchListMovieIds.includes(selection)) {
            setWatchListMovie([...watchListMovie.filter(item => item !== selectionInfo)])
        } else {
            setWatchListMovie([...watchListMovie, selectionInfo])
        } 
    }

    function tvTileMaker(arr) {
        return arr.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <span className="watchlist-ribbon">
        { watchListTvIds.includes(show.id) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, arr)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, arr)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, arr)} className="slider-card-image" /></Link>
        {ratingTruncate(show)}
        <span className="slider-title">{show.name}</span>
        </div>
        )    
    }

    function movieTileMaker(arr) {
        return arr.map((movie, index) => 
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovieIds.includes(movie.id) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, arr)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, arr)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() =>  handleMovieClick(index, arr)} className="slider-card-image" /></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        </div>
        )  
    }

    function personTileMaker(arr) {
        return arr.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, arr)} className="slider-card-image" /></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )
    }

    function ribbonUpdater() {
        let movieIdArr = [], tvIdArr = []
        for (let i = 0; i < watchListMovie.length; i++) {
            movieIdArr.push(watchListMovie[i].id)
        }
        for (let i = 0; i < watchListTv.length; i++) {
            tvIdArr.push(watchListTv[i].id)
        }
        setWatchListMovieIds(movieIdArr)
        setWatchListTvIds(tvIdArr)
    }


    useEffect(() => {
       ribbonUpdater()
        const path = window.location.pathname
        const splitPath = path.split('/')
        const cleanPath = splitPath.filter(item => item !== '')
        const pathMediaType = cleanPath[0], pathMediaId = parseInt(cleanPath[1])
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
            fetchMovieProviders(pathMediaId)
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
            fetchTvProviders(pathMediaId)
            
            window.scrollTo(0, 0)
        } else if (pathMediaType === "personPage") {
            setMediaType('person')
            setPersonId(pathMediaId)
            fetchPersonDetails(pathMediaId)
            fetchPersonCredits(pathMediaId)
            fetchPersonImages(pathMediaId)
            fetchPersonMovieCredits(pathMediaId)
            fetchPersonTvCredits(pathMediaId)
            window.scrollTo(0, 0)
        } else if (pathMediaType === "signIn") {
            setSignInMenu(true)
        }

           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchListMovie, watchListTv, genre])


    return (
        <Context.Provider value={{movieTrending, personTrending, posterPath, popularTv, popularMovies, popularPerson, topRatedTv, topRatedMovies, airingToday, upcomingMovies, nowPlaying, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID, setMovieId, setTvId, setPersonId, movieId, tvId, personId, fetchMovieDetails, movieDetails, fetchTvDetails, fetchPersonDetails, personDetails, tvDetails, mediaType, setMediaType, dateSplitter, posterPathLarge, timeConverter, getYear, fetchSearchResults, searchResults, setSearchTerm, searchResultsMovie, searchResultsTv, searchResultsPerson, searchTerm, fetchPersonCredits, personCredits, fetchMovieCredits, fetchTvCredits, tvCredits, movieCredits, setMovieCredits, setTvCredits, personImages, setPersonImages, fetchPersonImages, movieRecommendationArr, tvRecommendationArr, fetchTvRecommend, fetchMovieRecommend, fetchMovieSimilar, movieSimilarArr, fetchTvSimilar, tvSimilarArr,truncateBio, fetchMovieReviews, movieReviews, truncateReview, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos, videoPath, fetchMovieVideos, movieVideos, movieLoaded, tvLoaded, setMovieLoaded, setTvLoaded, handleMovieClick, handlePersonClick, handleTvClick, setLastTvId, setLastMovieId, setLastPersonId, handleLogoClick, watchListTv, watchListMovie, handleRibbonTv, handleRibbonMovie, handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, handleMenuUpcomingClick, menuUpcomingMoviesPage1, menuUpcomingMoviesPage2, menuUpcomingMoviesPage3,menuUpcomingMoviesPage4,menuUpcomingMoviesPage5,menuUpcomingMoviesPage6, handleMenuNowPlayingClick, menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3,menuNowPlayingMoviesPage4,menuNowPlayingMoviesPage5,menuNowPlayingMoviesPage6, handleMenuMostMoneyClick, menuMostMoneyMovies1, menuMostMoneyMovies2, menuMostMoneyMovies3, menuMostMoneyMovies4, menuMostMoneyMovies5, menuMostMoneyMovies6, handleMenuPopularTvClick, menuPopularTvPage1, menuPopularTvPage2,menuPopularTvPage3,menuPopularTvPage4, menuPopularTvPage5, menuPopularTvPage6, handleMenuTopRatedTvClick, menuTopRatedTvPage1, menuTopRatedTvPage2, menuTopRatedTvPage3, menuTopRatedTvPage4, menuTopRatedTvPage5, menuTopRatedTvPage6, handleMenuOnAirTvClick, menuOnAirTvPage1, menuOnAirTvPage2, menuOnAirTvPage3, menuOnAirTvPage4, menuOnAirTvPage5, menuOnAirTvPage6, handleMenuAiringTodayTvClick, menuAiringTodayTvPage1, menuAiringTodayTvPage2, menuAiringTodayTvPage3, menuAiringTodayTvPage4, menuAiringTodayTvPage5, menuAiringTodayTvPage6, tvTrending, fetchTrendingTv, fetchTrendingMovie, handleMenuTrendingMoviesClick, menuTrendingMoviesPage1, menuTrendingMoviesPage2, menuTrendingMoviesPage3, menuTrendingMoviesPage4, menuTrendingMoviesPage5, menuTrendingMoviesPage6, handleMenuTrendingPersonClick, menuTrendingTvPage1, menuTrendingTvPage2, menuTrendingTvPage3, menuTrendingTvPage4, menuTrendingTvPage5, menuTrendingTvPage6, handleMenuTrendingTvClick,  menuTrendingPersonPage1, menuTrendingPersonPage2, menuTrendingPersonPage3, menuTrendingPersonPage4, menuTrendingPersonPage5, menuTrendingPersonPage6, handleMenuPopularPersonClick, menuPopularPersonPage1, menuPopularPersonPage2, menuPopularPersonPage3, menuPopularPersonPage4, menuPopularPersonPage5, menuPopularPersonPage6, fetchMovieProviders, movieProviders, fetchTvProviders, tvProviders, posterPathSmall, handleSeasonClick, tvSeason, tvSeasonArr, setTvSeason, setTempSeason, tempSeason, ratingTruncate, dollarsWithCommas, tvTileMaker, movieTileMaker, personTileMaker, setWatchListMovie, ribbonUpdater, watchListMovieIds, watchListTvIds, setWatchListTv, personMovieCast, personTvCast, genreMovies1, genreMovies2, genreMovies3, genreMovies4, genreMovies5, genreMovies6, genreMovies7, genreMovies8, genreMovies9, genreMovies10, fetchGenreMovies, handleMovieGenreClick, handleMovieGenreHover, movieGenreToString, genreTv1, genreTv2, genreTv3, genreTv4, genreTv5, genreTv6, genreTv7, genreTv8, genreTv9, genreTv10, fetchGenreTv, handleTvGenreClick, genreTv, setGenreTv, handleTvGenreHover, tvGenreToString,isLoggedIn, setIsLoggedIn, signInMenu, setSignInMenu, toggleSignInForm, setToggleSignInForm}}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}