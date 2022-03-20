import React from "react";
import "./Skill.css";

function Skill(props) {
  return (
    <div className="skill_component">
      <div className="icon">
        <img className="icon_image" src={props.image} alt="" />
      </div>
      <div className="heading">
        <h3>{props.title}</h3>
      </div>
      <div className="skill_desc">
        <p>{props.about}</p>
      </div>
      <div className="skill_head">
        <h3>{props.head}</h3>
      </div>
      <div className="about_skill">
        <p>{props.property}</p>
      </div>
      <div className="tool_head">
        <h3>{props.toolhead}</h3>
      </div>
      <div className="tools">
        <p>{props.tools}</p>
      </div>
    </div>
  );
}

export default Skill;
