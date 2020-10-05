import React from "react";
import oldTelephone from "../assets/old-telephone.png";

const Contact = () => {
  return (
    <section className="contact-me-container">
      <div className="contact-img-container">
        <h1>Get in touch</h1>
        <img
          src={oldTelephone}
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
