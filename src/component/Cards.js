import React from "react";
import "./Cards.css";

function Cards(props) {
  const img = props.image;
  console.log(img);
  return (
    <div>
      <div class="card">
        <figure class="card__thumb">
          <img src={require(`${img}`)} alt="background" class="card__image" />
          <figcaption class="card__caption">
            <h2 class="card__title">{props.title}</h2>
            <h5 class="card__snippet">{props.about}</h5>
            <a href={props.link} class="card__button">
              View Code
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Cards;
