import React, { useState } from "react";
import davidGif from "../assets/davidGif.gif";
import stillImg from "../assets/stillImg.png";

const HomepageBody = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <section className="homepage-body-container">
        <img
          src={mouseOver ? davidGif : stillImg}
          alt={"Gif of David"}
          className={"web-owner-gif"}
          onMouseEnter={() => setMouseOver(!mouseOver)}
          onMouseLeave={() => setMouseOver(false)}
        />
        <div className="homepage-body-section">
          <h4> Hi I'm David</h4>
          <h5>
            I’m an aspiring software engineer who just recently finished a
            9-month coding bootcamp with Lambda School. blahblahblah blah keep
            going
          </h5>
          <ul>
            <li className="social-contact-email">Email</li>
            <li className="social-contact-github">Github</li>
            <li className="social-contact-twitter">Twitter</li>
            <li className="social-contact-medium">Medium</li>
            <li className="social-contact-linkedin">LinkedIn</li>
          </ul>
        </div>
        <div className="portfolio-page-gradient"></div>
      </section>
    </>
  );
};

export default HomepageBody;
