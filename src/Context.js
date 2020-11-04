import React, {useState} from 'react'
import useApi from './services/useApi'

const Context = React.createContext()




function ContextProvider({children}) {

    const {movieTrending, personTrending, tvTrending, searchResults, topRatedTv, popularTv, airingToday, upcomingMovies, topRatedMovies, popularMovies, nowPlaying, popularPerson, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID} = useApi()

    const posterPath = 'https://image.tmdb.org/t/p/w200/'

    const [itemPageOpen, setItemBoxOpen] = useState(false)

    

    
    
   
    
   



    return (
        <Context.Provider value={{movieTrending, personTrending, tvTrending, posterPath, popularTv, popularMovies, popularPerson, topRatedTv, topRatedMovies, airingToday, upcomingMovies, nowPlaying, tvRecommendationID, setTvRecommendationID, movieRecommendationID, setMovieRecommendationID, itemPageOpen, setItemBoxOpen}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}