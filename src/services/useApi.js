import {useState, useEffect} from 'react'


function useApi() {
    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [tvTrending, setTvTrending] = useState([])
    const [movieTrending, setMovieTrending] = useState([])
    const [personTrending, setPersonTrending] = useState([])
    const [searchTerm, setSearchTerm] = useState('kubrick')
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
                setSearchResults(data.results)
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
            fetchSearchResults()
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
        },[])

        
       
       console.log(upcomingMovies)
        

    return {movieTrending, personTrending, tvTrending, searchResults, topRatedTv, popularTv, airingToday, upcomingMovies, topRatedMovies, popularMovies, nowPlaying, popularPerson, topRatedMovies, topRatedTv}
}


export default useApi