import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMenuTopRatedTvPage() {
    const { posterPath, handleTvClick, handleRibbonTv, watchListTv,  menuTopRatedTvPage1, menuTopRatedTvPage2, menuTopRatedTvPage3, menuTopRatedTvPage4, menuTopRatedTvPage5, menuTopRatedTvPage6, ratingTruncate}  = useContext(Context)

  
 
    const menuTopRatedTvTile1 = menuTopRatedTvPage1.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <span className="watchlist-ribbon">
        { watchListTv.includes(show) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTopRatedTvPage1)}/></Link>
        {ratingTruncate(show)}
        <span className="slider-title">{show.name}</span>
        </div>
        )

    const menuTopRatedTvTile2 = menuTopRatedTvPage2.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage2)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage2)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTopRatedTvPage2)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTopRatedTvTile3 = menuTopRatedTvPage3.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage3)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage3)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTopRatedTvPage3)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTopRatedTvTile4 = menuTopRatedTvPage4.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage4)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage4)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTopRatedTvPage4)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTopRatedTvTile5 = menuTopRatedTvPage5.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage5)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage5)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTopRatedTvPage5)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuTopRatedTvTile6 = menuTopRatedTvPage6.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage6)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuTopRatedTvPage6)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuTopRatedTvPage6)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )

        return {menuTopRatedTvTile1, menuTopRatedTvTile2, menuTopRatedTvTile3, menuTopRatedTvTile4, menuTopRatedTvTile5, menuTopRatedTvTile6}
}


export default useMenuTopRatedTvPage