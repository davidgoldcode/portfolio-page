import React from "react";
import djphoto from "../assets/djphoto.jpg";

const Portfolio = () => {
  // need to change the aboutme tags here across all
  return (
    <section className="about-me-page-container">
      <img src={djphoto} alt="pic of David" className="about-me-image" />
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
