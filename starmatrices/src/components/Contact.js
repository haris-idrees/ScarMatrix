import React, { useState } from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import contact from './images/cno.jpg';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/send-email/', formData);
      console.log(response.data.message); // Log the response message
      // Optionally, reset the form fields
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <Element name="contact-section" className="element">
        <h1 className="heading_con">Contact Us</h1>
        <div className="container-contact">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <button className="btn-contact" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="image">
            <img src={contact} alt="Image" />
          </div>
        </div>
      </Element>
    </>
  );
}

export default Contact;
