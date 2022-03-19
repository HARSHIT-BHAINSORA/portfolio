import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="head__line">
          <h1>Coder , Web Developer & Student</h1>
        </div>
        <div className="tag__line">
          <p>
            The computer was born to solve problems that did not exist before.
          </p>
        </div>
        <div className="avatar">
          <img
            className="avatar__image"
            src={require("./image/avatar_image.png")}
            alt=""
          ></img>
        </div>
        <div className="computer">
          <img
            className="computer__image"
            src="https://mattfarley.ca/img/hero.svg"
          />
        </div>
      </div>

      <div className="banner">
        <div className="head"></div>
        <div className="description">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
