import React from "react";
import "./Home.css";
import Skill from "./Skill";
import features from "./Feature";
import Footer from "./Footer";
import Timeline from "./Timeline";

function createSkill(feature) {
  return (
    <Skill
      title={feature.title}
      image={feature.image}
      about={feature.about}
      head={feature.head}
      property={feature.property}
      toolhead={feature.toolhead}
      tools={feature.tools}
    />
  );
}

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
            src="https://mattfarley.ca/img/hero-devices.svg"
            alt="computer"
          />
        </div>
      </div>

      <div className="banner">
        <div className="head">
          <h2> Hi, I'm Harshit. Nice to meet you </h2>
        </div>
        <div className="description">
          <p>
            Since , I started my journey in Web Dev from my frist year of my
            college ,I have enough knowledge about front-end langauages
            currently working in react.js framework. mine upcoming target is to
            learn more about back-end . and eargly willing to work as a
            freelancer for business and comsumers users.
          </p>
        </div>
      </div>
      <div className="work">
        <div className="skills">{features.map(createSkill)}</div>
      </div>
      <div className="timeline">
        <Timeline />
      </div>
      <div>
        <div className="languages">
          <div className="image_languages">
            <img
              src={require("./image/photo4.gif")}
              alt="coder_image"
              className="code-image"
            />
          </div>
          <div className="image_languages">
            <h2 className="languages_header">
              Languages / Tools I used to with...
            </h2>
            <div className="inner-languages">
              <img
                src={require("./image/c.png")}
                alt="C Language"
                className="L1"
              />
              <img
                src={require("./image/c++.png")}
                alt="C++ Language"
                className="L2"
              />
              <img
                src={require("./image/java.png")}
                alt="Java Language"
                className="L3"
              />
              <img
                src={require("./image/html.png")}
                alt="Html"
                className="L4"
              />

              <img
                src={require("./image/javascript.png")}
                alt="Javascript"
                className="L5"
              />
            </div>
            <div className="inner-languages">
              <img
                src={require("./image/firebase.png")}
                alt="firebase"
                className="L6"
              />
              <img src={require("./image/css.png")} alt="CSS" className="L7" />
              <img
                src={require("./image/github.png")}
                alt="github"
                className="L8"
              />
            </div>
            <div className="inner-languages">
              <img
                src={require("./image/react.png")}
                alt="React"
                className="L9"
              />
              <img src={require("./image/git.png")} alt="git" className="L10" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
