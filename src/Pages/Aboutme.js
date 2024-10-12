import React from "react";
import "../Styles/Aboutme.css";
import "../Styles/global.css";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css-3.png";
import jsImage from "../assets/js.png";
import photoshopImage from "../assets/atom.png";
import figmaImage from "../assets/figma.png";
import CD from "../assets/Corel_Draw.png";

import xd from "../assets/xd.png";
import blender from "../assets/Blender.png";
import pp from "../assets/premiere-pro.png";
import photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";
import afterEffects from "../assets/after-effects.png";

const Aboutme = () => {
  const skillsImages = [
    htmlImage,
    cssImage,
    jsImage,
    photoshopImage,
    figmaImage,
    blender,
    afterEffects,
    Illustrator,
    photoshop,
    pp,
    xd,
    CD,
    // Add more images as needed
  ];

  return (
    <div className="about-container">
      <div className="aboutme-left">
        <div className="aboutme-wrapper">
          <h1 className="about-heading">
            Enthusiastic{" "}
            <span className="Foreground-Color"> Multimedia Designer</span>
          </h1>
          <p className="about-description">
            Hello! I'm Mirza Ibrahim, a multi-talented professional with a
            passion for graphic design and front-end development. I specialize
            in creating stunning visual designs and dynamic web applications.
          </p>

          <h2 className="about-subheading sub">
            <span className="Hover"> Experience </span>
          </h2>
          <ul className="experience-list">
            <li>
              <span className="Profession">UI/UX Developer </span> <br />
              Optimumn Business Solutions, (Riyadh - KSA) <br />
              March 2024 - Present
            </li>
            <li>
              <span className="Profession">Sr. Designer </span> <br />
              Smart Printing & Advertising (Riyadh - KSA) <br />
              September 2022 - 2024
            </li>
            <li>
              <span className="Profession"> UI/UX Designer </span> <br />
              MubarakRishte - Matrimonial Consultant (Hyderabad - India) <br />
              September 2022 - 2024
            </li>
          </ul>

          <div className="Education-wrapper sub">
            <h2 className="about-subheading">
              <span className="Hover">Education</span>{" "}
            </h2>
            <ul className="education-list">
              <li>
                <span className="Profession-white">
                  Bachelors of Business Administration{" "}
                </span>
                Osmania University - (2021 - 2024)
              </li>
              <li>
                <span className="Profession-white">
                  Diploma in Arts & Design{" "}
                </span>
                Ultracreations - (2015 - 2019)
              </li>
              <li>
                <span className="Profession-white">
                  Certification in Front-End Development{" "}
                </span>
                Coursera - Online Course (2020)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aboutme-right"></div>
      <div className="Skills-wrapper">
        <h2 className="about-subheading">
          <span className="Hover">Skills</span>
        </h2>
        <div className="skills-scroll-container">
          <div className="skills-scroll">
            {skillsImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Skill ${index + 1}`}
                className="skill-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
