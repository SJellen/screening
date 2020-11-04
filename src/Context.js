import React, {useState, useEffect} from 'react'
import useApi from './services/useApi'

const Context = React.createContext()




function ContextProvider({children}) {

    const {movieTrending, personTrending, tvTrending, searchResults, topRatedTv, popularTv, airingToday, upcomingMovies, topRatedMovies, popularMovies, nowPlaying, popularPerson} = useApi()

    const posterPath = 'https://image.tmdb.org/t/p/w200/'

    
    
   
    
   



    return (
        <Context.Provider value={{movieTrending, personTrending, tvTrending, posterPath, popularTv, popularMovies, popularPerson, topRatedTv, topRatedMovies}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}