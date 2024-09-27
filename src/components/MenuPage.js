import React, { useContext } from "react";
import { Context } from "../Context";
import "../style/ItemPage.css";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function MenuPage() {
  const { handleLogoClick } = useContext(Context);

  return (
    <div>
      <div className="menu-page-container">
        <div className="menu-top-box">
          <div className="menu-logo-box">
            <Link
              to="/"
              className="menu-title-link"
              style={{ textDecoration: "none" }}
            >
              <span className="menu-title" onClick={handleLogoClick}>
                Screening
              </span>
            </Link>
          </div>
          <div className="menu-close-container">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <CloseIcon className="menu-page-close" />
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default MenuPage;
