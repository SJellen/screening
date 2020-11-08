import React, {useState} from 'react'
import useApi from './services/useApi'

const Context = React.createContext()




function ContextProvider({children}) {

    const {movieTrending, personTrending, tvTrending, searchResults, topRatedTv, popularTv, airingToday, upcomingMovies, topRatedMovies, popularMovies, nowPlaying, popularPerson, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID, setMovieId, setTvId, setPersonId, movieId, tvId, personId, fetchMovieDetails, movieDetails, fetchTvDetails, fetchPersonDetails, personDetails, tvDetails, fetchSearchResults, setSearchTerm, searchResultsMovie, searchResultsTv, searchResultsPerson, searchTerm} = useApi()

    const posterPath = 'https://image.tmdb.org/t/p/w200/'
    const posterPathLarge = 'https://image.tmdb.org/t/p/w780/'

    const [itemPageOpen, setItemPageOpen] = useState(false)
    const [mediaType, setMediaType] = useState(null)
    const [searchResultsActive, setSearchResultsActive] = useState(false)

    

    
    
    function dateSplitter(x) {
        
        if (x !== undefined) {
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

    

 


    return (
        <Context.Provider value={{movieTrending, personTrending, tvTrending, posterPath, popularTv, popularMovies, popularPerson, topRatedTv, topRatedMovies, airingToday, upcomingMovies, nowPlaying, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID, itemPageOpen, setItemPageOpen, setMovieId, setTvId, setPersonId, movieId, tvId, personId, fetchMovieDetails, movieDetails, fetchTvDetails, fetchPersonDetails, personDetails, tvDetails, mediaType, setMediaType, dateSplitter, posterPathLarge, timeConverter, getYear, fetchSearchResults, searchResults, setSearchTerm, searchResultsMovie, searchResultsTv, searchResultsPerson, searchTerm, searchResultsActive, setSearchResultsActive}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}