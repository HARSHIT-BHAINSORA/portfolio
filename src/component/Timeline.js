import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <div class="timeline">
      <ul>
        <li>
          <div class="timeline-content">
            <h3 class="date">19 September 2020</h3>
            <h1>First Year</h1>
            <p>
              I started my first year of college in 2020, but it was in Online
              mode 😊 and in that semesters I mainly focus on the basics of
              Computer Science and C Language Although I have a little bit
              experience in C++ ,HTML, and CSS also from my school.
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">11 June, 2021</h3>
            <h1>Second Year</h1>
            <p>
              In my second year, I mainly focus on the project so I started
              learing Web Development with it I also started practicing coding
              questions on the platform such as hackerank, leetcode, and gfg
              which help me to impove my logical reasoning.
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">12 August 2022</h3>
            <h1>Third Year</h1>
            <p>Current At</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">.....</h3>
            <h1>.......</h1>
            <p>Coming Soon</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
