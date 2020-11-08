import { useContext } from 'react'
import {Context} from '../Context'

function useSearchResultsTv() {
    const {posterPath, setItemBoxOpen, setMovieId, fetchMovieDetails, setTvId, fetchTvDetails, setMediaType, searchResultsTv}  = useContext(Context)


    function handleSearchTvClick(e) {
        let selection = searchResultsTv[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        setItemBoxOpen(true)
        
    }

    const searchResultsTvTile = searchResultsTv.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <img  src={`${posterPath}${show.poster_path}`} alt="poster" onClick={() => handleSearchTvClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {searchResultsTvTile}
}



export default useSearchResultsTv