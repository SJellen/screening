import React, {useState, useEffect} from 'react'

const Context = React.createContext()




function ContextProvider({children}) {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY

    const [trending, setTrending] = useState([])


    const fetchTrending = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKEY}`)
        .then(res => res.json())
        .then(data => 
        setTrending(data)
        )
        .catch(error => console.log(error))
        }







    useEffect(() => {
        fetchTrending()
    },[])

    console.log(trending)







    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}