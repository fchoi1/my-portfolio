import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactform.css';

const USER_KEY = process.env.REACT_APP_USER_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

function ContactForm(props) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onNameChange = (event) => {
    setFormState({ ...formState, name: event.target.value });
  };

  const onEmailChange = (event) => {
    setFormState({ ...formState, email: event.target.value });
  };

  const onMessageChange = (event) => {
    setFormState({ ...formState, message: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formState,
        USER_KEY
      );

      if (result) {
        alert('Message Sent!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('Message was not sent');
      }
    } catch (error) {
      console.error(error);
      alert('Message was not sent');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={onNameChange}
          value={formState.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={onEmailChange}
          value={formState.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          rows="5"
          onChange={onMessageChange}
          value={formState.message}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
