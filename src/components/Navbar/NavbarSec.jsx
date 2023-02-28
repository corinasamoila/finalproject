import { useNavigate } from "react-router-dom";
import "./NavbarSec.css";
import React, { useState, useEffect } from "react";

const NavbarSec = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav-sec">
      {(toggleMenu || screenWidth > 1000) && (
        <ul id="nav-menu-sec">
          <li className="list-item-sec">
            <a href="/" onClick={() => navigate("/")}>
              Home{" "}
            </a>
          </li>
          <li className="list-item-sec">
            <a href="/Universities" onClick={() => navigate("/Universities")}>
              Universities
            </a>
          </li>
          <li className="list-item-sec">
            <a href="/Career" onClick={() => navigate("/Career")}>
              Career
            </a>
          </li>
          <li className="list-item-sec">
            <a href="/Maps" onClick={() => navigate("/Maps")}>
              Maps
            </a>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/9451/9451364.png" />
      </button>
    </nav>
  );
};

export default NavbarSec;
