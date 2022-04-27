import React from 'react';
import ContactForm from 'components/ContactForm';

import './contact.css';

function Contact(props) {
  return (
    <section id="Contact">
      <div className="section-wrapper contact-section">
        Contact Section Test
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
