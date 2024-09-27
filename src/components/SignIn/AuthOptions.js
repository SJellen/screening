import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";

function AuthOptions() {
  const history = useHistory();
  const { toggleSignInForm, setToggleSignInForm } = useContext(Context);

  function register() {
    history.push("/signIn/register");
    setToggleSignInForm(false);
  }

  function logIn() {
    history.push("/signIn/logIn");
    setToggleSignInForm(true);
  }

  return (
    <div className="signIn-toggle">
      <button
        onClick={logIn}
        style={{ display: toggleSignInForm ? "none" : "" }}
        className="toggle-signIn-button"
      >
        Log In
      </button>
      <button
        onClick={register}
        style={{ display: toggleSignInForm ? "" : "none" }}
        className="toggle-signIn-button"
      >
        Register
      </button>
    </div>
  );
}

export default AuthOptions;
