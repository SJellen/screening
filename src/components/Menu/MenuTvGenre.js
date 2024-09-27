import React, { useEffect, useState } from "react";
import useMenuTvGenre from "../../logic/Menu/useMenuTvGenre";

function MenuTvGenre() {
  const {
    menuTvGenreTile1,
    menuTvGenreTile2,
    menuTvGenreTile3,
    menuTvGenreTile4,
    menuTvGenreTile5,
    menuTvGenreTile6,
    menuTvGenreTile7,
    menuTvGenreTile8,
    menuTvGenreTile9,
    menuTvGenreTile10,
  } = useMenuTvGenre();
  const [genrePathTv, setGenrePathTv] = useState();

  useEffect(() => {
    const path = window.location.pathname;
    const splitPath = path.split("/");
    const cleanPath = splitPath.filter((item) => item !== "");
    const pathGenre = cleanPath[2];
    setGenrePathTv(pathGenre);
  }, []);

  return (
    <div>
      <span className="slider-label-genre">{genrePathTv} Television</span>
      {menuTvGenreTile1 && menuTvGenreTile1.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile1}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile2 && menuTvGenreTile2.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile2}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile3 && menuTvGenreTile3.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile3}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile4 && menuTvGenreTile4.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile4}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile5 && menuTvGenreTile5.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile5}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile6 && menuTvGenreTile6.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile6}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile7 && menuTvGenreTile7.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile7}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile8 && menuTvGenreTile8.length ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile8}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile9 && menuTvGenreTile9.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile9}</div>
        </div>
      ) : (
        ""
      )}

      {menuTvGenreTile10 && menuTvGenreTile10.length > 0 ? (
        <div className="slider-container">
          <div className="slider-sub-container">{menuTvGenreTile10}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MenuTvGenre;
