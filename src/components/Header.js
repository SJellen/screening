import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Header.css';
import {Link, useHistory} from 'react-router-dom'





function Header() {

    const {fetchSearchResults, setSearchTerm, setMediaType, handleLogoClick, watchListTv, watchListMovie, isLoggedIn}  = useContext(Context)
    const history = useHistory()

    function handleSearch(event) {
        let searchWord = event.target.value
        setSearchTerm(searchWord)
        setMediaType('search')
    }

    function handleEnter() {
        history.push("/searchPage")
        fetchSearchResults()
        document.getElementById('search-bar').value = ''
    }

    let watchListTotal = watchListTv.length + watchListMovie.length



    
    

   
        return (
            <div className="header">
            <div className="header-left-container">
            <Link to='/'  className="header-title-link"><span className="title" onClick={handleLogoClick}>Screening</span></Link>
                   
            <Link to="/menuPage/" style={{textDecoration: "none"}}>
                <div className="menu-box">
                        <i className="im im-menu"></i>
                    <span className="menu-span">Menu</span> 
                </div>
            </Link> 
            </div>
                
                
                <div className="input-container">
                  
                   
                   <input
                        id="search-bar"
                        className="input"
                        type="text"
                        placeholder="Search Screening"
                        maxLength="20"
                        onChange={handleSearch}
                        onKeyPress={(e) => e.key === 'Enter' ? handleEnter() : null}
                     />
                     <button className="search-button" onClick={handleEnter}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"  /> </svg>
                     </button>
                </div>

                <div className="header-watchlist-box-container">
                   <Link to="/watchList/" style={{textDecoration: "none"}}>
                    <div className="header-right-container">
                    <i className="im im-bookmark im-bookmark-header" style={{color: watchListTotal > 0 ?  "#E1B517" : ''}}></i><span className="header-watchlist" >Watchlist</span></div>
                </Link> 
                </div>
                
                { isLoggedIn ? 
                <Link to="/watchList/" style={{textDecoration: "none"}}>
                    <div className="header-right-container"><i className="im im-user-circle">{watchListTotal > 0 ? <span className="watchListCount">{watchListTotal}</span> : ''}</i></div>
                </Link> : 
                <div className="header-right-container"><span className="header-signIn">Sign In</span></div>



                }

                
                
            </div>
        )
}



export default Header