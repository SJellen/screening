import React, { useContext } from "react";
import { Context } from "../../Context";

function TvDetails() {
  const { tvDetails, posterPathSmall } = useContext(Context);
  const {
    id,
    genres,
    production_companies,
    production_countries,
    networks,
    created_by,
  } = tvDetails;

  const genrelist =
    genres &&
    genres.map((genre) => (
      <div key={genre.id}>
        <li className="movie-details-list-item">{genre.name}</li>
      </div>
    ));

  const productionCountriesList =
    production_countries &&
    production_countries.map((country, index) => (
      <div key={index}>
        <li className="movie-details-list-item">{country.name}</li>
      </div>
    ));

  const productionCompaniesList =
    production_companies &&
    production_companies.map((company) => (
      <div key={company.id}>
        <li className="movie-details-list-item">
          <span>
            {company.logo_path !== null ? (
              <img
                className="movie-details-list-logo"
                src={`${posterPathSmall}${company.logo_path}`}
                alt="company logo"
              />
            ) : (
              ""
            )}
          </span>
          {company.name}
        </li>
      </div>
    ));

  const networkList =
    networks &&
    networks.map((company) => (
      <div key={company.id}>
        <li className="movie-details-list-item">
          <span>
            {company.logo_path !== null ? (
              <img
                className="movie-details-list-logo"
                src={`${posterPathSmall}${company.logo_path}`}
                alt="company logo"
              />
            ) : (
              ""
            )}
          </span>
          {company.name}
        </li>
      </div>
    ));

  const creatorList =
    created_by &&
    created_by.map((company) => (
      <div key={company.id}>
        <li className="movie-details-list-item">
          <span>
            {company.profile_path !== null ? (
              <img
                className="movie-details-list-logo"
                src={`${posterPathSmall}${company.profile_path}`}
                alt="company logo"
              />
            ) : (
              ""
            )}
          </span>
          {company.name}
        </li>
      </div>
    ));

  const tvDetailsTile = (
    <div key={id} className="details-movie-details-tile">
      <div className="movie-details-list-container">
        <span className="movie-details-list-title">Genre</span>
        <ul className="movie-details-list">{genrelist}</ul>
      </div>
      <div className="movie-details-list-container">
        <span className="movie-details-list-title">Networks</span>
        <ul className="movie-details-list">{networkList}</ul>
      </div>
      <div className="movie-details-list-container">
        <span className="movie-details-list-title">Production Companies</span>
        <ul className="movie-details-list">{productionCompaniesList}</ul>
      </div>
      <div className="movie-details-list-container">
        <span className="movie-details-list-title">Production Countries</span>
        <ul className="movie-details-list">{productionCountriesList}</ul>
      </div>
      <div className="movie-details-list-container">
        <span className="movie-details-list-title">Created By</span>
        <ul className="movie-details-list">{creatorList}</ul>
      </div>
    </div>
  );
  return { tvDetailsTile };
}

export default TvDetails;
