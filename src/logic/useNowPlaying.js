import { useContext } from 'react'
import {Context} from '../Context'

function useNowPlaying() {
    const {posterPath, nowPlaying}  = useContext(Context)

    const nowPlayingTile = nowPlaying.map(movie => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={`${posterPath}${movie.poster_path}`} alt="poster"/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {nowPlayingTile}
}



export default useNowPlaying