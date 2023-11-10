import React from "react";
import { Link } from "react-router-dom";
import "./MainBio.css";
import image from "./DSC4483.jpg";
import bf from "./icons8-briefcase-48.png";

export default function Mainbio() {
  return (
    <section id="main--section">
      <div className="main--area">
        <span className="main--h">Hello,</span> <br />
        <span className="main--I">
          I'm <span className="main-nametag">Michael</span>
        </span>
        <br />
        <span className="main--I">Website Developer</span>
        <p className="main--p">
          I'm a skilled web developer with experience in creating <br />
          visually appealing and user friendly websites
        </p>
        <Link>
          <button className="main--btn">         
            <img src={bf} className="main--bf"/> Hire Me
          </button>
        </Link>
      </div>
      <img src={image} alt={image} className="main--image" />
    </section>
  );
}
