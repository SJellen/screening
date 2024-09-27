import React, { useContext } from "react";
import { Context } from "../../Context";
import SignForm from "./SignForm";
import { Link } from "react-router-dom";
import "../../style/SignIn.css";
import CloseIcon from "@mui/icons-material/Close";

function SignIn() {
  const { signInMenu } = useContext(Context);
  const { signInTile } = SignForm();

  return (
    <div>
      {signInMenu ? (
        <div className="watchlist-page-container">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="item-page-close-container">
              <CloseIcon className="im im-x-mark item-page-close" />
            </div>
          </Link>
          <span className="signIn-page-title">
            Sign in to create a watch list
          </span>
          {signInTile}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignIn;
