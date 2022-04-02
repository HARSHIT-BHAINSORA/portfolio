import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="box">
        <div className="headings">
          <h1 class="title">Start a project</h1>
        </div>
        <div className="data">
          <p className="para">
            Intersted in working together? We should queue up a chat . I'll buy
            the coffee.
          </p>
        </div>
        <div className="btn">
          <Link to="/contact">
            <button className="btn_inside">
              <span>Let's Connect</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="footer_container">
        <div className="footer_logo">
          <img src={require("./image/logo_image.png")} alt="" />
        </div>
        <div className="hit_line">
          <h4>Living ,learning & leveling up one day at a time.</h4>
        </div>
        <div className="soical_media">
          <button className="btnn">
            <a
              href="https://www.linkedin.com/in/harshit-bhainsora-788809202/"
              target={"_blank"}
            >
              <span>
                <p className="icon">in</p>
              </span>
            </a>
          </button>

          <button className="btnn">
            <a
              href="https://github.com/HARSHIT-BHAINSORA/portfolio.git/"
              target={"_blank"}
            >
              <span>
                <p className="icon">git</p>
              </span>
            </a>
          </button>
          <button className="btnn">
            <a href="https:youtube.com/" target={"_blank"}>
              <span>
                <p className="icon">f</p>
              </span>
            </a>
          </button>
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
