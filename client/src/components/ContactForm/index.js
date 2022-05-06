import React, { useState } from 'react';
import './contactform.css';

function ContactForm(props) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  console.log(formState);
  const onNameChange = (event) => {
    setFormState({ name: event.target.value });
  };

  const onEmailChange = (event) => {
    setFormState({ email: event.target.value });
  };

  const onMessageChange = (event) => {
    setFormState({ message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" onChange={onNameChange} />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={onEmailChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          rows="5"
          onChange={onMessageChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
