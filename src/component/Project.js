import React from "react";
import "./Project.css";
import Card from "./Cards";
import Footer from "./Footer";
import projects from "./projects";

function createProject(projects) {
  return (
    <Card
      title={projects.title}
      image={projects.image}
      about={projects.about}
      link={projects.link}
    />
  );
}

function Project() {
  return (
    <div>
      <div className="project_head">
        <h1>My Projects</h1>
      </div>
      <hr></hr>
      <div className="project-container">
        <div className="container2">
          {projects.slice(0, 2).map(createProject)}
        </div>
        <div className="container2">
          {projects.slice(2, 4).map(createProject)}
        </div>

        <div>
          <button className="Veiw-btn">
            <a href="https://github.com/HARSHIT-BHAINSORA">
              <span>VEIW OTHER PROJECTS</span>
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
