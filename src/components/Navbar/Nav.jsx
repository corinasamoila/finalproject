import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src="https://mediabank.ericsson.net/brandmanual/141943/5cae047e0f2c1ef05f9bda57632347c2.jpg"
        className="background"
      />
      <div className="overlay">
        <nav className="nav-first">
          <header>
            <h2 onClick={() => navigate("/")}>University Guide</h2>
          </header>
          <ul id="navMenu">
            <li className="list-item">
              <a
                className="active"
                href="/Universities"
                onClick={() => navigate("/Universities")}
              >
                Universities
              </a>
            </li>
            <li className="list-item">
              <a href="/Career" onClick={() => navigate("/Career")}>
                Career
              </a>
            </li>
            <li className="list-item">
              <a href="/Maps" onClick={() => navigate("/Maps")}>
                Maps
              </a>
            </li>
            <li className="list-item">
              <a href="/Register" onClick={() => navigate("/Register")}>
                Register
              </a>
            </li>
            <li className="list-item">
              <a href="/Login" onClick={() => navigate("/Login")}>
                Login
              </a>
            </li>
          </ul>

          <div class="toggleMenu">
            <i class="bx bx-menu-alt-right" id="rightMenu"></i>
          </div>
        </nav>
        <div className="container">
          <div class="contentBox">
            <h3>How to choose the right university</h3>
            <p>
              “An investment in knowledge always pays the best interest.” –
              <br />
              <i>Benjamin Franklin</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
