import React, { useContext } from "react";
import { Context } from "../Context";
import useSearchResultsMovie from "../logic/Search/useSearchResultsMovie";
import useSearchResultsTv from "../logic/Search/useSearchResultsTv";
import useSearchResultsPerson from "../logic/Search/useSearchResultsPerson";

function Search() {
  const {
    searchTerm,
    searchResultsTv,
    searchResultsMovie,
    searchResultsPerson,
  } = useContext(Context);
  const { searchResultsMovieTile } = useSearchResultsMovie();
  const { searchResultsTvTile } = useSearchResultsTv();
  const { searchResultsPersonTile } = useSearchResultsPerson();

  return (
    <div className="slider-container">
      <h1 className="results-title">Results for {searchTerm}</h1>
      {searchResultsMovie.length > 0 ? (
        <div>
          <span className="slider-label">Results: Movies</span>
          <div className="slider-sub-container">{searchResultsMovieTile}</div>
        </div>
      ) : (
        ""
      )}
      {searchResultsTv && searchResultsTv.length > 0 ? (
        <div>
          <span className="slider-label">Results: TV</span>
          <div className="slider-sub-container">{searchResultsTvTile}</div>
        </div>
      ) : (
        ""
      )}
      {searchResultsPerson && searchResultsPerson.length > 0 ? (
        <div>
          <span className="slider-label">Results: People</span>
          <div className="slider-sub-container">{searchResultsPersonTile}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
