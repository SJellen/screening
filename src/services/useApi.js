import {useState, useEffect} from 'react'




function useApi() {
    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [tvTrending, setTvTrending] = useState([])
    const [movieTrending, setMovieTrending] = useState([])
    const [personTrending, setPersonTrending] = useState([])

    

    const fetchTrending = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            let trending = data.results
            let tvArr = [], movieArr = []
            for (let i=0; i < trending.length; i++) {
                if  (trending[i].media_type === "tv") {
                    tvArr.push(trending[i])
                } else if (trending[i].media_type === "movie"){
                    movieArr.push(trending[i])
                }
            }
            setMovieTrending(movieArr)
            setTvTrending(tvArr)
           
        }
        )
        .catch(error => console.log(error))
        }



    const fetchTrendingPerson = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            let trending = data.results
            let personArr = []
            for (let i=0; i < trending.length; i++) {
                if  (trending[i].media_type === "person") {
                    personArr.push(trending[i])
                } 
            }
            setPersonTrending(personArr)
           
        }
        )
        .catch(error => console.log(error))
        }


        useEffect(() => {
            fetchTrending()
            fetchTrendingPerson()
            
    
        },[])


        

    return {movieTrending, personTrending, tvTrending}
}


export default useApi