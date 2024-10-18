import React from "react";
import bgImae from "../assets/images/hero.jpg";
import "../modules/hero.css";

import { Link } from "react-router-dom";
const Hero = ({para,title}) => {
  // const img = "";
  return (
    <>
      <section className="position">
        <div className="hero-image">
          <img src={bgImae}></img>
        </div>
        <div className="overlay-dark"></div>

        <div className="hero-section d-flex align-item-center">
          <div className="container">
            <span className="subhead">{para}</span>
            <h1 className="display-4">{title}</h1>
          </div>
        </div>
      </section>
     
     
    </>
  );
};
export default Hero;
