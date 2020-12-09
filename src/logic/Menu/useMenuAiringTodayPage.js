import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMenuAiringTodayPage() {
    const { posterPath, handleTvClick, handleRibbonTv, watchListTv,  menuAiringTodayTvPage1, menuAiringTodayTvPage2, menuAiringTodayTvPage3, menuAiringTodayTvPage4, menuAiringTodayTvPage5, menuAiringTodayTvPage6, ratingTruncate}  = useContext(Context)

  
 
    const menuAiringTodayTvTile1 = menuAiringTodayTvPage1.map((show, index) => 
        
        
        <div className="slider-card" key={show.id}> 
        <span className="watchlist-ribbon">
        { watchListTv.includes(show) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuAiringTodayTvPage1)}/></Link>
        {ratingTruncate(show)}
        <span className="slider-title">{show.name}</span>
        </div>
        )

    const menuAiringTodayTvTile2 = menuAiringTodayTvPage2.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage2)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage2)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuAiringTodayTvPage2)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuAiringTodayTvTile3 = menuAiringTodayTvPage3.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage3)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage3)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuAiringTodayTvPage3)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuAiringTodayTvTile4 = menuAiringTodayTvPage4.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage4)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage4)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuAiringTodayTvPage4)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuAiringTodayTvTile5 = menuAiringTodayTvPage5.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage5)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage5)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuAiringTodayTvPage5)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )
    
    const menuAiringTodayTvTile6 = menuAiringTodayTvPage6.map((show, index) => 
    
    
    <div className="slider-card" key={show.id}> 
    <span className="watchlist-ribbon">
    { watchListTv.includes(show) ?
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage6)} style={{color: "#E1B517"}}></i> :
        <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, menuAiringTodayTvPage6)} style={{color: ""}}></i>
    }
    </span>
    <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, menuAiringTodayTvPage6)}/></Link>
    {ratingTruncate(show)}
    <span className="slider-title">{show.name}</span>
    </div>
    )

        return {menuAiringTodayTvTile1, menuAiringTodayTvTile2, menuAiringTodayTvTile3, menuAiringTodayTvTile4, menuAiringTodayTvTile5, menuAiringTodayTvTile6}
}


export default useMenuAiringTodayPage