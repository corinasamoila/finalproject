import React from "react";
import { useState } from "react";
import "./Register.css";
import { firestore } from "./firebase";
import { ref, push, child, update } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import NavbarSec from "../Navbar/NavbarSec";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const user = useAuthState(auth);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleRegister = () => {
    if (!email) alert("Please enter your email");
    registerWithEmailAndPassword(firstName, lastName, email, password);
    navigate("/Login");
  };

  return (
    <>
      <NavbarSec />
      <nav class="bg-black navbar-dark navbar text-center">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h3>Register</h3>
        </div>
      </nav>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name
            </label>
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label " for="lastName">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            />
          </div>

          <div class="footer">
            <button
              onClick={() => handleRegister()}
              type="submit"
              className="btn btn-register"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
