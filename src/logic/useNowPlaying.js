import { useContext } from 'react'
import {Context} from '../Context'

function useNowPlaying() {
    const {posterPath, nowPlaying, setItemBoxOpen, setMovieId, fetchMovieDetails}  = useContext(Context)

    function handleNowPlayingClick(e) {
        let selection = nowPlaying[e].id
        setMovieId(selection)
        fetchMovieDetails(selection)
        setItemBoxOpen(prevState => !prevState)
        
    }

    const nowPlayingTile = nowPlaying.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster" onClick={() => handleNowPlayingClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {nowPlayingTile}
}



export default useNowPlaying