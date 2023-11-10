import React from "react";
import works from "./works.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="works--title">My Portfolio</h2>
      <span className="works--description">
        I take pride in ensuring that my clients get top-notch websites to suit their needs
      </span>
      <div className="works--imgs">
        <img src={portfolio1} alt={portfolio1} className="works-img" />
        <img src={portfolio2} alt={portfolio2} className="works-img" />
        <img src={portfolio3} alt={portfolio3} className="works-img" />
        <img src={portfolio4} alt={portfolio4} className="works-img" />
        <img src={portfolio5} alt={portfolio5} className="works-img" />
        <img src={portfolio6} alt={portfolio6} className="works-img" />
      </div>
      <button className="works--btn">See More</button>
    </section>
  );
};

export default Works;
