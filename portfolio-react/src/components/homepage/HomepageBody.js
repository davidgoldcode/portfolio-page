import React, { useState } from "react";

const HomepageBody = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <section className="homepage-body-container">
        <img
          src={
            mouseOver
              ? require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/west-side-hwy.gif")
              : require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/2020-06-23-7531-ANIMATION (1).png")
          }
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
            <li>Email</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>Medium</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomepageBody;
