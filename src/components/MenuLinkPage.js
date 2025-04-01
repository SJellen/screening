import React from "react";
import "../style/ItemPage.css";
import { Link, Routes, Route } from "react-router-dom";
import MenuPopularMovies from "./Menu/MenuPopularMovies";
import MenuTopRatedMovies from "./Menu/MenuTopRatedMovies";
import MenuUpcomingMovies from "./Menu/MenuUpcomingMovies";
import MenuNowPlayingMovies from "./Menu/MenuNowPlayingMovies";
import MenuMostMoneyMovies from "./Menu/MenuMostMoneyMovies";
import MenuPopularTv from "./Menu/MenuPopularTv";
import MenuTopRatedTv from "./Menu/MenuTopRatedTv";
import MenuOnAirTv from "./Menu/MenuOnAirTv";
import MenuAiringTodayTv from "./Menu/MenuAiringTodayTv";
import MenuTrendingMovies from "./Menu/MenuTrendingMovies";
import MenuTrendingTv from "./Menu/MenuTrendingTv";
import MenuTrendingPerson from "./Menu/MenuTrendingPerson";
import MenuPopularPerson from "./Menu/MenuPopularPerson";
import MenuMovieGenre from "./Menu/MenuMovieGenre";
import MenuTvGenre from "./Menu/MenuTvGenre";
import CloseIcon from "@mui/icons-material/Close";

function MenuLinkPage() {
  return (
    <div className="item-page-container">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="item-page-close-container">
          <CloseIcon className="menu-page-close" />
        </div>
      </Link>
      <Routes>
        <Route path="/popularMovies" element={<MenuPopularMovies />} />
        <Route path="/topRatedMovies" element={<MenuTopRatedMovies />} />
        <Route path="/upcomingMovies" element={<MenuUpcomingMovies />} />
        <Route path="/nowPlayingMovies" element={<MenuNowPlayingMovies />} />
        <Route path="/mostMoneyMovies" element={<MenuMostMoneyMovies />} />
        <Route path="/popularTv" element={<MenuPopularTv />} />
        <Route path="/topRatedTv" element={<MenuTopRatedTv />} />
        <Route path="/onAirTv" element={<MenuOnAirTv />} />
        <Route path="/airingTodayTv" element={<MenuAiringTodayTv />} />
        <Route path="/trendingMovies" element={<MenuTrendingMovies />} />
        <Route path="/trendingTv" element={<MenuTrendingTv />} />
        <Route path="/popularPerson" element={<MenuPopularPerson />} />
        <Route path="/trendingPerson" element={<MenuTrendingPerson />} />
        <Route path="/movieGenre/*" element={<MenuMovieGenre />} />
        <Route path="/tvGenre/*" element={<MenuTvGenre />} />
      </Routes>
    </div>
  );
}

export default MenuLinkPage;
