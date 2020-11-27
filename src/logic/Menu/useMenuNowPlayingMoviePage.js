import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'


function useMenuNowPlayingMoviePage() {
    const {posterPath, handleMovieClick, handleRibbonMovie, watchListMovie, menuNowPlayingMoviesPage1, menuNowPlayingMoviesPage2, menuNowPlayingMoviesPage3,menuNowPlayingMoviesPage4,menuNowPlayingMoviesPage5,menuNowPlayingMoviesPage6 }  = useContext(Context)

  
    const menuNowPlayingMoviesPageTile1 = menuNowPlayingMoviesPage1.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuNowPlayingMoviesPage1)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )

    const menuNowPlayingMoviesPageTile2 = menuNowPlayingMoviesPage2.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage2)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage2)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuNowPlayingMoviesPage2)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )  
        
        
    const menuNowPlayingMoviesPageTile3 = menuNowPlayingMoviesPage3.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage3)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage3)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuNowPlayingMoviesPage3)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        ) 
        
    const menuNowPlayingMoviesPageTile4 = menuNowPlayingMoviesPage4.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage4)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage4)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuNowPlayingMoviesPage4)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )

    const menuNowPlayingMoviesPageTile5 = menuNowPlayingMoviesPage5.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage5)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage5)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuNowPlayingMoviesPage5)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )  
        
        
    const menuNowPlayingMoviesPageTile6 = menuNowPlayingMoviesPage6.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage6)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuNowPlayingMoviesPage6)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuNowPlayingMoviesPage6)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )    

        return {menuNowPlayingMoviesPageTile1, menuNowPlayingMoviesPageTile2, menuNowPlayingMoviesPageTile3, menuNowPlayingMoviesPageTile4, menuNowPlayingMoviesPageTile5, menuNowPlayingMoviesPageTile6}
}



export default useMenuNowPlayingMoviePage