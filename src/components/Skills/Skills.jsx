import React from "react";
import "./skills.css";
import uidesign from "./icons8-ui-100.png";
import web from "./icons8-website-64.png";


export default function Skills() {
  return (
    <section id="skills">
      <span className="skills--title">
        {" "}
        What I do <br />
      </span>
      <span className="skills--description">
        Skilled in using design software to craft visually engaging and
        user-friendly digital products
        <br />
        Experienced in front-end and back-end web development, with expertise in
        HTML, CSS, <br />
        JavaScript, and various web frameworks. Strong problem-solving and
        debugging skills, <br />
        dedicated to building responsive and accessible websites.
      </span>
      <div className="skills--bars">
        <div className="skills--bar">
          <img src={uidesign} alt={uidesign} className="skills--bar-img"/>
          <div className="skills-bar-text">
            <h2>UI design</h2>
            <p>
              Proficient in creating intuitive user interfaces with a keen eye
              for aesthetics, usability, and user experience.
            </p>
          </div>
        </div>
        <div className="skills--bar">
          <img src={web} alt={web} className="skills--bar-img"/>
          <div className="skills-bar-text">
            <h2>Web Design</h2>
            <p>
              Strong problem-solving and debugging skills, dedicated to building
              responsive and accessible websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
