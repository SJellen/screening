import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useWatchListTv() {
    const {posterPath, watchListTv, handleRibbonTv, handleTvClick}  = useContext(Context)


    const watchListTvTile = watchListTv.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <span className="watchlist-ribbon">
        { watchListTv.includes(show) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, watchListTv)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, watchListTv)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/tvPage/${show.id}`} ><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, watchListTv)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {watchListTvTile}
}



export default useWatchListTv