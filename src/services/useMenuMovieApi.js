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
    


        function handleMenuPopularClick() {
            fetchPopularMenuMovies(1)
            fetchPopularMenuMovies(2)
            fetchPopularMenuMovies(3)
            fetchPopularMenuMovies(4)
            fetchPopularMenuMovies(5)
            fetchPopularMenuMovies(6)
        }

        function handleMenuTopRatedClick() {
            fetchTopRatedMenuMovies(1)
            fetchTopRatedMenuMovies(2)
            fetchTopRatedMenuMovies(3)
            fetchTopRatedMenuMovies(4)
            fetchTopRatedMenuMovies(5)
            fetchTopRatedMenuMovies(6)
        }




        useEffect(() => {
            const path = window.location.pathname
            const splitPath = path.split('/')
            const cleanPath = splitPath.filter(item => item !== '')
            const pathMediaType = cleanPath[0], pathMediaId = cleanPath[1]
            console.log(cleanPath, pathMediaType, pathMediaId)
            if (pathMediaId === "popularMovies") {
                fetchPopularMenuMovies(1)
                fetchPopularMenuMovies(2)
                fetchPopularMenuMovies(3)
                fetchPopularMenuMovies(4)
                fetchPopularMenuMovies(5)
                fetchPopularMenuMovies(6)
            }
    
        }, [])    






    return {handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6 } 
}

export default useMenuMovieApi