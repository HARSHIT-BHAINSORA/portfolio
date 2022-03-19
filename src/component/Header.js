import React from "react";
import "./Header.css";

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
          <h3 className="option1">Home</h3>
        </div>
        <div className="nav__options">
          <h3 className="option2">Projects</h3>
        </div>
        <div className="nav__options">
          <h3 className="option3">Contact</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
