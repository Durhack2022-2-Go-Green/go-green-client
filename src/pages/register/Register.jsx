import { useRef } from "react";
import "../../App.css";
import "./Register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GoGreen</h3>
          <span className="loginDesc">
          Share your contribution towards a greener planet with friends and the world on GoGreen.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}