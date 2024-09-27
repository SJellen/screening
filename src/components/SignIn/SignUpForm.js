import { useContext, useState } from "react";
import Axios from "axios";
import UserContext from "../../UserContext";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function SignUpForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="signUp-form-container">
      <span className="signIn-title">Create an Account</span>
      {error && (
        <ErrorMessage message={error} clearError={() => setError(undefined)} />
      )}
      <form className="signUp-form" onSubmit={submit}>
        <div className="input-label-container">
          <label className="input-label" htmlFor="register-email">
            Email
          </label>
          <input
            className="form-input"
            id="register-email"
            placeholder="ILuvMovies@email.com"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        <div className="input-label-container">
          <label className="input-label" htmlFor="register-displayName">
            Display Name
          </label>
          <input
            className="form-input"
            id="register-displayName"
            placeholder="ILuvMovies"
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
          />
        </div>
        <div className="input-label-container">
          <label className="input-label" htmlFor="register-password">
            Password
          </label>
          <input
            className="form-input"
            id="register-password"
            placeholder="Not1234"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Verify Password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </div>
        <input type="submit" value="Register" className="submit-form" />
      </form>
    </div>
  );
}

export default SignUpForm;
