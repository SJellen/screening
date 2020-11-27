import {useState, useEffect} from 'react'
import useMenuPopularPage from '../logic/Menu/useMenuPopularPage'


function useMenuMovieApi() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [menuPopularMoviesPage1, setMenuPopularMoviesPage1] = useState([])
    const [menuPopularMoviesPage2, setMenuPopularMoviesPage2] = useState([])
    const [menuPopularMoviesPage3, setMenuPopularMoviesPage3] = useState([])
    const [menuPopularMoviesPage4, setMenuPopularMoviesPage4] = useState([])
    const [menuPopularMoviesPage5, setMenuPopularMoviesPage5] = useState([])
    const [menuPopularMoviesPage6, setMenuPopularMoviesPage6] = useState([])


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
    


        function handleMenuPopularClick() {
            fetchPopularMenuMovies(1)
            fetchPopularMenuMovies(2)
            fetchPopularMenuMovies(3)
            fetchPopularMenuMovies(4)
            fetchPopularMenuMovies(5)
            fetchPopularMenuMovies(6)
        }






    return {handleMenuPopularClick, menuPopularMoviesPage1, menuPopularMoviesPage2,menuPopularMoviesPage3,menuPopularMoviesPage4, menuPopularMoviesPage5, menuPopularMoviesPage6 } 
}

export default useMenuMovieApi