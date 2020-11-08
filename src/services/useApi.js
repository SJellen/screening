import {useState, useEffect} from 'react'


function useApi() {
    


    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [tvTrending, setTvTrending] = useState([])
    const [movieTrending, setMovieTrending] = useState([])
    const [personTrending, setPersonTrending] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])
    const [popularTv, setPopularTv] = useState([])
    const [airingToday, setAiringToday] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [popularPerson, setPopularPerson] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [tvRecommendationID, setTvRecommendationID] = useState('82856')
    const [tvRecommendationArr, setTvRecommendationArr] = useState([])
    const [movieRecommendationID, setMovieRecommendationID] = useState('240')
    const [movieRecommendationArr, setMovieRecommendationArr] = useState([])
    const [movieId, setMovieId] = useState()
    const [tvId, setTvId] = useState()
    const [personId, setPersonId] = useState()
    const [movieDetails, setMovieDetails] = useState([])
    const [tvDetails, setTvDetails] = useState([])
    const [personDetails, setPersonDetails] = useState([])
    const [searchResultsPerson, setSearchResultsPerson] = useState([])
    const [searchResultsMovie, setSearchResultsMovie] = useState([])
    const [searchResultsTv, setSearchResultsTv] = useState([])

    

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

    const fetchTopRatedTv = async () => {
        await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTopRatedTv(data.results)
        }

        )
        .catch(error => console.log(error))
        }
        
    const fetchPopularTv = async () => {
        await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPopularTv(data.results)
        }

        )
        .catch(error => console.log(error))
        }
        
    const fetchAirToday = async () => {
        await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setAiringToday(data.results)
        }

        )
        .catch(error => console.log(error))
        }  
            
    const fetchUpcomingMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setUpcomingMovies(data.results)
        }

        )
        .catch(error => console.log(error))
        }     
        
        
    const fetchTopRatedMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTopRatedMovies(data.results)
        }

        )
        .catch(error => console.log(error))
        } 
        
    const fetchPopularMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPopularMovies(data.results)
        }

        )
        .catch(error => console.log(error))
        } 
        
    const fetchNowPlaying = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setNowPlaying(data.results)
        }

        )
        .catch(error => console.log(error))
        } 
        
        
    const fetchTvRecommend = async () => {
        await fetch(`https://api.themoviedb.org/3/tv/${tvRecommendationID}/recommendations?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTvRecommendationArr(data.results)
        }

        )
        .catch(error => console.log(error))
        }  
        
        
    const fetchMovieRecommend = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${movieRecommendationID}/recommendations?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setMovieRecommendationArr(data.results)
        }

        )
        .catch(error => console.log(error))
        } 

    const fetchPopularPerson = async () => {
        await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPopularPerson(data.results)
        }

        )
        .catch(error => console.log(error))
        }     
            



        useEffect(() => {
            fetchTrending()
            fetchTrendingPerson()
            fetchTopRatedTv()
            fetchPopularTv()
            fetchAirToday()
            fetchUpcomingMovies()
            fetchTopRatedMovies()
            fetchPopularMovies()
            fetchNowPlaying()
            fetchTvRecommend()
            fetchMovieRecommend()
            fetchPopularPerson()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        


    const fetchMovieDetails = async (x) => {
        
        await fetch(`https://api.themoviedb.org/3/movie/${x}?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setMovieDetails(data)
        }

        )
        .catch(error => console.log(error))
        }    
        
    const fetchTvDetails = async (x) => {
    
        await fetch(`https://api.themoviedb.org/3/tv/${x}?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTvDetails(data)
        }

        )
        .catch(error => console.log(error))
        }  
        
        
    const fetchPersonDetails = async (x) => {

        await fetch(`https://api.themoviedb.org/3/person/${x}?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPersonDetails(data)
        }

        )
        .catch(error => console.log(error))
        }     





        

        


        
       
      
        

    return {movieTrending, personTrending, tvTrending, searchResults, topRatedTv, popularTv, airingToday, upcomingMovies, 
            topRatedMovies, popularMovies, nowPlaying, popularPerson, tvRecommendationID, setTvRecommendationID, 
            movieRecommendationID, setMovieRecommendationID, setMovieId, setTvId, setPersonId, movieId, tvId, personId, fetchMovieDetails, movieDetails, fetchTvDetails, fetchPersonDetails, personDetails, tvDetails, fetchSearchResults, setSearchTerm, searchResultsMovie, searchResultsTv, searchResultsPerson, searchTerm}
}


export default useApi