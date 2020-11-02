import React, {useState, useEffect} from 'react'
import useApi from './services/useApi'

const Context = React.createContext()




function ContextProvider({children}) {

    const {movieTrending, personTrending, tvTrending} = useApi()

    
   
   



    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}