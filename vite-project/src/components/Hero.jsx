import React from "react";
import bgImae from "../assets/images/hero.jpg";
import "../modules/hero.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
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
      <div className="cards">
        <div className="page-section py-3 mt-md-n5 custom-index">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 py-3 py-md-0">
                <div className="card-service">
                  <div className="circle-shape bg-secondary text-white">
                    <span
                      className=" p-2"
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        backgroundColor: "red",
                        fontSize: "larger",
                      }}
                    >
                      <QuestionAnswerIcon className="fs-3 bg-none" />
                    </span>
                  </div>
                  <p>
                    <span>Chat</span> with a doctors
                  </p>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card-service wow fadeInUp">
                  <div className="circle-shape bg-primary text-white">
                    <span
                      className="p-2"
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        backgroundColor: "blue",
                        fontSize: "larger",
                      }}
                    >
                      <VerifiedUserTwoToneIcon className="fs-3 bg-none" />
                    </span>
                  </div>
                  <p>
                    <span>One</span>-Health Protection
                  </p>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card-service">
                  <div className="circle-shape bg-accent text-white">
                    <span
                      className="p-2"
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        backgroundColor: "indigo",
                        fontSize: "larger",
                      }}
                    >
                      <FavoriteTwoToneIcon />
                    </span>
                  </div>
                  <p>
                    <span>One</span>-Health Pharmacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default Hero;
