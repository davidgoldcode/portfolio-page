import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio-page-container">
      <div className="portfolio-project-img-container">
        <img
          src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/portfolio-img/pexels-startup-stock-photos-7369.jpg")}
          alt="pic of project1"
          className="portfolio-image"
        />
        <img
          src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/portfolio-img/pexels-startup-stock-photos-7369.jpg")}
          alt="pic of project1"
          className="portfolio-image"
        />
      </div>

      <div className="portfolio-project-text-container-whole">
        <h1>02. Portfolio</h1>

        <div className="portfolio-project-text-container-individual">
          <h2>Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="portfolio-project-text-container-individual">
          <h2>Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="description-page-gradient"></div>
    </section>
  );
};

export default Portfolio;
