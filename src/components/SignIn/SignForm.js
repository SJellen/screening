import { useContext } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Switch } from "react-router-dom";
import AuthOptions from "./AuthOptions";
import { Context } from "../../Context";

function SignForm() {
  const { toggleSignInForm } = useContext(Context);

  const signInTile = (
    <div className="signIn-container">
      <div className="signIn-toggle-container">
        <AuthOptions />
      </div>
      <Switch>{toggleSignInForm ? <SignInForm /> : <SignUpForm />}</Switch>
    </div>
  );

  return { signInTile };
}

export default SignForm;
