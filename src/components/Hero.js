import React from "react";
import Social from "./element/Social";

export default function Hero() {
  return (
    <section className="hero-banner" id="hero">
      <div className="container">
        <div className="hero-body">
          <div className="social title float-left">
            <Social></Social>
            <p>Follow me</p>
          </div>

          <div className="intro-content ml-5">
            <div className="welcome-title">
              <p>Hello ! I am</p>
              <h1>
                Front-End <span className="bold-color">Designer</span>{" "}
              </h1>
            </div>
            <div className="designation-list">
              <ul>
                <li>
                  Template Developer | 🌐 Help You to Grow Your Business 🚀
                </li>
                <br />
              </ul>
            </div>
            <div className="resume">
              <a
                href="https://github.com/radwan503/FrontEndDesigner/blob/main/src/assets/IndustryBusinessTypeList.pdf"
                rel="noopener noreferrer"
                target="_blank"
                type="file"
                className="btn btn-lg btn-green text-white"
                download
              >
                Who Need Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
