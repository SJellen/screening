import React, {
  useState,
  // , useEffect
} from "react";
import "../style/App.css";
import "../style/MediaQueries.css";
import Header from "../components/Header";
import Footer from "./Footer";
import MoviePage from "./MoviePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvPage from "./TvPage";
import SearchPage from "./SearchPage";
import PersonPage from "./PersonPage";
import WatchList from "./WatchList";
import MenuPage from "./MenuPage";
import MenuLinkPage from "./MenuLinkPage";
import SignIn from "./SignIn/SignIn";
import UserContext from "../UserContext";
// import Axios from 'axios'
import Home from "./Home";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  // useEffect(() => {
  //   const checkedLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token")
  //       if (token === null) {
  //        localStorage.setItem("auth-token", "")
  //       token = ""
  //       }
  //     const tokenRes = await Axios.post(
  //       "http://localhost:5000/users/tokenIsValid",
  //       null,
  //       { headers: {"x-auth-token" : token} }
  //     )
  //     if (tokenRes.data) {
  //       const userRes = await Axios.get("http://localhost:5000/users/", {
  //         headers: { "x-auth-token": token}
  //       })
  //       setUserData({
  //         user: userRes.data
  //       })
  //     }
  //   }

  //   checkedLoggedIn()

  // },[])

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviePage/*" element={<MoviePage />} />
            <Route path="/tvPage/*" element={<TvPage />} />
            <Route path="/personPage/*" element={<PersonPage />} />
            <Route path="/searchPage/*" element={<SearchPage />} />
            <Route path="/watchList/*" element={<WatchList />} />
            <Route path="/signIn/*" element={<SignIn />} />
            <Route path="/menuPage/*" element={<MenuPage />} />
            <Route path="/menuLinkPage/*" element={<MenuLinkPage />} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
