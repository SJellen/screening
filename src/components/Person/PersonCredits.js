import { useContext } from "react";
import { Context } from "../../Context";
import PersonCrew from "./PersonCrew";
import PersonCast from "./PersonCast";
import PersonFilmographyNav from "./PersonFilmographyNav";
import "../../style/Person.css";

function PersonCredits() {
  const { personCredits } = useContext(Context);

  const {
    partMovieTile,
    partTvTile,
    personCastCount,
    sortedCastMovieArr,
    sortedCastTvArr,
  } = PersonCast();
  const { personFilmographyTile } = PersonFilmographyNav();
  const {
    personDirectorCrew,
    personWritingCrew,
    personProductionCrew,
    personOtherCrew,
    directorMovieTile,
    directorTvTile,
    writingMovieTile,
    writingTvTile,
    productionMovieTile,
    productionTvTile,
    miscMovieTile,
    miscTvTile,
    sortedTvMiscArr,
    otherJobArr,
    productionArr,
    writingArr,
    directorArr,
    sortedMovieMiscArr,
    sortedTvProductionArr,
    sortedMovieProductionArr,
    sortedTvWritingArr,
    sortedMovieWritingArr,
    sortedTvDirectorArr,
    sortedMovieDirectorArr,
  } = PersonCrew();
  const { cast } = personCredits;

  const personCredit = (
    <div className="person-filmography-container">
      {personFilmographyTile}
      <div className="person-filmography-header" id="filmography-title">
        <span className="person-filmography">Filmography</span>
      </div>
      {cast && cast.length > 0 ? (
        <div className="person-filmography-header">
          <span className="person-filmography" id="actor"></span>
          {personCastCount}
        </div>
      ) : (
        ""
      )}

      {sortedCastMovieArr && sortedCastMovieArr.length > 0 ? (
        <div>
          <span className="person-filmography-section-title">Movies</span>
          {partMovieTile}
        </div>
      ) : (
        ""
      )}

      {sortedCastTvArr && sortedCastTvArr.length > 0 ? (
        <div>
          <span className="person-filmography-section-title">Tv</span>
          {partTvTile}
        </div>
      ) : (
        ""
      )}

      {directorArr && directorArr.length > 0 ? (
        <div>
          <div className="person-filmography-header">
            <span className="person-filmography" id="director"></span>
            {personDirectorCrew}
          </div>

          {sortedMovieDirectorArr && sortedMovieDirectorArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Movie</span>
              {directorMovieTile}
            </div>
          ) : (
            ""
          )}

          {sortedTvDirectorArr && sortedTvDirectorArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Tv</span>
              {directorTvTile}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {writingArr && writingArr.length > 0 ? (
        <div>
          <div className="person-filmography-header">
            <span className="person-filmography" id="writer"></span>
            {personWritingCrew}
          </div>
          {sortedMovieWritingArr && sortedMovieWritingArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Movie</span>
              {writingMovieTile}
            </div>
          ) : (
            ""
          )}

          {sortedTvWritingArr && sortedTvWritingArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Tv</span>
              {writingTvTile}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {productionArr && productionArr.length > 0 ? (
        <div>
          <div className="person-filmography-header">
            <span className="person-filmography" id="producer"></span>
            {personProductionCrew}
          </div>
          {sortedMovieProductionArr && sortedMovieProductionArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Movie</span>
              {productionMovieTile}
            </div>
          ) : (
            ""
          )}

          {sortedTvProductionArr && sortedTvProductionArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Tv</span>
              {productionTvTile}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {otherJobArr && otherJobArr.length > 0 ? (
        <div>
          <div className="person-filmography-header">
            <span className="person-filmography" id="misc"></span>
            {personOtherCrew}
          </div>

          {sortedMovieMiscArr && sortedMovieMiscArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Movie</span>
              {miscMovieTile}
            </div>
          ) : (
            ""
          )}

          {sortedTvMiscArr && sortedTvMiscArr.length > 0 ? (
            <div>
              <span className="person-filmography-section-title">Tv</span>
              {miscTvTile}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
  return { personCredit };
}

export default PersonCredits;
