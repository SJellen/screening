import {useState, useEffect} from 'react'

function useMenuTvApi() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [menuPopularTvPage1, setMenuPopularTvPage1] = useState([])
    const [menuPopularTvPage2, setMenuPopularTvPage2] = useState([])
    const [menuPopularTvPage3, setMenuPopularTvPage3] = useState([])
    const [menuPopularTvPage4, setMenuPopularTvPage4] = useState([])
    const [menuPopularTvPage5, setMenuPopularTvPage5] = useState([])
    const [menuPopularTvPage6, setMenuPopularTvPage6] = useState([])


    const fetchPopularMenuTv = async (num) => {
        await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKEY}&language=en-US&page=${num}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setMenuPopularTvPage1(data.results)
            } else if (num === 2) {
                setMenuPopularTvPage2(data.results)
            } else if (num === 3) {
                setMenuPopularTvPage3(data.results)
            } else if (num === 4) {
                setMenuPopularTvPage4(data.results)
            } else if (num === 5) {
                setMenuPopularTvPage5(data.results)
            } else {
                setMenuPopularTvPage6(data.results)
            }

            
        }

        )
        .catch(error => console.log(error))
        } 






    function handleMenuPopularTvClick() {
        fetchPopularMenuTv(1)
        fetchPopularMenuTv(2)
        fetchPopularMenuTv(3)
        fetchPopularMenuTv(4)
        fetchPopularMenuTv(5)
        fetchPopularMenuTv(6)
    }






    useEffect(() => {
        const path = window.location.pathname
        const splitPath = path.split('/')
        const cleanPath = splitPath.filter(item => item !== '')
        const pathMediaType = cleanPath[0], pathMediaId = cleanPath[1]
        console.log(cleanPath, pathMediaType, pathMediaId)
        if (pathMediaId === "popularTv") {
            fetchPopularMenuTv(1)
            fetchPopularMenuTv(2)
            fetchPopularMenuTv(3)
            fetchPopularMenuTv(4)
            fetchPopularMenuTv(5)
            fetchPopularMenuTv(6)
        }
        //  else if (pathMediaId === "topRatedTv") {
        //     fetchTopRatedMenuTv(1)
        //     fetchTopRatedMenuTv(2)
        //     fetchTopRatedMenuTv(3)
        //     fetchTopRatedMenuTv(4)
        //     fetchTopRatedMenuTv(5)
        //     fetchTopRatedMenuTv(6)
        //  } 
        
        // else if (pathMediaId === "upcomingMovies") {
        //     fetchUpcomingMenuMovies(1)
        //     fetchUpcomingMenuMovies(2)
        //     fetchUpcomingMenuMovies(3)
        //     fetchUpcomingMenuMovies(4)
        //     fetchUpcomingMenuMovies(5)
        //     fetchUpcomingMenuMovies(6)
        // } else if (pathMediaId === "nowPlayingMovies") {
        //     fetchNowPlayingMenuMovies(1)
        //     fetchNowPlayingMenuMovies(2)
        //     fetchNowPlayingMenuMovies(3)
        //     fetchNowPlayingMenuMovies(4)
        //     fetchNowPlayingMenuMovies(5)
        //     fetchNowPlayingMenuMovies(6)
        // } else if (pathMediaId === "mostMoneyMovies") {
        //     fetchMostMoneyMenuMovies(1)
        //     fetchMostMoneyMenuMovies(2)
        //     fetchMostMoneyMenuMovies(3)
        //     fetchMostMoneyMenuMovies(4)
        //     fetchMostMoneyMenuMovies(5)
        //     fetchMostMoneyMenuMovies(6)
        // }

    }, [])    






    return {handleMenuPopularTvClick, menuPopularTvPage1, menuPopularTvPage2,menuPopularTvPage3,menuPopularTvPage4, menuPopularTvPage5, menuPopularTvPage6}

}

export default useMenuTvApi