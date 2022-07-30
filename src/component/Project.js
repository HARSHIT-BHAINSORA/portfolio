import React from "react";
import "./Project.css";
import Card from "./Cards";

function Project() {
  return (
    <div>
      <div className="project_head">
        <h1>My Projects</h1>
      </div>
      <hr></hr>
      <div className="container2">
        <Card />
        <Card />
      </div>
      <div className="container2">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Project;
