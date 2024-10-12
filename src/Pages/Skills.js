import React from "react";
import "../Styles/Skills.css"; // Create this file for your skills page styles
import "../Styles/Skills.css"; // Create this file for your skills page styles

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="Skills-Wrapper">
        <div className="Skills-items">
          <div className="key-Skills">
            <h1>Key Skills</h1>{" "}
            <ul>
              <li> Graphic Designing </li>

              <li> UI/UX Designing </li>
              <li> Front-End Development </li>
            </ul>
          </div>
          <div className="Extra-Skills">
            <h2> Extra Skills </h2>
            <ul>
              <li> Motion Graphics </li>
              <li> Digital Marketing </li>
              <li> Project Management </li>
              <li> Application Testing </li>
              <li> Application Flow Planing </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
