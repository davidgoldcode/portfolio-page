import React from "react";

const Header = () => {
  return (
    <header className="header-banner">
      <a className="header-banner-anchor about-section-anchor" href="blah">
        <h3>About</h3>
      </a>
      <a className="header-banner-anchor portfolio-section-anchor" href="slfkj">
        <h3>Portfolio</h3>
      </a>
      <a className="header-banner-anchor contact-section-anchor" href="asdfasd">
        <h3>Contact</h3>
      </a>
      <a className="header-banner-anchor filler-section-anchor" href="asdfasd">
        <h3>Github</h3>
      </a>
    </header>
  );
};

export default Header;
