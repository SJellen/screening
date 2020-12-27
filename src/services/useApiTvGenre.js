import {useState, useEffect} from 'react'

function useApiMovieGenre() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [genreTv1, setGenreTv1] = useState([])
    const [genreTv2, setGenreTv2] = useState([])
    const [genreTv3, setGenreTv3] = useState([])
    const [genreTv4, setGenreTv4] = useState([])
    const [genreTv5, setGenreTv5] = useState([])
    const [genreTv6, setGenreTv6] = useState([])
    const [genreTv7, setGenreTv7] = useState([])
    const [genreTv8, setGenreTv8] = useState([])
    const [genreTv9, setGenreTv9] = useState([])
    const [genreTv10, setGenreTv10] = useState([])
    const [genreTv, setGenreTv] = useState(28)


    const fetchGenreTv = async (num, genre) => {
        await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}&with_genres=${genre}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setGenreTv1(data.results)
            } else if (num === 2) {
                setGenreTv2(data.results)
            } else if (num === 3) {
                setGenreTv3(data.results)
            } else if (num === 4) {
                setGenreTv4(data.results)
            } else if (num === 5) {
                setGenreTv5(data.results)
            } else if (num === 6) {
                setGenreTv6(data.results)
            } else if (num === 7) {
                setGenreTv7(data.results)
            } else if (num === 8) {
                setGenreTv8(data.results)
            } else if (num === 9) {
                setGenreTv9(data.results)
            } else {
                setGenreTv10(data.results)
            } 
        }

        )
        .catch(error => console.log(error))
        }

        function handleTvGenreClick() {
            fetchGenreTv(1, genreTv)
            fetchGenreTv(2, genreTv)
            fetchGenreTv(3, genreTv)
            fetchGenreTv(4, genreTv)
            fetchGenreTv(5, genreTv)
            fetchGenreTv(6, genreTv)
            fetchGenreTv(7, genreTv)
            fetchGenreTv(8, genreTv)
            fetchGenreTv(9, genreTv)
            fetchGenreTv(10, genreTv)
            window.scrollTo(0, 0)
        }

        function handleTvGenreHover(num) {
            let genreTV = num
            setGenreTv(genreTV)
        }

        function tvGenreToString() {
            return  genreTv === 28 ? "Action" :
                    genreTv === 12 ? "Adventure" :
                    genreTv === 16 ? "Animation" :
                    genreTv === 35 ? "Comedy" :
                    genreTv === 80 ? "Crime" :
                    genreTv === 99 ? "Documentary" :
                    genreTv === 18 ? "Drama" :
                    genreTv === 10751 ? "Family" :
                    genreTv === 14 ? "Fantasy" :
                    genreTv === 36 ? "History" :
                    genreTv === 27 ? "Horror" :
                    genreTv === 10402 ? "Music" :
                    genreTv === 9648 ? "Mystery" :
                    genreTv === 10749 ? "Romance" :
                    genreTv === 878 ? "Science Fiction" :
                    genreTv === 10770 ? "Tv" :
                    genreTv === 53 ? "Thriller" :
                    genreTv === 10752 ? "War" :
                     "Western" 
        }

        function tvStringGenreToNum(str) {
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
             37 
        }

        useEffect(() => {
            const path = window.location.pathname
            const splitPath = path.split('/')
            const cleanPath = splitPath.filter(item => item !== '')
            const pathGenre = cleanPath[2]
            // console.log(pathGenre)
            let numberGenre = tvStringGenreToNum(pathGenre)
            fetchGenreTv(1, numberGenre)
            fetchGenreTv(2, numberGenre)
            fetchGenreTv(3, numberGenre)
            fetchGenreTv(4, numberGenre)
            fetchGenreTv(5, numberGenre)
            fetchGenreTv(6, numberGenre)
            fetchGenreTv(7, numberGenre)
            fetchGenreTv(8, numberGenre)
            fetchGenreTv(9, numberGenre)
            fetchGenreTv(10, numberGenre) 
             // eslint-disable-next-line react-hooks/exhaustive-deps 
        }, [genreTv])
        
        
        return {genreTv1, genreTv2, genreTv3, genreTv4, genreTv5, genreTv6, genreTv7, genreTv8, genreTv9, genreTv10, fetchGenreTv, handleTvGenreClick, genreTv, setGenreTv, handleTvGenreHover, tvGenreToString}
}


export default useApiMovieGenre