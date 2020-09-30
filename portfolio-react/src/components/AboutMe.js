import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me-page-container">
      <img
        src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/2020-06-23-7531-ANIMATION (1).png")}
        alt="pic of David"
        className="about-me-image"
      />
      <div className="about-me-text-container">
        <h1>01. About Me</h1>
        <div>
          <h2>Hi, I'm David Gold</h2>
          <p>
            I’m the co-founder of The Rotation, and ocassional engineer, product
            designer, photographer, and DJ in New York City.
          </p>
        </div>
        <h4>Instagram / Twitter / Email</h4>
      </div>
      <div className="description-page-gradient"></div>
    </section>
  );
};

export default AboutMe;
