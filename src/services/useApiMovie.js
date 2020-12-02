import {useState, useEffect} from 'react'


function useApiMovie() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [movieTrending, setMovieTrending] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [movieRecommendationArr, setMovieRecommendationArr] = useState([])
    const [movieId, setMovieId] = useState()
    const [lastMovieId, setLastMovieId] = useState()
    const [movieDetails, setMovieDetails] = useState([])
    const [movieCredits, setMovieCredits] = useState([])
    const [movieSimilarArr, setMovieSimilarArr] = useState([])
    const [movieReviews, setMovieReviews] = useState([])
    const [movieVideos, setMovieVideos] = useState([])
    const [movieLoaded, setMovieLoaded] = useState(false)
    const [movieProviders, setMovieProviders] = useState([])


    const fetchTrendingMovie = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            setMovieTrending(data.results)
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
        
    const fetchMovieRecommend = async (x) => {
        await fetch(`https://api.themoviedb.org/3/movie/${x}/recommendations?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setMovieRecommendationArr(data.results)
        }

        )
        .catch(error => console.log(error))
        }     

    const fetchMovieSimilar = async (x) => {
        await fetch(`https://api.themoviedb.org/3/movie/${x}/similar?api_key=${apiKEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then((data) => {
            setMovieSimilarArr(data.results)
        }

        )
        .catch(error => console.log(error))
        } 

    useEffect(() => {
        fetchUpcomingMovies()
        fetchTopRatedMovies()
        fetchPopularMovies()
        fetchNowPlaying()
        fetchTrendingMovie()
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lastMovieId, movieId])  
    
    
    const fetchMovieDetails = async (x) => {
        
        await fetch(`https://api.themoviedb.org/3/movie/${x}?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setMovieDetails(data)
        }

        )
        .catch(error => console.log(error))
        } 
        
        
    const fetchMovieCredits = async (x) => {

        await fetch(`https://api.themoviedb.org/3/movie/${x}/credits?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            setMovieCredits(data)
        }

        )
        .catch(error => console.log(error))
            }         
        

    const fetchMovieReviews = async (x) => {

        await fetch(`https://api.themoviedb.org/3/movie/${x}/reviews?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setMovieReviews(data = data.results)
        }

        )
        .catch(error => console.log(error))
            }  

    const fetchMovieVideos = async (x) => {

        await fetch(`https://api.themoviedb.org/3/movie/${x}/videos?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setMovieVideos(data = data.results)
            setTimeout(() => {
                setMovieLoaded(true)
            }, 1500)
            
            
        }

        )
        .catch(error => console.log(error))
            }   
            
            

    const fetchMovieProviders = async (x) => {
        await fetch(`https://api.themoviedb.org/3/movie/${x}/watch/providers?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            if (data.results.US !== undefined) {
                setMovieProviders(data.results.US)
            } else {
                setMovieProviders([])
            }
            
        }

        )
        .catch(error => console.log(error))
        }        


    return {upcomingMovies, topRatedMovies, popularMovies, nowPlaying, setMovieId,movieId,fetchMovieDetails, movieDetails,fetchMovieCredits,movieCredits, setMovieCredits,movieRecommendationArr,fetchMovieRecommend,fetchMovieSimilar, movieSimilarArr, fetchMovieReviews, movieReviews, fetchMovieVideos, movieVideos, movieLoaded, setMovieLoaded, lastMovieId, setLastMovieId, movieTrending, fetchTrendingMovie, fetchMovieProviders, movieProviders}
}

export default useApiMovie