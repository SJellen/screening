import {useState, useEffect} from 'react'



function useMenuMovieApi() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [menuPopularMoviesPage1, setMenuPopularMoviesPage1] = useState([])
    const [menuPopularMoviesPage2, setMenuPopularMoviesPage2] = useState([])
    const [menuPopularMoviesPage3, setMenuPopularMoviesPage3] = useState([])
    const [menuPopularMoviesPage4, setMenuPopularMoviesPage4] = useState([])
    const [menuPopularMoviesPage5, setMenuPopularMoviesPage5] = useState([])
    const [menuPopularMoviesPage6, setMenuPopularMoviesPage6] = useState([])

    const [menuTopRatedMoviesPage1, setMenuTopRatedMoviesPage1] = useState([])
    const [menuTopRatedMoviesPage2, setMenuTopRatedMoviesPage2] = useState([])
    const [menuTopRatedMoviesPage3, setMenuTopRatedMoviesPage3] = useState([])
    const [menuTopRatedMoviesPage4, setMenuTopRatedMoviesPage4] = useState([])
    const [menuTopRatedMoviesPage5, setMenuTopRatedMoviesPage5] = useState([])
    const [menuTopRatedMoviesPage6, setMenuTopRatedMoviesPage6] = useState([])

    const [menuUpcomingMoviesPage1, setMenuUpcomingMoviesPage1] = useState([])
    const [menuUpcomingMoviesPage2, setMenuUpcomingMoviesPage2] = useState([])
    const [menuUpcomingMoviesPage3, setMenuUpcomingMoviesPage3] = useState([])
    const [menuUpcomingMoviesPage4, setMenuUpcomingMoviesPage4] = useState([])
    const [menuUpcomingMoviesPage5, setMenuUpcomingMoviesPage5] = useState([])
    const [menuUpcomingMoviesPage6, setMenuUpcomingMoviesPage6] = useState([])

    const [menuNowPlayingMoviesPage1, setMenuNowPlayingMoviesPage1] = useState([])
    const [menuNowPlayingMoviesPage2, setMenuNowPlayingMoviesPage2] = useState([])
    const [menuNowPlayingMoviesPage3, setMenuNowPlayingMoviesPage3] = useState([])
    const [menuNowPlayingMoviesPage4, setMenuNowPlayingMoviesPage4] = useState([])
    const [menuNowPlayingMoviesPage5, setMenuNowPlayingMoviesPage5] = useState([])
    const [menuNowPlayingMoviesPage6, setMenuNowPlayingMoviesPage6] = useState([])

    const [menuMostMoneyMovies1, setMenuMostMoneyMovies1] = useState([])
    const [menuMostMoneyMovies2, setMenuMostMoneyMovies2] = useState([])
    const [menuMostMoneyMovies3, setMenuMostMoneyMovies3] = useState([])
    const [menuMostMoneyMovies4, setMenuMostMoneyMovies4] = useState([])
    const [menuMostMoneyMovies5, setMenuMostMoneyMovies5] = useState([])
    const [menuMostMoneyMovies6, setMenuMostMoneyMovies6] = useState([])

    const [menuTrendingMoviesPage1, setMenuTrendingMoviesPage1] = useState([])
    const [menuTrendingMoviesPage2, setMenuTrendingMoviesPage2] = useState([])
    const [menuTrendingMoviesPage3, setMenuTrendingMoviesPage3] = useState([])
    const [menuTrendingMoviesPage4, setMenuTrendingMoviesPage4] = useState([])
    const [menuTrendingMoviesPage5, setMenuTrendingMoviesPage5] = useState([])
    const [menuTrendingMoviesPage6, setMenuTrendingMoviesPage6] = useState([])
    
    


    const fetchPopularMenuMovies = async (num) => {
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=en-US&page=${num}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setMenuPopularMoviesPage1(data.results)
            } else if (num === 2) {
                setMenuPopularMoviesPage2(data.results)
            } else if (num === 3) {
                setMenuPopularMoviesPage3(data.results)
            } else if (num === 4) {
                setMenuPopularMoviesPage4(data.results)
            } else if (num === 5) {
                setMenuPopularMoviesPage5(data.results)
            } else {
                setMenuPopularMoviesPage6(data.results)
            }

            
        }

        )
        .catch(error => console.log(error))
        } 

    const fetchTopRatedMenuMovies = async (num) => {
            await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKEY}&language=en-US&page=${num}`)
            .then(res => res.json())
            .then((data) => {
    
                if (num === 1) {
                    setMenuTopRatedMoviesPage1(data.results)
                } else if (num === 2) {
                    setMenuTopRatedMoviesPage2(data.results)
                } else if (num === 3) {
                    setMenuTopRatedMoviesPage3(data.results)
                } else if (num === 4) {
                    setMenuTopRatedMoviesPage4(data.results)
                } else if (num === 5) {
                    setMenuTopRatedMoviesPage5(data.results)
                } else {
                    setMenuTopRatedMoviesPage6(data.results)
                }
    
                
            }
    
            )
            .catch(error => console.log(error))
            }     

    const fetchUpcomingMenuMovies = async (num) => {
            await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKEY}&language=en-US&page=${num}`)
            .then(res => res.json())
            .then((data) => {
    
                if (num === 1) {
                    setMenuUpcomingMoviesPage1(data.results)
                } else if (num === 2) {
                    setMenuUpcomingMoviesPage2(data.results)
                } else if (num === 3) {
                    setMenuUpcomingMoviesPage3(data.results)
                } else if (num === 4) {
                    setMenuUpcomingMoviesPage4(data.results)
                } else if (num === 5) {
                    setMenuUpcomingMoviesPage5(data.results)
                } else {
                    setMenuUpcomingMoviesPage6(data.results)
                }
    
                
            }
    
            )
            .catch(error => console.log(error))
            }       


    const fetchNowPlayingMenuMovies = async (num) => {
            await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=en-US&page=${num}`)
            .then(res => res.json())
            .then((data) => {
    
                if (num === 1) {
                    setMenuNowPlayingMoviesPage1(data.results)
                } else if (num === 2) {
                    setMenuNowPlayingMoviesPage2(data.results)
                } else if (num === 3) {
                    setMenuNowPlayingMoviesPage3(data.results)
                } else if (num === 4) {
                    setMenuNowPlayingMoviesPage4(data.results)
                } else if (num === 5) {
                    setMenuNowPlayingMoviesPage5(data.results)
                } else {
                    setMenuNowPlayingMoviesPage6(data.results)
                }
    
                
            }
    
            )
            .catch(error => console.log(error))
            }
            
            
    const fetchMostMoneyMenuMovies = async (num) => {
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${num}`)
            .then(res => res.json())
            .then((data) => {
    
                if (num === 1) {
                    setMenuMostMoneyMovies1(data.results)
                } else if (num === 2) {
                    setMenuMostMoneyMovies2(data.results)
                } else if (num === 3) {
                    setMenuMostMoneyMovies3(data.results)
                } else if (num === 4) {
                    setMenuMostMoneyMovies4(data.results)
                } else if (num === 5) {
                    setMenuMostMoneyMovies5(data.results)
                } else {
                    setMenuMostMoneyMovies6(data.results)
                }
    
                
            }
    
            )
            .catch(error => console.log(error))
            }     
                
    
        const fetchTrendingMenuMovies = async (num) => {
            await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKEY}&page=${num}`)
            .then(res => res.json())
            .then((data) => {
    
                if (num === 1) {
                    setMenuTrendingMoviesPage1(data.results)
                } else if (num === 2) {
                    setMenuTrendingMoviesPage2(data.results)
                } else if (num === 3) {
                    setMenuTrendingMoviesPage3(data.results)
                } else if (num === 4) {
                    setMenuTrendingMoviesPage4(data.results)
                } else if (num === 5) {
                    setMenuTrendingMoviesPage5(data.results)
                } else {
                    setMenuTrendingMoviesPage6(data.results)
                }
    
                
            }
    
            )
            .catch(error => console.log(error))
            }             
    


        function handleMenuPopularClick() {
            fetchPopularMenuMovies(1)
            fetchPopularMenuMovies(2)
            fetchPopularMenuMovies(3)
            fetchPopularMenuMovies(4)
            fetchPopularMenuMovies(5)
            fetchPopularMenuMovies(6)
            window.scrollTo(0, 0)
        }

        function handleMenuTopRatedClick() {
            fetchTopRatedMenuMovies(1)
            fetchTopRatedMenuMovies(2)
            fetchTopRatedMenuMovies(3)
            fetchTopRatedMenuMovies(4)
            fetchTopRatedMenuMovies(5)
            fetchTopRatedMenuMovies(6)
            window.scrollTo(0, 0)
        }

        function handleMenuUpcomingClick() {
            fetchUpcomingMenuMovies(1)
            fetchUpcomingMenuMovies(2)
            fetchUpcomingMenuMovies(3)
            fetchUpcomingMenuMovies(4)
            fetchUpcomingMenuMovies(5)
            fetchUpcomingMenuMovies(6)
            window.scrollTo(0, 0)
        }

        function handleMenuNowPlayingClick() {
            fetchNowPlayingMenuMovies(1)
            fetchNowPlayingMenuMovies(2)
            fetchNowPlayingMenuMovies(3)
            fetchNowPlayingMenuMovies(4)
            fetchNowPlayingMenuMovies(5)
            fetchNowPlayingMenuMovies(6)
            window.scrollTo(0, 0)
        }

        function handleMenuMostMoneyClick() {
            fetchMostMoneyMenuMovies(1)
            fetchMostMoneyMenuMovies(2)
            fetchMostMoneyMenuMovies(3)
            fetchMostMoneyMenuMovies(4)
            fetchMostMoneyMenuMovies(5)
            fetchMostMoneyMenuMovies(6)
            window.scrollTo(0, 0)
        }

        function handleMenuTrendingMoviesClick() {
            fetchTrendingMenuMovies(1)
            fetchTrendingMenuMovies(2)
            fetchTrendingMenuMovies(3)
            fetchTrendingMenuMovies(4)
            fetchTrendingMenuMovies(5)
            fetchTrendingMenuMovies(6)
            window.scrollTo(0, 0)
        }




        useEffect(() => {
            const path = window.location.pathname
            const splitPath = path.split('/')
            const cleanPath = splitPath.filter(item => item !== '')
            const pathMediaId = cleanPath[1]
            // console.log(cleanPath, pathMediaType, pathMediaId)
            if (pathMediaId === "popularMovies") {
                fetchPopularMenuMovies(1)
                fetchPopularMenuMovies(2)
                fetchPopularMenuMovies(3)
                fetchPopularMenuMovies(4)
                fetchPopularMenuMovies(5)
                fetchPopularMenuMovies(6)
                window.scrollTo(0, 0)
            } else if (pathMediaId === "topRatedMovies") {
                fetchTopRatedMenuMovies(1)
                fetchTopRatedMenuMovies(2)
                fetchTopRatedMenuMovies(3)
                fetchTopRatedMenuMovies(4)
                fetchTopRatedMenuMovies(5)
                fetchTopRatedMenuMovies(6)
                window.scrollTo(0, 0)
            } else if (pathMediaId === "upcomingMovies") {
                fetchUpcomingMenuMovies(1)
                fetchUpcomingMenuMovies(2)
                fetchUpcomingMenuMovies(3)
                fetchUpcomingMenuMovies(4)
                fetchUpcomingMenuMovies(5)
                fetchUpcomingMenuMovies(6)
                window.scrollTo(0, 0)
            } else if (pathMediaId === "nowPlayingMovies") {
                fetchNowPlayingMenuMovies(1)
                fetchNowPlayingMenuMovies(2)
                fetchNowPlayingMenuMovies(3)
                fetchNowPlayingMenuMovies(4)
                fetchNowPlayingMenuMovies(5)
                fetchNowPlayingMenuMovies(6)
                window.scrollTo(0, 0)
            } else if (pathMediaId === "mostMoneyMovies") {
                fetchMostMoneyMenuMovies(1)
                fetchMostMoneyMenuMovies(2)
                fetchMostMoneyMenuMovies(3)
                fetchMostMoneyMenuMovies(4)
                fetchMostMoneyMenuMovies(5)
                fetchMostMoneyMenuMovies(6)
                window.scrollTo(0, 0)
            } else if (pathMediaId === "trendingMovies") {
                fetchTrendingMenuMovies(1)
                fetchTrendingMenuMovies(2)
                fetchTrendingMenuMovies(3)
                fetchTrendingMenuMovies(4)
                fetchTrendingMenuMovies(5)
                fetchTrendingMenuMovies(6)
                window.scrollTo(0, 0)
            }
               // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])    






    return {handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, handleMenuUpcomingClick, menuUpcomingMoviesPage1, menuUpcomingMoviesPage2, menuUpcomingMoviesPage3,menuUpcomingMoviesPage4,menuUpcomingMoviesPage5,menuUpcomingMoviesPage6, handleMenuNowPlayingClick, menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3, menuNowPlayingMoviesPage4, menuNowPlayingMoviesPage5, menuNowPlayingMoviesPage6, handleMenuMostMoneyClick, menuMostMoneyMovies1, menuMostMoneyMovies2, menuMostMoneyMovies3, menuMostMoneyMovies4, menuMostMoneyMovies5, menuMostMoneyMovies6, handleMenuTrendingMoviesClick, menuTrendingMoviesPage1, menuTrendingMoviesPage2, menuTrendingMoviesPage3, menuTrendingMoviesPage4, menuTrendingMoviesPage5, menuTrendingMoviesPage6  } 
}

export default useMenuMovieApi