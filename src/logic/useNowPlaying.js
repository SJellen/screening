import { useContext } from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useNowPlaying() {
    const {posterPath, nowPlaying, setItemPageOpen, setMovieId, fetchMovieDetails, fetchMovieCredits}  = useContext(Context)

    function handleNowPlayingClick(e) {
        let selection = nowPlaying[e].id
        setMovieId(selection)
        fetchMovieDetails(selection)
        fetchMovieCredits(selection)
        setItemPageOpen(prevState => !prevState)
        
    }

    const nowPlayingTile = nowPlaying.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleNowPlayingClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {nowPlayingTile}
}



export default useNowPlaying