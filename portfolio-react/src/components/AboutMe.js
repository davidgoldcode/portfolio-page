import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me-page-container">
      <div className="about-me-image-container">
        <img
          src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/2020-06-23-7531-ANIMATION (1).png")}
          alt="pic of David"
          className="about-me-image"
        />
      </div>
      <div className="about-me-text-container">
        <h6>01. About Me</h6>
        <h6>Hi, I'm David Gold</h6>
        <p>
          I’m the co-founder of The Rotation, and ocassional engineer, product
          designer, photographer, and DJ in New York City.
        </p>
        <span>Instagram / Twitter / Email</span>
      </div>
    </section>
  );
};

export default AboutMe;
