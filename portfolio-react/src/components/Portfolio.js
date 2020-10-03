import React from "react";

const Portfolio = () => {
  // need to change the aboutme tags here across all
  return (
    <section className="about-me-page-container">
      <img
        src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/2019-02-17-8899.jpg")}
        alt="pic of David"
        className="about-me-image"
      />
      <div className="portfolio-text-container">
        <h1>02. Portfolio</h1>
        <div className="portfolio-body-section">
          <h2>Taco App</h2>
          <p>
            A pretty looking application to help satiate my love for Tacos.
            Generate a new Taco recipe on demand.
          </p>
        </div>
      </div>
      <div className="portfolio-page-gradient"></div>
    </section>
  );
};

export default Portfolio;
