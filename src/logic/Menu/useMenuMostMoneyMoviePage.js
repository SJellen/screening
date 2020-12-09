import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'


function useMenuMostMoneyPage() {
    const {posterPath, handleMovieClick, handleRibbonMovie, watchListMovie, menuMostMoneyMovies1, menuMostMoneyMovies2, menuMostMoneyMovies3, menuMostMoneyMovies4, menuMostMoneyMovies5, menuMostMoneyMovies6, ratingTruncate}  = useContext(Context)

  
   
    const menuMostMoneyMoviesPageTile1 = menuMostMoneyMovies1.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies1)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies1)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() =>  handleMovieClick(index, menuMostMoneyMovies1)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )

    const menuMostMoneyMoviesPageTile2 = menuMostMoneyMovies2.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies2)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies2)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuMostMoneyMovies2)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )  
        
        
    const menuMostMoneyMoviesPageTile3 = menuMostMoneyMovies3.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies3)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies3)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuMostMoneyMovies3)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        ) 
        
    const menuMostMoneyMoviesPageTile4 = menuMostMoneyMovies4.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies4)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies4)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuMostMoneyMovies4)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )

    const menuMostMoneyMoviesPageTile5 = menuMostMoneyMovies5.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies5)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies5)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuMostMoneyMovies5)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )  
        
        
    const menuMostMoneyMoviesPageTile6 = menuMostMoneyMovies6.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <span className="watchlist-ribbon">
       { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies6)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, menuMostMoneyMovies6)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieClick(index, menuMostMoneyMovies6)}/></Link>
        {ratingTruncate(movie)}
        <span className="slider-title" >{movie.title}</span>
        
        </div>
        )    

        return {menuMostMoneyMoviesPageTile1, menuMostMoneyMoviesPageTile2, menuMostMoneyMoviesPageTile3, menuMostMoneyMoviesPageTile4, menuMostMoneyMoviesPageTile5, menuMostMoneyMoviesPageTile6}
}



export default useMenuMostMoneyPage