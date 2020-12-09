import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMenuOnAirTvPage() {
    const { posterPath, handleTvClick, handleRibbonTv, watchListTv,  menuOnAirTvPage1, menuOnAirTvPage2, menuOnAirTvPage3, menuOnAirTvPage4, menuOnAirTvPage5, menuOnAirTvPage6, ratingTruncate}  = useContext(Context)

  
 
    const menuOnAirTvTile1 = menuOnAirTvPage1.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <span className="watchlist-ribbon">
        { watchListTv.includes(show) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuOnAirTvPage1)}/></Link>
        {ratingTruncate(show)}
        <span className="slider-title">{show.name}</span>
        </div>
        )

    const menuOnAirTvTile2 = menuOnAirTvPage2.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage2)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage2)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuOnAirTvPage2)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuOnAirTvTile3 = menuOnAirTvPage3.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage3)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage3)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuOnAirTvPage3)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuOnAirTvTile4 = menuOnAirTvPage4.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage4)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage4)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuOnAirTvPage4)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuOnAirTvTile5 = menuOnAirTvPage5.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage5)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage5)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuOnAirTvPage5)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuOnAirTvTile6 = menuOnAirTvPage6.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage6)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuOnAirTvPage6)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuOnAirTvPage6)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )

        return {menuOnAirTvTile1, menuOnAirTvTile2, menuOnAirTvTile3, menuOnAirTvTile4, menuOnAirTvTile5, menuOnAirTvTile6}
}


export default useMenuOnAirTvPage