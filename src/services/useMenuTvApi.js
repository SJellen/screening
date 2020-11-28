import {useState, useEffect} from 'react'

function useMenuTvApi() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [menuPopularTvPage1, setMenuPopularTvPage1] = useState([])
    const [menuPopularTvPage2, setMenuPopularTvPage2] = useState([])
    const [menuPopularTvPage3, setMenuPopularTvPage3] = useState([])
    const [menuPopularTvPage4, setMenuPopularTvPage4] = useState([])
    const [menuPopularTvPage5, setMenuPopularTvPage5] = useState([])
    const [menuPopularTvPage6, setMenuPopularTvPage6] = useState([])


    const [menuTopRatedTvPage1, setMenuTopRatedTvPage1] = useState([])
    const [menuTopRatedTvPage2, setMenuTopRatedTvPage2] = useState([])
    const [menuTopRatedTvPage3, setMenuTopRatedTvPage3] = useState([])
    const [menuTopRatedTvPage4, setMenuTopRatedTvPage4] = useState([])
    const [menuTopRatedTvPage5, setMenuTopRatedTvPage5] = useState([])
    const [menuTopRatedTvPage6, setMenuTopRatedTvPage6] = useState([])

    const [menuOnAirTvPage1, setMenuOnAirTvPage1] = useState([])
    const [menuOnAirTvPage2, setMenuOnAirTvPage2] = useState([])
    const [menuOnAirTvPage3, setMenuOnAirTvPage3] = useState([])
    const [menuOnAirTvPage4, setMenuOnAirTvPage4] = useState([])
    const [menuOnAirTvPage5, setMenuOnAirTvPage5] = useState([])
    const [menuOnAirTvPage6, setMenuOnAirTvPage6] = useState([])

    const [menuAiringTodayTvPage1, setMenuAiringTodayTvPage1] = useState([])
    const [menuAiringTodayTvPage2, setMenuAiringTodayTvPage2] = useState([])
    const [menuAiringTodayTvPage3, setMenuAiringTodayTvPage3] = useState([])
    const [menuAiringTodayTvPage4, setMenuAiringTodayTvPage4] = useState([])
    const [menuAiringTodayTvPage5, setMenuAiringTodayTvPage5] = useState([])
    const [menuAiringTodayTvPage6, setMenuAiringTodayTvPage6] = useState([])



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


    const fetchTopRatedMenuTv = async (num) => {
        await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKEY}&language=en-US&page=${num}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setMenuTopRatedTvPage1(data.results)
            } else if (num === 2) {
                setMenuTopRatedTvPage2(data.results)
            } else if (num === 3) {
                setMenuTopRatedTvPage3(data.results)
            } else if (num === 4) {
                setMenuTopRatedTvPage4(data.results)
            } else if (num === 5) {
                setMenuTopRatedTvPage5(data.results)
            } else {
                setMenuTopRatedTvPage6(data.results)
            }

            
        }

        )
        .catch(error => console.log(error))
        }   


    const fetchOnAirMenuTv = async (num) => {
        await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKEY}&language=en-US&page=${num}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setMenuOnAirTvPage1(data.results)
            } else if (num === 2) {
                setMenuOnAirTvPage2(data.results)
            } else if (num === 3) {
                setMenuOnAirTvPage3(data.results)
            } else if (num === 4) {
                setMenuOnAirTvPage4(data.results)
            } else if (num === 5) {
                setMenuOnAirTvPage5(data.results)
            } else {
                setMenuOnAirTvPage6(data.results)
            }

            
        }

        )
        .catch(error => console.log(error))
        }


    const fetchAiringTodayMenuTv = async (num) => {
        await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKEY}&language=en-US&page=${num}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setMenuAiringTodayTvPage1(data.results)
            } else if (num === 2) {
                setMenuAiringTodayTvPage2(data.results)
            } else if (num === 3) {
                setMenuAiringTodayTvPage3(data.results)
            } else if (num === 4) {
                setMenuAiringTodayTvPage4(data.results)
            } else if (num === 5) {
                setMenuAiringTodayTvPage5(data.results)
            } else {
                setMenuAiringTodayTvPage6(data.results)
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

    function handleMenuTopRatedTvClick() {
        fetchTopRatedMenuTv(1)
        fetchTopRatedMenuTv(2)
        fetchTopRatedMenuTv(3)
        fetchTopRatedMenuTv(4)
        fetchTopRatedMenuTv(5)
        fetchTopRatedMenuTv(6)
    }

    function handleMenuOnAirTvClick() {
        fetchOnAirMenuTv(1)
        fetchOnAirMenuTv(2)
        fetchOnAirMenuTv(3)
        fetchOnAirMenuTv(4)
        fetchOnAirMenuTv(5)
        fetchOnAirMenuTv(6)
    }

    function handleMenuAiringTodayTvClick() {
        fetchAiringTodayMenuTv(1)
        fetchAiringTodayMenuTv(2)
        fetchAiringTodayMenuTv(3)
        fetchAiringTodayMenuTv(4)
        fetchAiringTodayMenuTv(5)
        fetchAiringTodayMenuTv(6)
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
        } else if (pathMediaId === "topRatedTv") {
            fetchTopRatedMenuTv(1)
            fetchTopRatedMenuTv(2)
            fetchTopRatedMenuTv(3)
            fetchTopRatedMenuTv(4)
            fetchTopRatedMenuTv(5)
            fetchTopRatedMenuTv(6)
         } else if (pathMediaId === "onAirTv") {
            fetchOnAirMenuTv(1)
            fetchOnAirMenuTv(2)
            fetchOnAirMenuTv(3)
            fetchOnAirMenuTv(4)
            fetchOnAirMenuTv(5)
            fetchOnAirMenuTv(6)
         } else if (pathMediaId === "airingTodayTv") {
            fetchAiringTodayMenuTv(1)
            fetchAiringTodayMenuTv(2)
            fetchAiringTodayMenuTv(3)
            fetchAiringTodayMenuTv(4)
            fetchAiringTodayMenuTv(5)
            fetchAiringTodayMenuTv(6)
         }
        
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






    return {handleMenuPopularTvClick, menuPopularTvPage1, menuPopularTvPage2,menuPopularTvPage3,menuPopularTvPage4, menuPopularTvPage5, menuPopularTvPage6, handleMenuTopRatedTvClick, menuTopRatedTvPage1, menuTopRatedTvPage2, menuTopRatedTvPage3, menuTopRatedTvPage4, menuTopRatedTvPage5, menuTopRatedTvPage6, handleMenuOnAirTvClick, menuOnAirTvPage1, menuOnAirTvPage2, menuOnAirTvPage3, menuOnAirTvPage4, menuOnAirTvPage5, menuOnAirTvPage6, handleMenuAiringTodayTvClick, menuAiringTodayTvPage1, menuAiringTodayTvPage2, menuAiringTodayTvPage3, menuAiringTodayTvPage4, menuAiringTodayTvPage5, menuAiringTodayTvPage6}

}

export default useMenuTvApi