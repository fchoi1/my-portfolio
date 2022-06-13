import React from 'react';
import ContactForm from 'components/ContactForm';

import './contact.css';

function Contact(props) {


  return (
    <section id="Contact">
      <div className="section-wrapper contact-section">
        <div className="contact-container container">
          <div className="contact-title-wrapper section-name-wrapper">
            <h2 className="contact-title section-name">Contact Me!</h2>
          </div>
          <div className="contact-info-wrapper">
            <span className="contact-title">
              I am currently on the job market. Feel free to reach out to me
              about anything! If you have any questions or improvements I can
              make with this site!
            </span>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
