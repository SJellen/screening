import {useState, useEffect} from 'react'

function useApiTv() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [tvTrending, setTvTrending] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])
    const [popularTv, setPopularTv] = useState([])
    const [airingToday, setAiringToday] = useState([])
    const [tvRecommendationArr, setTvRecommendationArr] = useState([])
    const [tvId, setTvId] = useState()
    const [lastTvId, setLastTvId] = useState()
    const [tvDetails, setTvDetails] = useState([])
    const [tvCredits, setTvCredits] = useState([])
    const [tvSimilarArr, setTvSimilarArr] = useState([])
    const [tvReviews, setTvReviews] = useState([])
    const [tvVideos, setTvVideos] = useState([])
    const [tvLoaded, setTvLoaded] = useState(false)
    const [tvProviders, setTvProviders] = useState([])

    const fetchTrendingTv = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            setTvTrending(data.results)
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

    const fetchTvRecommend = async (x) => {
        await fetch(`https://api.themoviedb.org/3/tv/${x}/recommendations?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTvRecommendationArr(data.results)
        }

        )
        .catch(error => console.log(error))
        }  
        
        
    


    const fetchTvSimilar = async (x) => {
        await fetch(`https://api.themoviedb.org/3/tv/${x}}/similar?api_key=${apiKEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then((data) => {
            setTvSimilarArr(data.results)
        }

        )
        .catch(error => console.log(error))
        }  

        useEffect(() => {
            fetchTopRatedTv()
            fetchPopularTv()
            fetchAirToday()
            fetchTrendingTv()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])   
        
        
    const fetchTvDetails = async (x) => {

        await fetch(`https://api.themoviedb.org/3/tv/${x}?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTvDetails(data)
        }

        )
        .catch(error => console.log(error))
        }  
        
        

    const fetchTvCredits = async (x) => {

        await fetch(`https://api.themoviedb.org/3/tv/${x}/credits?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTvCredits(data)
        }

        )
        .catch(error => console.log(error))
            }    
            
    const fetchTvReviews = async (x) => {

        await fetch(`https://api.themoviedb.org/3/tv/${x}/reviews?api_key=${apiKEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then((data) => {
            setTvReviews(data = data.results)
        }

        )
        .catch(error => console.log(error))
            }          
         
    const fetchTvVideos = async (x) => {

        await fetch(`https://api.themoviedb.org/3/tv/${x}/videos?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setTvVideos(data = data.results)
            setTimeout(() => {
                setTvLoaded(true)
            }, 2500)
            
        }

        )
        .catch(error => console.log(error))
            }           
                
    const fetchTvProviders = async (x) => {
        await fetch(`https://api.themoviedb.org/3/tv/${x}/watch/providers?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            if (data.results.US) {
                setTvProviders(data.results.US)
            } else {
                setTvProviders([])
            }
            
        }

        )
        .catch(error => console.log(error))
        }            



    return {topRatedTv, popularTv, airingToday,  setTvId,   tvId,   fetchTvDetails,  tvDetails, fetchTvCredits, tvCredits,  setTvCredits,  tvRecommendationArr, fetchTvRecommend,  fetchTvSimilar, tvSimilarArr, fetchTvReviews, tvReviews, fetchTvVideos, tvVideos, tvLoaded, setTvLoaded, lastTvId, setLastTvId, tvTrending, fetchTrendingTv, fetchTvProviders, tvProviders}
}

export default useApiTv