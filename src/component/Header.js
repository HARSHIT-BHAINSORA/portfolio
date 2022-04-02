import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={require("./image/logo_image.png")}
        alt=""
      ></img>

      <div className="RightOne"></div>
      <div className="navbar">
        <div className="nav__options">
          <Link to="/">
            <h3 className="option1">Home</h3>
          </Link>
        </div>
        <div className="nav__options">
          <Link to="/project">
            <h3 className="option2">Projects</h3>
          </Link>
        </div>
        <div className="nav__options">
          <Link to="/contact">
            <h3 className="option3">Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
