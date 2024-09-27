import React, { useContext, useState } from "react";
import { Context } from "../../../Context";
import episodePlaceholder from "../../../assets/episodePlaceholder.jpg";
import blankSquare from "../../../assets/placeholder.jpg";
import { Link } from "react-router-dom";

function TvEpisodesSeason() {
  const {
    tvSeasonArr,
    posterPath,
    dateSplitter,
    handlePersonClick,
    tvSeason,
    ratingTruncate,
  } = useContext(Context);
  const [showEpisodeCast, setEpisodeCast] = useState();

  function handleEpisodeTileClick(e, arr) {
    let selection = arr[e].id;
    setEpisodeCast(selection);
    if (selection === showEpisodeCast) {
      setEpisodeCast();
    }
  }

  const tvSeasonEpisodeTile =
    tvSeasonArr &&
    tvSeasonArr.map((show, index) => (
      <div key={show.id}>
        <div className="details-episode-card-season-container">
          <div
            className="details-episode-card-season-tile"
            style={{ width: showEpisodeCast === show.id ? "95%" : "" }}
            onClick={() => handleEpisodeTileClick(index, tvSeasonArr)}
          >
            <div className="details-episode-card-title">
              <span>{show.name}</span>
              {ratingTruncate(show)}
            </div>
            <div className="details-episode-season-img-overview-container">
              <div className="details-episode-card-img-season-container">
                <img
                  src={
                    show.still_path !== null
                      ? `${posterPath}${show.still_path}`
                      : episodePlaceholder
                  }
                  alt="poster"
                  className="details-episode-card-img-season"
                />
              </div>
              <div className="details-episode-card-overview-season-container">
                <span>{show.overview}</span>
              </div>
            </div>
            <div className="details-episode-card-stat-box">
              <span>Season {show.season_number}</span>
              <span>Episode {show.episode_number}</span>
              <span>{show.air_date && dateSplitter(show.air_date)}</span>
            </div>
          </div>
        </div>
        {showEpisodeCast === show.id ? (
          <div className="details-slider-container-episode" key={show.id}>
            {show.guest_stars.length > 0 ? (
              <div>
                <span className="details-slider-title-episode-dropdown">
                  Guest Stars
                </span>
                <div className="slider-container-episode">
                  <div className="slider-sub-container-episode">
                    {show.guest_stars &&
                      show.guest_stars.map((item, index) => (
                        <div
                          className="slider-card-episode"
                          key={item.credit_id}
                        >
                          <Link to={`/personPage/${item.id}`}>
                            <img
                              className="slider-card-episode-image"
                              src={
                                item.profile_path !== null
                                  ? `${posterPath}${item.profile_path}`
                                  : blankSquare
                              }
                              alt="poster"
                              onClick={() =>
                                handlePersonClick(index, show.guest_stars)
                              }
                            />
                          </Link>
                          <span className="slider-name-episode">
                            {item.name}
                          </span>
                          <span className="slider-character-episode">
                            {item.character}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {show.crew.length > 0 ? (
              <div key={show.id}>
                <span className="details-slider-title-episode-dropdown">
                  Crew
                </span>
                <div className="slider-container-episode">
                  <div className="slider-sub-container-episode">
                    {show.crew &&
                      show.crew.map((item, index) => (
                        <div
                          className="slider-card-episode"
                          key={item.credit_id}
                        >
                          <Link to={`/personPage/${item.id}`}>
                            <img
                              className="slider-card-episode-image"
                              src={
                                item.profile_path !== null
                                  ? `${posterPath}${item.profile_path}`
                                  : blankSquare
                              }
                              alt="poster"
                              onClick={() =>
                                handlePersonClick(index, show.crew)
                              }
                            />
                          </Link>
                          <span className="slider-name-episode">
                            {item.name}
                          </span>
                          <span className="slider-character-episode">
                            {item.job}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    ));

  return (
    <div>
      <span className="details-slider-title-episode-season-number">
        {tvSeason !== 0 ? "Season" : "Specials"}{" "}
        {tvSeason !== 0 ? tvSeason : ""}
      </span>
      {tvSeasonEpisodeTile}
    </div>
  );
}

export default TvEpisodesSeason;
