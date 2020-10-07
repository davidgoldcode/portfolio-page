import React from "react";
import shawonphone from "../assets/shawonphone.jpg";

const Contact = () => {
  return (
    <section className="contact-page-section">
      <img
        src={shawonphone}
        alt="Shaq Shoe Phone"
        className="contact-page-photo"
      />
      <div className="contact-me-container">
        <h1>03. Get in touch</h1>
        <main className="contact-social-list">
          <h2 className="social-contact-email contact-page-list">Email</h2>
          <h2 className="social-contact-github contact-page-list">Github</h2>
          <h2 className="social-contact-twitter contact-page-list">Twitter</h2>
          <h2 className="social-contact-medium contact-page-list">Medium</h2>
          <h2 className="social-contact-linkedin contact-page-list">
            LinkedIn
          </h2>
        </main>
      </div>
    </section>
  );
};

export default Contact;
