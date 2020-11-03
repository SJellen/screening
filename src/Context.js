import React, {useState, useEffect} from 'react'
import useApi from './services/useApi'

const Context = React.createContext()




function ContextProvider({children}) {

    const {movieTrending, personTrending, tvTrending, searchResults, topRatedTv, popularTv, airingToday, upcomingMovies, topRatedMovies, popularMovies, nowPlaying} = useApi()

    

    
    
   

   



    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}