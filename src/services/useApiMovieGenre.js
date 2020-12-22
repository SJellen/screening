import {useState, useEffect} from 'react'

function useApiMovieGenre() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [genreMovies1, setGenreMovies1] = useState([])
    const [genreMovies2, setGenreMovies2] = useState([])
    const [genreMovies3, setGenreMovies3] = useState([])
    const [genreMovies4, setGenreMovies4] = useState([])
    const [genreMovies5, setGenreMovies5] = useState([])
    const [genreMovies6, setGenreMovies6] = useState([])
    const [genreMovies7, setGenreMovies7] = useState([])
    const [genreMovies8, setGenreMovies8] = useState([])
    const [genreMovies9, setGenreMovies9] = useState([])
    const [genreMovies10, setGenreMovies10] = useState([])
    const [genre, setGenre] = useState(28)


    const fetchGenreMovies = async (num, genre) => {
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}&with_genres=${genre}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setGenreMovies1(data.results)
            } else if (num === 2) {
                setGenreMovies2(data.results)
            } else if (num === 3) {
                setGenreMovies3(data.results)
            } else if (num === 4) {
                setGenreMovies4(data.results)
            } else if (num === 5) {
                setGenreMovies5(data.results)
            } else if (num === 6) {
                setGenreMovies6(data.results)
            } else if (num === 7) {
                setGenreMovies7(data.results)
            } else if (num === 8) {
                setGenreMovies8(data.results)
            } else if (num === 9) {
                setGenreMovies9(data.results)
            } else {
                setGenreMovies10(data.results)
            } 
        }

        )
        .catch(error => console.log(error))
        }

        function handleMovieGenreClick() {
            
            
            fetchGenreMovies(1, genre)
            fetchGenreMovies(2, genre)
            fetchGenreMovies(3, genre)
            fetchGenreMovies(4, genre)
            fetchGenreMovies(5, genre)
            fetchGenreMovies(6, genre)
            fetchGenreMovies(7, genre)
            fetchGenreMovies(8, genre)
            fetchGenreMovies(9, genre)
            fetchGenreMovies(10, genre)
            window.scrollTo(0, 0)
        }

        function handleMovieGenreHover(num) {
            let genreMovie = num
            setGenre(genreMovie)
        }

        function movieGenreToString() {
            return  genre === 28 ? "Action" :
                    genre === 12 ? "Adventure" :
                    genre === 16 ? "Animation" :
                    genre === 35 ? "Comedy" :
                    genre === 80 ? "Crime" :
                    genre === 99 ? "Documentary" :
                    genre === 18 ? "Drama" :
                    genre === 10751 ? "Family" :
                    genre === 14 ? "Fantasy" :
                    genre === 36 ? "History" :
                    genre === 27 ? "Horror" :
                    genre === 10402 ? "Music" :
                    genre === 9648 ? "Mystery" :
                    genre === 10749 ? "Romance" :
                    genre === 878 ? "Science Fiction" :
                    genre === 10770 ? "Tv" :
                    genre === 53 ? "Thriller" :
                    genre === 10752 ? "War" :
                     "Western" 
        }

        function movieStringGenreToNum(str) {
            return  str === "Action" ? 28 :
            str === "Adventure" ? 12 :
            str === "Animation" ? 16 :
            str === "Comedy" ? 35 :
            str === "Crime" ? 80 :
            str === "Documentary" ? 99 :
            str === "Drama" ? 18 :
            str === "Family" ? 10751 :
            str === "Fantasy" ? 14 :
            str === "History" ? 36 :
            str === "Horror" ? 27 :
            str === "Music" ? 10402 :
            str === "Mystery" ? 9648 :
            str === "Romance" ? 10749 :
            str === "Science Fiction" ? 878 :
            str === "Tv" ? 10770 :
            str === "Thriller" ? 53 :
            str === "War" ? 10752 :
             "Western" 
        }

        useEffect(() => {
            const path = window.location.pathname
            const splitPath = path.split('/')
            const cleanPath = splitPath.filter(item => item !== '')
            const pathGenre = cleanPath[2]
            let numberGenre = movieStringGenreToNum(pathGenre)
            fetchGenreMovies(1, numberGenre)
            fetchGenreMovies(2, numberGenre)
            fetchGenreMovies(3, numberGenre)
            fetchGenreMovies(4, numberGenre)
            fetchGenreMovies(5, numberGenre)
            fetchGenreMovies(6, numberGenre)
            fetchGenreMovies(7, numberGenre)
            fetchGenreMovies(8, numberGenre)
            fetchGenreMovies(9, numberGenre)
            fetchGenreMovies(10, numberGenre)
        }, [genre])
        
    
        return {genreMovies1, genreMovies2, genreMovies3, genreMovies4, genreMovies5, genreMovies6, genreMovies7, genreMovies8, genreMovies9, genreMovies10, fetchGenreMovies, handleMovieGenreClick, genre, setGenre, handleMovieGenreHover, movieGenreToString}
}


export default useApiMovieGenre