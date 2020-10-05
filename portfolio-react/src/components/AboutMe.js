import React from "react";
import djphoto from "../assets/djphoto.jpg";

const AboutMe = () => {
  return (
    <section className="about-me-page-container">
      <img src={djphoto} alt="pic of David" className="about-me-image" />
      <div className="about-me-text-container">
        <h1>01. About Me</h1>
        <div className="about-body-section">
          <h2>Hopeful developer</h2>
          <p>
            Okay, maybe not. <br />
            <br />
            But I just finished a coding bootcamp, and I'm looking for a
            software development gig if you're hiring.
          </p>
        </div>
        <h4>Social info here</h4>
      </div>
      <div className="description-page-gradient"></div>
    </section>
  );
};

export default AboutMe;
