import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div>
      <div class="card">
        <figure class="card__thumb">
          <img
            src={require("./image/bimage1.jpg")}
            alt="Picture by Kyle Cottrell"
            class="card__image"
          />
          <figcaption class="card__caption">
            <h2 class="card__title">AMAZON-CLONE</h2>
            <h5 class="card__snippet">
              Using React.js as a Framework & try to Implement major features of
              amazon app like Payments gate way , User Authentication and many
              more.
            </h5>
            <a
              href="https://github.com/HARSHIT-BHAINSORA/amazon-clone.git"
              class="card__button"
            >
              View Code
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Cards;
