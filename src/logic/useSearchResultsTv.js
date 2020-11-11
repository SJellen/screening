import { useContext } from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useSearchResultsTv() {
    const {posterPath, setItemPageOpen, setMovieId, fetchMovieDetails, setTvId, fetchTvDetails, setMediaType, searchResultsTv, fetchTvCredits}  = useContext(Context)


    function handleSearchTvClick(e) {
        let selection = searchResultsTv[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        fetchTvCredits(selection)
        setItemPageOpen(true)
        
    }

    const searchResultsTvTile = searchResultsTv.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleSearchTvClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {searchResultsTvTile}
}



export default useSearchResultsTv