import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src={require("./image/logo_image.png")} alt="" />
        </div>
        <div className="hit_line">
          <h4>Living ,learning & leveling up one day at a time.</h4>
        </div>
        <div className="soical_media">
          <button>
            <a href="https://www.google.com/" target={"_blank"}>
              hi
            </a>
          </button>

          <button className="btnn"></button>
          <button className="btnn"></button>
          <button className="btnn"></button>
        </div>
        <div className="creator">
          <p>
            Handcraft by me <span>©</span>
            Harbazzar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
