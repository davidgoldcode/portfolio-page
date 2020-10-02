import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me-page-container">
      <img
        src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/2019-02-17-8899.jpg")}
        alt="pic of David"
        className="about-me-image"
      />
      <div className="about-me-text-container">
        <h1>01. About Me</h1>
        <div>
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
