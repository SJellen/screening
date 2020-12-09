import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMenuTrendingTvPage() {
    const { posterPath, handleTvClick, handleRibbonTv, watchListTv,   menuTrendingTvPage1, menuTrendingTvPage2, menuTrendingTvPage3, menuTrendingTvPage4, menuTrendingTvPage5, menuTrendingTvPage6, ratingTruncate }  = useContext(Context)

  
 
    const menuTrendingTvTile1 = menuTrendingTvPage1.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <span className="watchlist-ribbon">
        { watchListTv.includes(show) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTrendingTvPage1)}/></Link>
        {ratingTruncate(show)}
        <span className="slider-title">{show.name}</span>
        </div>
        )

    const menuTrendingTvTile2 = menuTrendingTvPage2.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage2)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage2)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTrendingTvPage2)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTrendingTvTile3 = menuTrendingTvPage3.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage3)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage3)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTrendingTvPage3)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTrendingTvTile4 = menuTrendingTvPage4.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage4)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage4)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTrendingTvPage4)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTrendingTvTile5 = menuTrendingTvPage5.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage5)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage5)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTrendingTvPage5)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTrendingTvTile6 = menuTrendingTvPage6.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage6)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTrendingTvPage6)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTrendingTvPage6)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )

        return {menuTrendingTvTile1, menuTrendingTvTile2, menuTrendingTvTile3, menuTrendingTvTile4, menuTrendingTvTile5, menuTrendingTvTile6}
}


export default useMenuTrendingTvPage