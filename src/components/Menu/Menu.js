import React, {useContext} from 'react'
import {Context} from '../../Context'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'



function Menu() {

    const {handleMenuPopularClick, handleMenuTopRatedClick, handleMenuUpcomingClick, handleMenuNowPlayingClick, handleMenuMostMoneyClick, handleMenuPopularTvClick, handleMenuTopRatedTvClick, handleMenuOnAirTvClick, handleMenuAiringTodayTvClick, handleMenuTrendingMoviesClick, handleMenuTrendingTvClick} = useContext(Context)


    return (
        // <Switch>
       
             <div className="menu-page">
        <div className="menu-list-container">
        <div className="menu-list">
            <div className="menu-title-box">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E1B517"><path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg><span className="menu-title-box-name">Movies</span></span>
            </div>
            <ul className="menu-media-list">
                <Link to={"/menuLinkPage/trendingMovies/"} style={{textDecoration: "none"}} onClick={handleMenuTrendingMoviesClick} className="menu-media-list-link"><li>Trending Movies</li></Link>
                <Link to={"/menuLinkPage/popularMovies/"} style={{textDecoration: "none"}} onClick={handleMenuPopularClick} className="menu-media-list-link"><li>Popular Movies</li></Link>
                <Link to={"/menuLinkPage/topRatedMovies/"} style={{textDecoration: "none"}} onClick={handleMenuTopRatedClick} className="menu-media-list-link"><li>Top Rated Movies</li></Link>
                <Link to={"/menuLinkPage/nowPlayingMovies/"} style={{textDecoration: "none"}} onClick={handleMenuNowPlayingClick} className="menu-media-list-link"><li>Movies Playing Now</li></Link>
                <Link to={"/menuLinkPage/upcomingMovies/"} style={{textDecoration: "none"}} onClick={handleMenuUpcomingClick} className="menu-media-list-link"><li>Upcoming Movies</li></Link>
                <Link to={"/menuLinkPage/mostMoneyMovies/"} style={{textDecoration: "none"}} onClick={handleMenuMostMoneyClick} className="menu-media-list-link"><li>Highest Grossing Movies</li></Link>
                
               
            </ul>
            </div>

            <div className="menu-list">
            <div className="menu-title-box">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E1B517"><path d="M20.327 13.099l-.427-.427.71-.71.424.427-.707.71zm-.417 4.467l-.708-.709-.428.427.707.709.429-.427zm4.09-11.566v16h-24v-16h10.888l-2.888-3.375.781-.625 3.219 3.75 3.219-3.75.781.625-2.888 3.375h10.888zm-21.049 12.993c.674.671 3.362 1.007 6.05 1.007 2.687 0 5.375-.336 6.049-1.007.633-.632.95-2.851.95-5.059 0-2.181-.31-4.351-.93-4.97-.637-.635-3.399-.964-6.141-.964-2.681 0-5.346.314-5.997.964-.603.601-.913 2.668-.931 4.786-.018 2.268.299 4.594.95 5.243zm15.049-5.9c0 1.021.796 1.851 1.802 1.904 1.097.059 2.009-.814 2.009-1.904 0-1.049-.85-1.906-1.907-1.906-1.048 0-1.904.847-1.904 1.906zm4-3.093v-.555h-4v.555h4zm-4 7.988c0 1.062.86 1.907 1.903 1.907 1.058 0 1.907-.858 1.907-1.907s-.85-1.906-1.907-1.906c-1.047 0-1.903.846-1.903 1.906zm4-9.988h-4v.555h4v-.555z"/></svg><span className="menu-title-box-name">Tv</span></span>
            </div>
            <ul className="menu-media-list">
                <Link to={"/menuLinkPage/trendingTv/"} style={{textDecoration: "none"}} onClick={handleMenuTrendingTvClick} className="menu-media-list-link"><li>Trending Tv Shows</li></Link>
                <Link to={"/menuLinkPage/popularTv/"} style={{textDecoration: "none"}} onClick={handleMenuPopularTvClick} className="menu-media-list-link"><li>Popular Tv Shows</li></Link>
                <Link to={"/menuLinkPage/topRatedTv/"} style={{textDecoration: "none"}} onClick={handleMenuTopRatedTvClick} className="menu-media-list-link"><li>Top Rated Tv Shows</li></Link>
                <Link to={"/menuLinkPage/onAirTv/"} style={{textDecoration: "none"}} onClick={handleMenuOnAirTvClick} className="menu-media-list-link"><li>Shows On Now</li></Link>
                <Link to={"/menuLinkPage/airingTodayTv/"} style={{textDecoration: "none"}} onClick={handleMenuAiringTodayTvClick} className="menu-media-list-link"><li>Shows Airing Today</li></Link>
            </ul>
            </div>

            <div className="menu-list">
            <div className="menu-title-box">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E1B517"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg><span className="menu-title-box-name">People</span></span>
            </div>
            <ul className="menu-media-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
            </div>

        </div>
       





        </div>
        
       
        // </Switch>
    )

}


export default Menu