import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'


function useMenuTopRatedPage() {
    const {posterPath, handleMovieClick, handleRibbonMovie, handleMenuTopRatedClick, menuTopRatedMoviesPage1, menuTopRatedMoviesPage2, menuTopRatedMoviesPage3, menuTopRatedMoviesPage4, menuTopRatedMoviesPage5, menuTopRatedMoviesPage6, watchListMovie}  = useContext(Context)

  
    const menuTopRatedPageTile1 = menuTopRatedMoviesPage1.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuTopRatedMoviesPage1)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )

    const menuTopRatedPageTile2 = menuTopRatedMoviesPage2.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage2)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage2)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuTopRatedMoviesPage2)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )  
        
        
    const menuTopRatedPageTile3 = menuTopRatedMoviesPage3.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage3)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage3)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuTopRatedMoviesPage3)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        ) 
        
    const menuTopRatedPageTile4 = menuTopRatedMoviesPage4.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage4)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage4)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuTopRatedMoviesPage4)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )

    const menuTopRatedPageTile5 = menuTopRatedMoviesPage5.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage5)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage5)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuTopRatedMoviesPage5)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )  
        
        
    const menuTopRatedPageTile6 = menuTopRatedMoviesPage6.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage6)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuTopRatedMoviesPage6)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuTopRatedMoviesPage6)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )    

        return {menuTopRatedPageTile1, menuTopRatedPageTile2, menuTopRatedPageTile3, menuTopRatedPageTile4, menuTopRatedPageTile5, menuTopRatedPageTile6}
}



export default useMenuTopRatedPage