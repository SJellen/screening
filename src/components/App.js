import React, { useState, useEffect } from 'react'
import '../style/App.css';
import '../style/MediaQueries.css'
import Header from '../components/Header'
import Footer from './Footer'
import MoviePage from './MoviePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TvPage from './TvPage';
import SearchPage from './SearchPage'
import PersonPage from './PersonPage'
import WatchList from './WatchList'
import MenuPage from './MenuPage'
import MenuLinkPage from './MenuLinkPage'
import SignIn from './SignIn/SignIn'
import UserContext from '../UserContext'
import Axios from 'axios'
import Home from './Home'



function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const checkedLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
        if (token === null) {
         localStorage.setItem("auth-token", "")
        token = "" 
        } 
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null, 
        { headers: {"x-auth-token" : token} }
      )
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token}
        })
        setUserData({
          user: userRes.data
        })
      }
    }

    checkedLoggedIn() 

  },[])


  return (
    <Router>
    <UserContext.Provider value={{userData, setUserData}}>
       <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/moviePage/" component={MoviePage} />
          <Route path="/tvPage/" component={TvPage} />
          <Route path="/personPage/" component={PersonPage} />
          <Route path="/searchPage/" component={SearchPage} />
          <Route path="/watchList/" component={WatchList} />
          <Route path="/signIn/" component={SignIn} />
          <Route path="/menuPage/" component={MenuPage} />
          <MenuLinkPage />
        </Switch>
      <Footer />
    </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
