import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '@mui/material';
import './contactform.css';
import { isValidForm } from 'utils/helper';

const USER_KEY = process.env.REACT_APP_USER_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

function ContactForm(props) {
  const [showErrorForm, setShowErrorForm] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setShowErrorForm(false);
    setFormState({
      ...formState,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isValidForm(formState)) {
        return setShowErrorForm(true);
      }

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
      alert('Message was not sent');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formState.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          type="email"
          id="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={formState.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="5"
          onChange={handleChange}
          value={formState.message}
        ></textarea>
      </div>

      <Button
        sx={{ margin: { md: '1% 10%', sm: '1% 0' } }}
        color="secondary"
        variant="contained"
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </Button>
      {showErrorForm && (
        <div className="form-error">
          <span>Make sure there is a valid email, name, and message!</span>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
