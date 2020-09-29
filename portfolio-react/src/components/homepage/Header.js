import React from "react";

const Header = () => {
  return (
    <header className="header-banner">
      <div className="header-banner-div about-section-div">
        <h3>
          <a href="">About</a>
        </h3>
      </div>
      <div className="header-banner-div portfolio-section-div">
        <h3>
          <a href="">Portfolio</a>
        </h3>
      </div>
      <div className="header-banner-div contact-section-div">
        <h3>
          <a href="">Contact</a>
        </h3>
      </div>
    </header>
  );
};

export default Header;
