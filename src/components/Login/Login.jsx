import React from "react";
import { useState } from "react";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../Register/firebase";
import "./Login.css";
import NavbarSec from "../Navbar/NavbarSec";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavbarSec />
      <nav class="bg-black navbar-dark navbar text-center">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h3>Login</h3>
        </div>
      </nav>
      <div className="form">
        <div className="form-body">
          <div className="email">
            <label className="form__label " for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input text-center"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password
            </label>
            <input
              className="form__input text-center"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div class="footer">
            <button
              type="submit"
              class="btn login__btn"
              onClick={() => {
                logInWithEmailAndPassword(email, password);
                setEmail("");
                setPassword("");
                navigate("/");
              }}
            >
              Login
            </button>
            <button
              className="login__btn login__google"
              onClick={() => {
                signInWithGoogle();
                navigate("/");
              }}
            >
              <img
                className="google-image"
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
