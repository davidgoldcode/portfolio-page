import React from "react";

const Contact = () => {
  return (
    <section className="contact-me-container">
      <div className="contact-img-container">
        <h1>Get in touch</h1>
        <img
          src={require("/Users/davidgold/Documents/lambdaSchool/projects/personal/portfolio-page/portfolio-react/src/assets/old-telephone.png")}
          alt="yellow telephone"
          className="contact-img"
        />
      </div>
      <main className="contact-social-list">
        <h4>Github</h4>
        <h4>Facebook</h4>
        <h4>Twitter</h4>
      </main>
      <div className="contact-page-gradient"></div>
    </section>
  );
};

export default Contact;
