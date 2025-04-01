import React, { useContext } from "react";
import { Context } from "../../Context";
import TvEpisodesMain from "../Tv/Episodes/TvEpisodesMain";
import EpisodesLanding from "../Tv/Episodes/EpisodesLanding";
import TvEpisodesSeason from "../Tv/Episodes/TvEpisodesSeason";
import { Routes, Route } from "react-router-dom";

function TvEpisodes() {
  const { tvDetails, tvSeason } = useContext(Context);
  const { tvEpisodesTile } = TvEpisodesMain();

  return (
    <div className="details-episode-container">
      <div className="details-season-number-slider-container">
        <div className="details-season-number-container">
          {tvEpisodesTile}
          <span className="details-episode-season-title">
            {tvDetails.seasons && tvDetails.seasons.length > 1
              ? "Seasons"
              : "Season"}
          </span>
        </div>
      </div>
      <div className="details-season-switch">
        <Routes>
          <Route path="/" element={<EpisodesLanding />} />
          <Route path={`/${tvSeason}`} element={<TvEpisodesSeason />} />
        </Routes>
      </div>
    </div>
  );
}

export default TvEpisodes;
