import React, { useState } from "react";

const HomepageBody = () => {
  const [overImage, setOverImage] = useState(false);

  return (
    <>
      <body className="homepage-body-container">
        {!overImage && (
          <img
            src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/west-side-hwy-img.png")}
            alt="Funny GIF by the website creator"
            className="web-owner-gif"
            onMouseEnter={() => setOverImage(true)}
          />
        )}

        {overImage && (
          <img
            src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/west-side-hwy.gif")}
            alt="Funny GIF by the website creator"
            className="web-owner-gif"
            onMouseLeave={() => setOverImage(false)}
          />
        )}
        <section className="homepage-body-section">
          <h4> Hi I'm David</h4>
          <body></body>
        </section>
      </body>
    </>
  );
};

export default HomepageBody;
