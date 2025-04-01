import { useContext } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import AuthOptions from "./AuthOptions";
import { Context } from "../../Context";

function SignForm() {
  const { toggleSignInForm } = useContext(Context);

  const signInTile = (
    <div className="signIn-container">
      <div className="signIn-toggle-container">
        <AuthOptions />
      </div>
      {toggleSignInForm ? <SignInForm /> : <SignUpForm />}
    </div>
  );

  return { signInTile };
}

export default SignForm;
