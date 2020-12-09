import {useState} from 'react'


function useApi() {
    
    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResultsMovie, setSearchResultsMovie] = useState([])
    const [searchResultsTv, setSearchResultsTv] = useState([])
    const [searchResultsPerson, setSearchResultsPerson] = useState([])


    const fetchSearchResults = async () => {
            await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKEY}&language=en-US&query=${searchTerm}`)
            .then(res => res.json())
            .then((data) => {
                
            let results = data.results
            let tvSearchArr = [], movieSearchArr = [], personSearchArr = []
                for (let i = 0; i < results.length; i++) {   
                if (results[i].media_type === 'tv') {
                    tvSearchArr.push(results[i])
                } else if (results[i].media_type === 'movie') {
                    movieSearchArr.push(results[i])
                } else if (results[i].media_type === 'person') {
                    personSearchArr.push(results[i])
                }
                }
                setSearchResultsMovie(movieSearchArr)
                setSearchResultsTv(tvSearchArr)
                setSearchResultsPerson(personSearchArr)
            }
            )
            .catch(error => console.log(error))
            }  


    return {fetchSearchResults, setSearchTerm, searchResultsMovie, searchResultsTv,  searchTerm, searchResultsPerson}
}


export default useApi