import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

function useSearchResultsTv() {
    const {posterPath,handleTvClick,searchResultsTv, handleRibbonTv, watchListTv, ratingTruncate}  = useContext(Context)

    const searchResultsTvTile = searchResultsTv.map((show, index) => 
        <div className="slider-card" key={show.id}> 
          <span className="watchlist-ribbon">
            { watchListTv.includes(show) ?
            <BookmarkIcon className="im im-bookmark im-bookmark-slider"  fontSize='x-large' onClick={() => handleRibbonTv(index, searchResultsTv)} style={{color: "#E1B517"}} />
            :
            <BookmarkAddIcon className="im im-bookmark im-bookmark-slider" fontSize='x-large' onClick={() => handleRibbonTv(index, searchResultsTv)} style={{color: ""}} />
        }
          </span>
          <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, searchResultsTv, true)}/></Link>
          {ratingTruncate(show)}
          <span className="slider-title">{show.name}</span>
        </div>
        )
        return {searchResultsTvTile}
}

export default useSearchResultsTv